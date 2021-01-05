import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

export default function ButtonsEditDelete() {

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const [isModalEditOpen, setIsModalEditOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState({

  })

  const handleChange = e => {
    const { name, value } = e.target;
    setSelectedItem(prevState => ({
      ...prevState,
      [name]: value
    }))

    console.log(selectedItem)
  }

  return (
    <div className="col-4 mt-3">
      <button className="btn-edit"
        onClick={() => setIsModalEditOpen(true)}><FontAwesomeIcon icon={faEdit} /></button>
      <button className="btn-delete"
        onClick={() => setIsModalDeleteOpen(true)}><FontAwesomeIcon icon={faTrashAlt} /></button>


      {/*Modal Borrar*/}

      <Modal isOpen={isModalDeleteOpen}>
        <ModalHeader className="modalHeader">
          <div className="row">
            <h3 className="modalTitle col">Borrar Tarea</h3>
            <button
              type="button"
              className="btn-close col"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsModalDeleteOpen(false)}>X</button>
          </div>
        </ModalHeader>
        <ModalBody>
          <p>¿Estas seguro de borrar esta tarea?</p>
        </ModalBody>
        <ModalFooter>
          <button type="button"
            className="btn-no"
            data-bs-dismiss="modal"
            onClick={() => setIsModalDeleteOpen(false)}>No</button>
          <button type="button" className="btn-yes">Si</button>
        </ModalFooter>
      </Modal>


      {/*Modal Editar*/}

      <Modal isOpen={isModalEditOpen}>
        <ModalHeader className="modalHeader">
          <div className="row">
            <h2 className="modalTitle col">Editar Tarea</h2>
            <button
              type="button"
              className="btn-close col"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsModalEditOpen(false)}>X</button>
          </div>
        </ModalHeader>
        <ModalBody>
          <p>Ingresa nuevo nombre de tarea:</p>
          <input onChange={handleChange} className="form-control input" type="text" />
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn-volver"
            data-bs-dismiss="modal"
            onClick={() => setIsModalEditOpen(false)}>Volver</button>
          <button
            type="button"
            className="btn-done">¡Hecho!</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
