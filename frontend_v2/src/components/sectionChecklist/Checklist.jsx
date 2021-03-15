import React, { useState, useEffect } from 'react'
import ButtonsEditDelete from './ButtonsEditDelete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare } from  '@fortawesome/free-brands-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function Checklist(props) {


  const [datos, setDatos] = useState({
    nameTarea: '',
    prioridadTarea: '',
    fechaVencimiento: '',
    categoria: '',
    _id: ''
  });

  const [tasks, setTasks] = useState([]);
  const [isModalNewOpen, setIsModalNewOpen] = useState(false);

  const addTask = (e) => {
      fetch('http://localhost:3004/tasks', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(res => {res.json()
        console.log(res)})
        .then(data => {
            setDatos({
              nameTarea: '',
              prioridadTarea: '',
              fechaVencimiento: '',
              categoria: '',
            });
            showTask();
        })
        .catch(err => console.error(err))
    
     
    e.preventDefault();

  }

  const showTask = () => {
    fetch('http://localhost:3004/tasks')
      .then(res => res.json())
      .then(data => setTasks(data),
        console.log(tasks),
        console.log(datos))
  }
  useEffect(() => {
    showTask();
  }, [])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      [name]: value
    })
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

        
          <tr className="list-group liheader">
            <th className="liTitle">Categoría</th>
            <th className="liTitle">Tarea</th>
            <th className="liTitle">Prioridad</th>
            <th className="liTitle">Fecha Limite</th>
            <th className="liTitle">Checkear</th>
            <th className="liTitle">Editar/Eliminar</th>
          </tr>
        
        {tasks.map(task => {

         return(
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
              <ButtonsEditDelete />
            </td>
          </tr>
          )})}

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
              <ButtonsEditDelete />
            </td>
          </tr>
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
            <label htmlFor="nameTarea" className="labelname">Nombre de la tarea:</label>
            <input onChange={handleChange} name="nameTarea" type="text" className="form-control input" />
            <label htmlFor="prioridadTarea" className="labelname">Prioridad de la tarea:</label>
            <select className="inputNewTask form-control input" onChange={handleChange} name="prioridadTarea">
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
            <label htmlFor="prioridadTarea" className="labelname">Categoría:</label>
            <select className="inputNewTask form-control input" onChange={handleChange} name="prioridadTarea">
              <option value="diaria">Diaria</option>
              <option value="trabajo">Trabajo</option>
            </select>
            <label htmlFor="fechaVencimiento" className="labelname">Fecha limite para la tarea:</label>
            <input className="inputNewTask form-control input" onChange={handleChange} name="fechaVencimiento" type="date" />
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



    </div>
    // <div className="d-flex flex-column align-items-center">
    //   <h2 className="titleList mt-5 mb-4 text-left">Lista de Tareas</h2>
    //   <div className="container-fluid checklistBox">
    //     <div className="container-fluid py-3 px-0">
    //       <ul className="list-group">

    //       {tasks.map(task => {

    //         return(
    //           <div className="container-fluid p-0">
    //                 <li className="list-group-item d-flex align-items-center pr-0">
    //                   <span>{task.nameTarea}</span>
    //                   <span>{task.prioridadTarea}</span>
    //                   <span>{task.fechaVencimiento}</span>

    //                   <input className="checkbox" type="checkbox" />
    //                   <ButtonsEditDelete />
    //                 </li>

    //           </div> 
    //         )})}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  )
}