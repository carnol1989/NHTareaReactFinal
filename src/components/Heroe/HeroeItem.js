import React from 'react';
import { Link } from '@reach/router';

function HeroeItem({ heroe }) {
  return (
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-danger">
          {heroe.Company}
        </strong>
        <h3 className="mb-0">{heroe.Name}</h3>
        <div className="mb-1 text-muted">{heroe.Movie}</div>
        <div>
          <br />
          <Link
            to={`/heroe/${heroe.id}/detail`}
            className="btn btn-primary"
          >
            Ver más
          </Link>
        </div>
      </div>
      <div className="col-auto d-none d-lg-block">
        <img
          src={heroe.PhotoUrl}
          className="bd-placeholder-img"
          width="200"
          height="250"
          alt="-"
        />
      </div>
    </div>
  );
}

export default HeroeItem;
