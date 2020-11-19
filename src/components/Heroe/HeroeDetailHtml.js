import React from 'react';
import { Link } from '@reach/router';
import ModalDeleteHeroe from '../Modal/ModalDeleteHeroe';

function HeroeDetailHtml(props) {
  return (
    <div className="container">
      <div className="col-12">
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-danger">
              {props.heroe.Company}
            </strong>
            <h3 className="mb-0">{props.heroe.Name}</h3>
            <div className="mb-1 text-muted">{props.heroe.Movie}</div>
            <div>
              <br />
              <Link
                to={`/heroe/${props.heroe.id}/edit`}
                className="btn btn-warning mr-1"
              >
                Editar
              </Link>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Eliminar
              </button>

              <ModalDeleteHeroe
                modalIsOpen={props.modalIsOpen}
                onCloseModal={props.onCloseModal}
                onDeleteHeroe={props.onDeleteHeroe}
              />
            </div>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              src={props.heroe.PhotoUrl}
              className="bd-placeholder-img"
              width="200"
              height="250"
              alt="-"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroeDetailHtml;
