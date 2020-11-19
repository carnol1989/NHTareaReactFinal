import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/Modal.css';

function Modal(props) {
  const containerModal = document.getElementById('modal');
  if (!props.modalIsOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-container">
        <button onClick={props.onCloseModal} className="modal-close-button">
          x
        </button>
        {props.children}
      </div>
    </div>,
    containerModal
  );
}

export default Modal;
