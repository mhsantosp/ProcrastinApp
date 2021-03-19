import React, { useState, useEffect } from 'react'
import ButtonsEditDelete from './ButtonsEditDelete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';

export default function Checklist(props) {


  const [datos, setDatos] = useState({
    nameTarea: '',
    prioridadTarea: '',
    fechaVencimiento: '',
    categoria: '',
    _id: localStorage.getItem('_id')
  });



  // const [nameTarea, setNameTarea] = useState('');
  // const [prioridadTarea, setPrioridadTarea] = useState('');
  // const [fechaVencimiento, setFechaVencimiento] = useState('');
  // const [categoria, setCategoria] = useState('');

  console.log(datos);

  const [data, setData] = useState([]);
  const [isModalNewOpen, setIsModalNewOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const addTask = (e) => {
    axios.post('http://localhost:4001/tasks', datos)

      .then(res => {
        setData(data.concat(res.data))
        console.log(res)
        console.log(res.data)
        showTask();
        return res.data

      })
    // .then(data => {
    //   setDatos({
    //     nameTarea: '',
    //     prioridadTarea: '',
    //     fechaVencimiento: '',
    //     categoria: '',
    //   });

    // })
    // .catch(err => console.error(err))


    e.preventDefault();

  }

  const showTask = () => {
    fetch('http://localhost:4001/tasks', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors', // <---
      cache: 'default'
    })
      .then(res => res.json())
      .then(data => setData(data),
        console.log(data),
        console.log(datos))
  }
  useEffect(() => {
    showTask();
  }, [])

  //Eliminar tarea
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

  const editTask = () =>{
    axios.put(`http://localhost:4001/tasks/`+ datos._id, datos)
    .then(res =>{
      let newData = data;
      newData.map(tarea=>{
        if(datos._id === tarea._id){
          tarea.nameTarea = datos.nameTarea;
          tarea.prioridadTarea = datos.prioridadTarea;
          tarea.categoria = datos.categoria;
          tarea.fechaVencimiento = datos.fechaVencimiento;
        }
      })
      setData(newData)
    })
    setIsModalEditOpen(false)
  }
  const selectedTask = (task, caso) =>{
    setDatos(task);
    (caso === 'Editar')&&setIsModalEditOpen(true)

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(datos)
  }


  return (

    <div className="d-flex flex-column align-items-center">
      <h2 className="titleList mb-4 text-left">Lista de Tareas</h2>
      <div className="options">
        <div className="taskFilter">
          <label className="container filterText">Todas
              <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container filterText">Diaria
              <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="container filterText">Trabajo
              <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="divNewTask">
          <h3 className="newTaskText">Crear nueva tarea</h3>
          <button
            className="btnNewTask"
            onClick={() => setIsModalNewOpen(true)}><FontAwesomeIcon className="newTaskIcon" icon={faPlus} /></button>
        </div>
      </div>

      <div className="container-fluid checklistBox">
        <table className="container-fluid py-3 px-0 tableheader">


          <thead>
            <tr className="list-group liheader">
              <th className="liTitle">Categoría</th>
              <th className="liTitle">Tarea</th>
              <th className="liTitle">Prioridad</th>
              <th className="liTitle">Fecha Limite</th>
              <th className="liTitle">Checkear</th>
              <th className="liTitle">Editar/Eliminar</th>
            </tr>
          </thead>

          {data.map(task => {

            return (
              <tbody>
                <tr className="list-group">
                  <td className="taskCategory">{task.categoria}</td>
                  <td className="taskName">{task.nameTarea}</td>
                  <td className="taskPriority">{task.prioridadTarea}</td>
                  <td className="taskLimitDate">{task.fechaVencimiento}</td>
                  <td>
                    <button className="btnCheck">
                      <FontAwesomeIcon className="iconCheck" icon={faCheck} />
                    </button>
                  </td>
                  <td>
                    <button className="btn-edit"
                      onClick={() =>  selectedTask(task, 'Editar')}><FontAwesomeIcon icon={faEdit} /></button>
                    <button className="btn-delete"
                      onClick={() =>  selectedTask(task, 'Eliminar')}><FontAwesomeIcon icon={faTrashAlt} /></button>
                  </td>
                </tr>
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
                    <button onClick={() => deleteTask(task._id)} type="button" className="btn-yes">Si</button>

                  </ModalFooter>
                </Modal>
              </tbody>
            )
          })}

          <tbody>
            <tr className="list-group">
              <td className="taskCategory">Diaria</td>
              <td className="taskName">Sacar al perro</td>
              <td className="taskPriority">Media</td>
              <td className="taskLimitDate">11-Marzo-2021</td>
              <td>
                <button className="btnCheck">
                  <FontAwesomeIcon className="iconCheck" icon={faCheck} />
                </button>
              </td>
              <td>
                <button className="btn-edit"
                  onClick={() => setIsModalEditOpen(true)}><FontAwesomeIcon icon={faEdit} /></button>
                <button className="btn-delete"
                  onClick={() => setIsModalDeleteOpen(true)}><FontAwesomeIcon icon={faTrashAlt} /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      {/*Modal Nueva*/}

      <Modal isOpen={isModalNewOpen}>
        <form onSubmit={addTask}>
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
            <label htmlFor="categoria" className="labelname">Categoría:</label>
            <select className="inputNewTask form-control input" value={datos.categoria} onChange={handleChange} name="categoria">
              <option value="Diaria">Diaria</option>
              <option value="Trabajo">Trabajo</option>
            </select>
            <label htmlFor="nameTarea" className="labelname">Nombre de la tarea:</label>
            <input onChange={handleChange} name="nameTarea" type="text" value={datos.nameTarea} className="form-control input" />

            <label htmlFor="prioridadTarea" className="labelname">Prioridad de la tarea:</label>
            <select className="inputNewTask form-control input" value={datos.prioridadTarea} onChange={handleChange} name="prioridadTarea">
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
            <label htmlFor="fechaVencimiento" className="labelname">Fecha limite para la tarea:</label>
            <input className="inputNewTask form-control input" value={datos.fechaVencimiento} onChange={handleChange} name="fechaVencimiento" type="date" />

            <h2 className="labelname">¿Te gustaría compartir tu proceso en us redes sociales?</h2>
            <div className="socialmedia">
              <FontAwesomeIcon className="socialMediaIcon" icon={faFacebookSquare} />
              <FontAwesomeIcon className="socialMediaIcon" icon={faTwitterSquare} />
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              type="button"
              className="btn-volver"
              data-bs-dismiss="modal"
              onClick={() => setIsModalNewOpen(false)}>Volver</button>
            <button type="submit" onClick={() => setIsModalNewOpen(false)} className="btn-done">¡Hecho!</button>
          </ModalFooter>
        </form>
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
            <label htmlFor="categoria" className="labelname">Nueva categoría:</label>
            <select className="inputNewTask form-control input" value={datos && datos.categoria} onChange={handleChange} name="categoria">
              <option value="Diaria">Diaria</option>
              <option value="Trabajo">Trabajo</option>
            </select>
            <label htmlFor="nameTarea" className="labelname">Nuevo nombre de la tarea:</label>
            <input onChange={handleChange} value={datos && datos.nameTarea} name="nameTarea" type="text" className="form-control input" />
            <label htmlFor="prioridadTarea" className="labelname">Nueva prioridad de la tarea:</label>
            <select className="inputNewTask form-control input" value={datos && datos.prioridadTarea} onChange={handleChange} name="prioridadTarea">
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>

            <label htmlFor="fechaVencimiento" className="labelname">Nueva fecha limite para la tarea:</label>
            <input className="inputNewTask form-control input" value={datos && datos.fechaVencimiento} onChange={handleChange} name="fechaVencimiento" type="date" />
          </ModalBody>
          <ModalFooter>
            <button
              type="button"
              className="btn-volver"
              data-bs-dismiss="modal"
              onClick={() => setIsModalEditOpen(false)}>Volver</button>
            <button type="submit" onClick={() => editTask()} className="btn-done">¡Hecho!</button>

          </ModalFooter>
        </form>
      </Modal>
    </div>
  )

}