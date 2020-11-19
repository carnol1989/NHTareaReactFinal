import React from 'react';

import '../../styles/Banner.css';

function Banner() {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 text-white mt-5 mb-2">React App</h1>
            <p className="lead mb-5 text-white-50">
              Aplicación web usando React y aplicando los conceptos principales
              de esta poderosa librería.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
