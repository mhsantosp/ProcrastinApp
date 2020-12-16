import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'


export default class ButtonsChecklist extends Component {

    state = {
        modalEditar: false,
        modalBorrar: false,
        modalNueva: false,
    }

    modalEditar = () => {
        this.setState({ modalEditar: !this.state.modalEditar })
    }

    modalBorrar = () => {
        this.setState({ modalBorrar: !this.state.modalBorrar })
    }

    modalNueva = () => {
        this.setState({ modalNueva: !this.state.modalNueva })
    }

    render() {
        return (<div>
            <div className="col mt-5 buttons">
                <button
                    className="btn btn-outline-success buttonsChecklist"
                    onClick={() => this.modalEditar()}>Editar Tarea</button>
                <button
                    className="btn btn-outline-danger buttonsChecklist"
                    onClick={() => this.modalBorrar()}>Borrar Tarea</button>
                <button
                    className="btn btn-outline-info buttonsChecklist"
                    onClick={() => this.modalNueva()}>Nueva Tarea</button>
            </div>

            {/*Modal Borrar*/}

            <Modal isOpen={this.state.modalBorrar}>
                <ModalHeader className="modalHeader">
                    <div className="col">
                        <h3 className="modalTitle">Borrar Tarea</h3>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => this.modalBorrar()}></button>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <p>¿Estas seguro de borrar esta tarea?</p>
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn-no" data-bs-dismiss="modal">No</button>
                    <button type="button" className="btn-yes">Si</button>
                </ModalFooter>
            </Modal>

            {/*Modal Editar*/}

            <Modal isOpen={this.state.modalEditar}>
                <ModalHeader className="modalHeader">
                    <h2 className="modalTitle">Editar Tarea</h2>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => this.modalEditar()}></button>
                </ModalHeader>
                <ModalBody>
                    <p>Ingresa nuevo nombre de tarea:</p>
                    <input className="form-control" type="text" />
                </ModalBody>
                <ModalFooter>
                    <button
                        type="button"
                        className="btn-volver"
                        data-bs-dismiss="modal">Volver</button>
                    <button
                        type="button"
                        className="btn-done">¡Hecho!</button>
                </ModalFooter>
            </Modal>

            {/*Modal Nueva*/}

            <Modal isOpen={this.state.modalNueva}>
                <ModalHeader className="modalHeader">
                    <h2 className="modalTitle">Nueva Tarea</h2>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => this.modalNueva()}></button>
                </ModalHeader>
                <ModalBody>
                    <p>Ingresa nueva tarea:</p>
                    <input className="form-control" type="text" />
                </ModalBody>
                <ModalFooter>
                    <button
                        type="button"
                        className="btn-volver"
                        data-bs-dismiss="modal">Volver</button>
                    <button type="button" className="btn-done">¡Hecho!</button>
                </ModalFooter>
            </Modal>



        </div>



        )
    }
}