import React, { useReducer, useState } from 'react';
import ModalSaveHeroe from '../Modal/ModalSaveHeroe';

function HeroeForm(props) {  
  return (
    <div className="col-sm-5">
      <br />
      <div className="panel panel-default">
        <div className="panel-body form-horizontal payment-form">
          <div className="form-group">
            <label htmlFor="Name" className="col-sm-3 control-label">
              Company
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="Company"
                value={props.formValues.Company}
                onChange={props.onChangeInput}
              />
              {props.validationMessage.Company && (
                <p>{props.validationMessage.Company}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Name" className="col-sm-3 control-label">
              Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="Name"
                value={props.formValues.Name}
                onChange={props.onChangeInput}
              />
              {props.validationMessage.Name && (
                <p>{props.validationMessage.Name}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Movie" className="col-sm-3 control-label">
              Movie
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="Movie"
                value={props.formValues.Movie}
                onChange={props.onChangeInput}
              />
              {props.validationMessage.Movie && (
                <p>{props.validationMessage.Movie}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="PhotoUrl" className="col-sm-3 control-label">
              Photo
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="PhotoUrl"
                value={props.formValues.PhotoUrl}
                onChange={props.onChangeInput}
              />
              {props.validationMessage.PhotoUrl && (
                <p>{props.validationMessage.PhotoUrl}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12 text-left">
              <button
                type="button"
                className="btn btn-danger mr-1"
                onClick={props.onSave}                
              >
                Guardar
              </button>
              <ModalSaveHeroe
                modalIsOpen={props.modalIsOpen}
                onCloseModal={props.onCloseModal}
                onRedirectToHeroes={props.onRedirectToHeroes}
              />
              <button
                type="button"
                className="btn btn-default mr-1"
                onClick={props.onBack}
              >
                Atras
              </button>
            </div>
          </div>
          {props.errorForm && (
            <div className="alert alert-danger" role="alert">
              {props.errorForm.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroeForm;
