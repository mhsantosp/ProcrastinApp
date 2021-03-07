import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function ButtonsEditDelete(props) {
  
  const id_user = localStorage.getItem('id')
  const db = `https://api-fake-procrastin-app.vercel.app/users/${id_user}`

  let keys = Object.entries(db).length;
  console.log(props.user)

  const [newTask, setNewTask] = useState('');

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const handleChange = e => {
    const { value } = e.target;
    setNewTask(value)
  }

  const handleOnClick = async (event) => {
    event.preventDefault();
    event.target.disabled = true;

    const lastTask = props.user.tasks[props.user.tasks.length - 1]
    if (lastTask.id == undefined) {
      lastTask = {
        id: 0
      }
    }

    const task = {
      id: parseInt(lastTask.id) + 1,
      task: newTask
    }

    props.user.tasks.push(task)

    axios.put(db, props.user)
      .then(response => {
        props.peticionGet()
        setIsModalEditOpen(false)
      })

    console.log(props.user)
  };


  return (
    <div className="container-fluid m-0 p-0" id="botones">
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
              onClick={() => setIsModalDeleteOpen(false)}><i className="fas fa-times"></i></button>
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
              onClick={() => setIsModalEditOpen(false)}><i className="fas fa-times"></i></button>
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
            className="btn-done" onClick={handleOnClick}>¡Hecho!</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}