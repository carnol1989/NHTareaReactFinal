import React, { useMemo, useState } from 'react';
import HeroeItem from './HeroeItem';

function HeroeList({ heroes }) {

  const listaHeroes = heroes;

  const [txtSearch, setTxtSearch] = useState('');

  let resultListHeroes = useMemo(() => {
    if (txtSearch === '') {
      return listaHeroes;
    } else {
      return listaHeroes.filter(hero => hero.Name.toLocaleLowerCase().includes(txtSearch.toLocaleLowerCase()));
    }    
  }, [txtSearch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <input type="text"
            placeholder="Buscar Heroe"
            className="form-control"
            onChange={(e) => setTxtSearch(e.target.value)} 
            value={txtSearch} />
        </div>
      </div>
      <br />
      <div className="row mb-2">
        {resultListHeroes.map((item) => {
          return (
            <div key={item.id} className="col-md-6">
              <HeroeItem heroe={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroeList;
