import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';

export default function ButtonsChecklist(props) {
  const id_user = localStorage.getItem('id')
  const db = `https://api-fake-procrastin-app.vercel.app/users/${id_user}`

  let keys = Object.entries(db).length;
  console.log(props.user)

  const [isModalNewOpen, setIsModalNewOpen] = useState(false);

  const [newTask, setNewTask] = useState('');

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
    } else {
      
    }

    const task = {
      id: parseInt(lastTask.id) + 1,
      task: newTask
    }

    props.user.tasks.push(task)

    axios.put(db, props.user)
      .then(response => {
        props.peticionGet()
        setIsModalNewOpen(false)
      })

    console.log(props.user)
  };


  return (
    <div className="container-fluid">
      <div className="container-fluid d-flex justify-content-center mt-5 buttons">
        <button
          className="btn-newTask"
          onClick={() => setIsModalNewOpen(true)}>Nueva Tarea</button>
      </div>


      {/*Modal Nueva*/}

      <Modal isOpen={isModalNewOpen}>
        <ModalHeader className="modalHeader">
          <div className="row">
            <h2 className="modalTitle col">Nueva Tarea</h2>
            <button
              type="button"
              className="btn-close col"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsModalNewOpen(false)}><i className="fas fa-times"></i></button>
          </div>
        </ModalHeader>
        <ModalBody>
          <p>Ingresa nueva tarea:</p>
          <input name="task" value={newTask.task}
            onChange={handleChange} className="form-control input" type="text" />
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn-volver"
            data-bs-dismiss="modal"
            onClick={() => setIsModalNewOpen(false)}>Volver</button>
          <button type="button"
            onClick={handleOnClick} className="btn-done">¡Hecho!</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
