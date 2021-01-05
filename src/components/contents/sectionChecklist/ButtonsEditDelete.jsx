import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default class ButtonsEditDelete extends Component {

  state = {
    modalEditar: false,
    modalBorrar: false,
  }

  modalEditar = () => {
    this.setState({ modalEditar: !this.state.modalEditar })
  }

  modalBorrar = () => {
    this.setState({ modalBorrar: !this.state.modalBorrar })
  }


  render() {
    return (
      <div className="col-4 mt-3">
        <button className="btn-edit"
          onClick={() => this.modalEditar()}><FontAwesomeIcon icon={faEdit} /></button>
        <button className="btn-delete"
          onClick={() => this.modalBorrar()}><FontAwesomeIcon icon={faTrashAlt} /></button>



        {/*Modal Borrar*/}

        <Modal isOpen={this.state.modalBorrar}>
          <ModalHeader className="modalHeader">
            <div className="row">
              <h3 className="modalTitle col">Borrar Tarea</h3>
              <button
                type="button"
                className="btn-close col"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => this.modalBorrar()}></button>
            </div>
          </ModalHeader>
          <ModalBody>
            <p>¿Estas seguro de borrar esta tarea?</p>
          </ModalBody>
          <ModalFooter>
            <button type="button"
              className="btn-no"
              data-bs-dismiss="modal"
              onClick={() => this.modalBorrar()}>No</button>
            <button type="button" className="btn-yes">Si</button>
          </ModalFooter>
        </Modal>

        {/*Modal Editar*/}

        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader className="modalHeader">
            <div className="row">
              <h2 className="modalTitle col">Editar Tarea</h2>
              <button
                type="button"
                className="btn-close col"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => this.modalEditar()}></button>
            </div>
          </ModalHeader>
          <ModalBody>
            <p>Ingresa nuevo nombre de tarea:</p>
            <input className="form-control input" type="text" />
          </ModalBody>
          <ModalFooter>
            <button
              type="button"
              className="btn-volver"
              data-bs-dismiss="modal"
              onClick={() => this.modalEditar()}>Volver</button>
            <button
              type="button"
              className="btn-done">¡Hecho!</button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}