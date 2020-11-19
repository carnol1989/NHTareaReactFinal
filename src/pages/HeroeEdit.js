import React, { useState, useEffect } from 'react';
import HeroeForm from '../components/Heroe/HeroeForm';
import HeroePreview from '../components/Heroe/HeroePreview';
import LoaderPage from '../components/Loader/LoaderPage';
import { navigate } from "@reach/router";
import api from '../utils/api';


const HeroeEdit = (props) => {

  const [hero, setHeroe] = useState({
    heroeId: props.heroeId,
    form: {
      Company: '',
      Name: '',
      Movie: '',
      PhotoUrl: '',
    }
  });

  const [component, setComponent] = useState({
    loading: true,
    error: null,
    modalIsOpen: false,
    validationMessages: {
      Company: undefined,
      Name: undefined,
      Movie: undefined,
      PhotoUrl: undefined,
    }
  });

  useEffect(() => {
    getDataHeroes();
  }, []);

  const getDataHeroes = async () => {
    try {
      const dataHeroe = await api.heroes.getHeroe(hero.heroeId);
      setHeroe({ ...hero, form: dataHeroe });
      setComponent({ ...component, loading: false });
    } catch (error) {
      setComponent({ ...component, loading: false, error: error });
    }
  };

  const handleChange = (e) => {
    setHeroe({
      ...hero, form: {
        ...hero.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleEditHeroe = async () => {
    setComponent({ ...component, loading: true, error: null });
    try {
      await api.heroes.updateHeroe(hero.heroeId, hero.form);
      setComponent({ ...component, loading: false, modalIsOpen: true });
    } catch (error) {
      setComponent({ ...component, loading: false, error: error });
    }
  };

  const handleValidateForm = () => {
    let flagExecution = true;
    let messageCompany = undefined;
    let messageName = undefined;
    let messageMovie = undefined;
    let messagePhotoUrl = undefined;

    if (hero.form.Company === '') {
      messageCompany = 'Este campo es obligatorio';
      flagExecution = false;
    }
    if (hero.form.Name === '') {
      messageName = 'Este campo es obligatorio';
      flagExecution = false;
    }
    if (hero.form.Movie === '') {
      messageMovie = 'Este campo es obligatorio';
      flagExecution = false;
    }
    if (hero.form.PhotoUrl === '') {
      messagePhotoUrl = 'Este campo es obligatorio';
      flagExecution = false;
    }

    if (flagExecution) {
      handleEditHeroe();
    } else {
      setComponent({
        ...component, validationMessages: {
          Company: messageCompany,
          Name: messageName,
          Movie: messageMovie,
          PhotoUrl: messagePhotoUrl,
        },
      });
    }
  };

  const onCloseModal = () => {
    navigate(`/`);
  };

  const onRedirectToHeroes = () => {
    navigate(`/`);
  };

  if (component.loading) {
    return <LoaderPage />;
  }
  return (
    <div className="container">
      <div className="row">
        <HeroeForm
          onChangeInput={handleChange}
          onSave={handleValidateForm}
          formValues={hero.form}
          onBack={handleGoBack}
          errorForm={component.error}
          validationMessage={component.validationMessages}
          modalIsOpen={component.modalIsOpen}
          onCloseModal={component.onCloseModal}
          onRedirectToHeroes={onRedirectToHeroes}
        />
        <HeroePreview
          company={hero.form.Company || 'COMPANY NAME'}
          name={hero.form.Name || 'HEROE NAME'}
          movie={hero.form.Movie || 'MOVIE NAME'}
          photoUrl={
            hero.form.PhotoUrl ||
            'https://i.pinimg.com/originals/b5/34/df/b534df05c4b06ebd32159b2f9325d83f.jpg'
          }
        />
      </div>
    </div>
  );

}

export default HeroeEdit;