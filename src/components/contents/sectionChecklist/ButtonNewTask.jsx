import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'


export default class ButtonsChecklist extends Component {

  state = {
    modalNueva: false,
  }

  modalNueva = () => {
    this.setState({ modalNueva: !this.state.modalNueva })
  }

  render() {
    return (<div>
      <div className="col mt-5 buttons">
        <button
          className="btn-newTask mt-4"
          onClick={() => this.modalNueva()}>Nueva Tarea</button>
      </div>

      {/*Modal Nueva*/}

      <Modal isOpen={this.state.modalNueva}>
        <ModalHeader className="modalHeader">
          <div className="row">
            <h2 className="modalTitle col">Nueva Tarea</h2>
            <button
              type="button"
              className="btn-close col"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => this.modalNueva()}></button>
          </div>
        </ModalHeader>
        <ModalBody>
          <p>Ingresa nueva tarea:</p>
          <input className="form-control input" type="text" />
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn-volver"
            data-bs-dismiss="modal"
            onClick={() => this.modalNueva()}>Volver</button>
          <button type="button" className="btn-done">¡Hecho!</button>
        </ModalFooter>
      </Modal>

    </div>

    )
  }
}