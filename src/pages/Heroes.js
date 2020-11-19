
import React, { useState, useEffect } from 'react';
import HeroeList from '../components/Heroe/HeroeList';
import MessageWarning from '../components/Messages/MessageWarning';
import ButtonNewHero from '../components/Button/ButtonNewHero';
import LoaderHeroes from '../components/Loader/LoaderHeroes';
import api from '../utils/api';

const Heroes = () => {

  const [objHeroe, setObjHeroe] = useState({});

  const setHeroe = (setloading, error, data) => {
    const heroe = {
      loading: setloading,
      error: error,
      heroes: data,
    };
    setObjHeroe(heroe);
  };

  useEffect(() => {
    const getDataHeroes = async () => {
      setHeroe(true, null, undefined);
      try {
        const dataHeroes = await api.heroes.listHeroes();
        setHeroe(false, null, dataHeroes);
      } catch (error) {
        setHeroe(false, error, null);
      }
    };
    getDataHeroes();
  }, []);

  if (objHeroe.loading) {
    return (
      <React.Fragment>
        <ButtonNewHero />
        <br />
        <LoaderHeroes />
      </React.Fragment>
    );
  }
  
  if (objHeroe.error) {
    return <MessageWarning message={objHeroe.error.message} />;
  }

  if (!objHeroe.heroes || objHeroe.length === 0) {
    return (
      <div>
        <ButtonNewHero />
        <br />
        <MessageWarning message="No existe información." />;
      </div>
    );
  }

  return (
    <div>
      <ButtonNewHero />
      <br />
      <HeroeList heroes={objHeroe.heroes} />
    </div>
  );
}

export default Heroes;
