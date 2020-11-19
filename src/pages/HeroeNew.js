import React, { useReducer, useState } from 'react';
import HeroeForm from '../components/Heroe/HeroeForm';
import HeroePreview from '../components/Heroe/HeroePreview';
import LoaderPage from '../components/Loader/LoaderPage';
import { navigate } from "@reach/router";
import api from '../utils/api';
import HeroReducer from '../reducer/HeroeReducer';

const HeroeNew = (props) => {

  const [heroForm, setHeroForm] = useState({
    Company: '',
    Name: '',
    Movie: '',
    PhotoUrl: '',
  });

  const [component, setComponent] = useState({
    loading: false,
    error: null,
    modalIsOpen: false
  });

  const [validationMessages, setValidationMessages] = useState({
    Company: undefined,
    Name: undefined,
    Movie: undefined,
    PhotoUrl: undefined,
  });

  const [estadoHeroe, dispatchHeroe] = useReducer(HeroReducer, heroForm);

  const handleCreateHeroe = async () => {
    setComponent({ ...component, loading: true, error: null });
    try {
      await api.heroes.createHeroe(estadoHeroe);
      setComponent({ ...component, loading: false, modalIsOpen: true, error: null });
    } catch (error) {
      setComponent({ ...component, loading: false, error: error });
    }
  };

  const handleChange = (e) => {
    setHeroForm({
      ...heroForm,
      [e.target.name]: e.target.value
    });
  }

  const handleGoBack = () => {
    //props.history.goBack();
    navigate(-1);
  };

  const onCloseModal = () => {
    //this.props.history.push('/');
    navigate(`/`)
  };

  const onRedirectToHeroes = () => {
    //this.props.history.push('/');
    navigate(`/`)
  };

  const handleValidateForm = () => {
    let flagExecution = true;
    let messageCompany = undefined;
    let messageName = undefined;
    let messageMovie = undefined;
    let messagePhotoUrl = undefined;

    if (heroForm.Company === '') {
      messageCompany = 'Este campo es obligatorio';
      flagExecution = false;
    }
    if (heroForm.Name === '') {
      messageName = 'Este campo es obligatorio';
      flagExecution = false;
    }
    if (heroForm.Movie === '') {
      messageMovie = 'Este campo es obligatorio';
      flagExecution = false;
    }
    if (heroForm.PhotoUrl === '') {
      messagePhotoUrl = 'Este campo es obligatorio';
      flagExecution = false;
    }

    if (flagExecution) {
      dispatchHeroe({
        type: 'ADD_HERO'
      })
      estadoHeroe.Company = heroForm.Company;
      estadoHeroe.Name = heroForm.Name;
      estadoHeroe.Movie = heroForm.Movie;
      estadoHeroe.PhotoUrl = heroForm.PhotoUrl;
      
      handleCreateHeroe();
    } else {
      setValidationMessages({
        ...validationMessages,
        Company: messageCompany,
        Name: messageName,
        Movie: messageMovie,
        PhotoUrl: messagePhotoUrl
      });
    }
  };

  if (component.loading) {
    return <LoaderPage />
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <HeroeForm
            onChangeInput={handleChange}
            formValues={heroForm}
            onBack={handleGoBack}
            onSave={handleValidateForm}
            errorForm={component.error}
            validationMessage={validationMessages}
            modalIsOpen={component.modalIsOpen}
            onCloseModal={onCloseModal}
            onRedirectToHeroes={onRedirectToHeroes}
          />
          <HeroePreview
            company={heroForm.Company || 'COMPANY NAME'}
            name={heroForm.Name || 'HEROE NAME'}
            movie={heroForm.Movie || 'MOVIE NAME'}
            photoUrl={
              heroForm.PhotoUrl ||
              'https://i.pinimg.com/originals/b5/34/df/b534df05c4b06ebd32159b2f9325d83f.jpg'
            }
          />
        </div>
      </div>
    </>
  );
}

export default HeroeNew;