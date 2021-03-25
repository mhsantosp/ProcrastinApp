import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function ButtonsEditDelete(props) {


  const [newTask, setNewTask] = useState('');

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const [datos, setDatos] = useState({
    nameTarea: '',
    prioridadTarea: '',
    fechaVencimiento: '',
    categoria: '',
    _id: localStorage.getItem('_id')
  });

  const deleteTask = (id) => {
    fetch(`http://localhost:4001/tasks/${id}`, {
      method: 'DELETE',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setIsModalDeleteOpen(false)
        showTask();


      })
  }

  const editTask = (id) => {
    fetch(`/tasks/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setDatos({
          nameTarea: datos.nameTarea,
          prioridadTarea: datos.prioridadTarea,
          fechaVencimiento: datos.fechaVencimiento,
          categoria: datos.categoria,
          _id: datos._id
        })
      })
  }
  const showTask = () => {
    fetch('http://localhost:3004/tasks')
      .then(res => res.json())
      .then(data => setTasks(data),
        console.log(tasks))
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      [name]: value
    })
  }


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
        <form>
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
            <label htmlFor="nameTarea" className="labelname">Nuevo nombre de la tarea:</label>
            <input onChange={handleChange} name="nameTarea" type="text" className="form-control input" />
            <label htmlFor="prioridadTarea" className="labelname">Nueva prioridad de la tarea:</label>
            <select className="inputNewTask form-control input" onChange={handleChange} name="prioridadTarea">
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
            <label htmlFor="prioridadTarea" className="labelname">Nueva categoría:</label>
            <select className="inputNewTask form-control input" onChange={handleChange} name="prioridadTarea">
              <option value="diaria">Diria</option>
              <option value="trabajo">Trabajo</option>
            </select>
            <label htmlFor="fechaVencimiento" className="labelname">Nueva fecha limite para la tarea:</label>
            <input className="inputNewTask form-control input" onChange={handleChange} name="fechaVencimiento" type="date" />
          </ModalBody>
          <ModalFooter>
            <button
              type="button"
              className="btn-volver"
              data-bs-dismiss="modal"
              onClick={() => setIsModalEditOpen(false)}>Volver</button>
            <button type="submit" onClick={() => setIsModalEditOpen(false)} className="btn-done">¡Hecho!</button>

          </ModalFooter>
        </form>
      </Modal>
    </div>
  )
}
