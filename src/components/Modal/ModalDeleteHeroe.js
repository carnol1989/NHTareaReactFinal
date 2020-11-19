import React from 'react';
import Modal from './Modal';
import '../../styles/ModalDeleteHeroe.css';

function ModalDeleteHeroe(props) {
  return (
    <Modal modalIsOpen={props.modalIsOpen} onCloseModal={props.onCloseModal}>
      <div className="modaldeleteheroe">
        <h3>¿Estas seguro?</h3>
        <p>Estas apunto de elminar un personaje.</p>
        <div>
          <button className="btn btn-danger" onClick={props.onDeleteHeroe}>
            Eliminar
          </button>
          <button className="btn btn-default" onClick={props.onCloseModal}>
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalDeleteHeroe;
