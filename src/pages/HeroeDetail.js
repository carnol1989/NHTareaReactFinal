//import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import HeroeDetailHtml from '../components/Heroe/HeroeDetailHtml';
import LoaderPage from '../components/Loader/LoaderPage';
import api from '../utils/api';
import { navigate } from "@reach/router";

const HeroeDetail = (props) => {

  const [heroe, setHeroe] = useState({
    heroeId: props.heroeId,
    heroe: undefined,
  });

  const [component, setComponent] = useState({
    loading: true,
    error: null,
    modalIsOpen: false
  });

  useEffect(() => {
    getDataHeroe();
  }, []);


  const getDataHeroe = async () => {
    try {
      //this.setState({ loading: true, error: null });
      const dataHeroe = await api.heroes.getHeroe(heroe.heroeId);
      //this.setState({ loading: false, heroe: dataHeroe });
      setHeroe({ ...heroe, heroe: dataHeroe });
      setComponent({ ...component, loading: false, error: null });

    } catch (error) {
      //this.setState({ loading: false, error: error });
      setComponent({ ...component, loading: false, error: error });
    };
  };
  const deleteHeroe = async () => {
    try {
      setComponent({ ...component, loading: true, error: null });
      await api.heroes.removeHeroe(this.state.heroeId);
      setComponent({ ...component, loading: false });
      navigate(`/`)
    } catch (error) {
      setComponent({ ...component, loading: false, error: error });
    }
  };


  const onOpenModal = () => {
    setComponent({ ...component, modalIsOpen: true });
  };

  const onCloseModal = () => {
    setComponent({ ...component, modalIsOpen: false });
  };


  if (component.loading) {
    return <LoaderPage />;
  }
  return (
    <HeroeDetailHtml
      heroe={heroe.heroe}
      modalIsOpen={component.modalIsOpen}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
      onDeleteHeroe={deleteHeroe}
    />
  );
}

export default HeroeDetail;