import React from 'react';
import Modal from './Modal';
import '../../styles/ModalDeleteHeroe.css';

function ModalSaveHeroe(props) {
  return (
    <Modal modalIsOpen={props.modalIsOpen} onCloseModal={props.onCloseModal}>
      <div className="modaldeleteheroe">
        <h3>Mensaje</h3>
        <p>Guardado correctamente</p>
        <div>
          <button
            className="btn btn-daprimary"
            onClick={props.onRedirectToHeroes}
          >
            Aceptar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalSaveHeroe;
