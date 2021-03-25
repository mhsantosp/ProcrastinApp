import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import Push from 'push.js'
import axios from 'axios';

export default function Checklist(props) {

  //Google calendar configuration

  // let gapi = window.gapi;
  //   let CLIENT_ID = "777338621702-f9as6dj9dh0imj7f8led4s69h5bee5qn.apps.googleusercontent.com";
  //   let API_KEY = "AIzaSyA_mvZK1V_bZK4hkvDCcvp0VzJuS4YeA-8";
  //   let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  //   let SCOPES = "https://www.googleapis.com/auth/calendar.events"

  //   const handleClick = () =>{
  //       gapi.load('client:auth2', ()=>{
  //           console.log('loaded client')

  //           gapi.client.init({
  //               apiKey: API_KEY,
  //               clientId: CLIENT_ID,
  //               discoveryDocs: DISCOVERY_DOCS,
  //               scopes: SCOPES
  //           })

  //           gapi.client.load('calendar', 'v3', ()=> console.log('calendar'))

  //           gapi.auth2.getAuthInstance().signIn()
  //           .then(()=>{
  //               var event = {
  //                   'summary': 'Google I/O 2015',
  //                   'location': '800 Howard St., San Francisco, CA 94103',
  //                   'description': 'A chance to hear more about Google\'s developer products.',
  //                   'start': {
  //                     'dateTime': '2015-05-28T09:00:00-07:00',
  //                     'timeZone': 'America/Los_Angeles',
  //                   },
  //                   'end': {
  //                     'dateTime': '2015-05-28T17:00:00-07:00',
  //                     'timeZone': 'America/Los_Angeles',
  //                   },
  //                   'recurrence': [
  //                     'RRULE:FREQ=DAILY;COUNT=2'
  //                   ],
  //                   'attendees': [
  //                     {'email': 'lpage@example.com'},
  //                     {'email': 'sbrin@example.com'},
  //                   ],
  //                   'reminders': {
  //                     'useDefault': false,
  //                     'overrides': [
  //                       {'method': 'email', 'minutes': 24 * 60},
  //                       {'method': 'popup', 'minutes': 10},
  //                     ],
  //                   },
  //                 };


  //                 let request = gapi.client.calendar.events.insert({
  //                     'calendarId': 'primary',
  //                     'resource': event,
  //                 })

  //                 request.execute(event =>{
  //                     window.open(event.htmlLink)
  //                 })
  //           })
  //       })
  //   setIsModalNewOpen(false)
  //   }

  //End of google calendar configuration


  const [datos, setDatos] = useState({
    nameTarea: '',
    prioridadTarea: '',
    fechaVencimiento: '',
    categoria: '',
    _id: localStorage.getItem('_id')
  });

  console.log(datos);

  const [data, setData] = useState([]);
  const [isModalNewOpen, setIsModalNewOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalCheckOpen, setIsModalCheckOpen] = useState(false);

  

   //Añadir tarea
  const addTask = (e) => {
    axios.post('http://localhost:4001/tasks', datos)

      .then(res => {
        setData(data.concat(res.data))
        console.log(res)
        console.log(res.data)
        showTask();
        return res.data
      })

    e.preventDefault();

  }

   //Mostrar tareas
  const showTask = () => {
    fetch('http://localhost:4001/tasks', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
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
        setIsModalCheckOpen(false)
        showTask();
      })
  }

  //Editar tarea
  const editTask = () => {
    axios.put(`http://localhost:4001/tasks/` + datos._id, datos)
      .then(res => {
        let newData = data;
        newData.map(tarea => {
          if (datos._id === tarea._id) {
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
  const selectedTask = (task, caso) => {
    setDatos(task);
    (caso === 'Editar') && setIsModalEditOpen(true)

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(datos)
  }

  // const filterCategory = (checkbox) =>{
  //   const filterData = Object.values(datos).filter(task => task.categoria === 'Diaria')
  //   if(filterData){

  //   }

  // }

  // const getfiltro = async () =>{
  //   const res = await axios.get('http://localhost:4001/tasks/'+datos.categoria)
  //   setData(res.data)
  // }

  // function filtro (){
  //   return Object.values(datos).filter((task) =>
  //          task.categoria ===  'Diaria')   
  // }

  // const [checked, setChecked] = useState([])

  // const handleFilter = (task) =>{
  //   const currentIndex = checked.indexOf(task);
  //   const newChecked = {...checked};

  //   if(currentIndex === -1){
  //     newChecked.push(task)
  //   }else{
  //     newChecked.splice(currentIndex, 1)
  //   }

  //   setChecked()
  // }


  //Notificacion

  Push.create("Tarea pendiente", {
    body: "'Reunión' esta programada para mañana",
    icon: "https://i.imgur.com/s6E0Kvn.png",
    timeout: 60000,
    onClick: function (){
      window.location="https://procrastinapp.netlify.app";
      this.close();
    }
  })


  return (

    <div className="d-flex flex-column align-items-center">
      <h2 className="titleList mb-4 text-left">Lista de Tareas</h2>
      <div className="options">
        
       
        <div className="taskFilter">
        
          <label className="container filterText">Todas
              <input type="checkbox" value="Todas"/>
            <span className="checkmark"></span>
          </label>
          <label className="container filterText">Diaria
              <input type="checkbox" value="Diaria"/>
            <span className="checkmark"></span>
          </label>
          <label className="container filterText">Trabajo
              <input type="checkbox" value="Trabajo"/>
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
                    <button className="btnCheck"
                    onClick={() => setIsModalCheckOpen(true)}>
                      <FontAwesomeIcon className="iconCheck" icon={faCheck} />
                    </button>
                  </td>
                  <td>
                    <button className="btn-edit"
                      onClick={() => selectedTask(task, 'Editar')}><FontAwesomeIcon icon={faEdit} /></button>
                    <button className="btn-delete"
                      onClick={() => setIsModalDeleteOpen(true)}><FontAwesomeIcon icon={faTrashAlt} /></button>
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

                {/*Modal Check Tarea*/}

                <Modal isOpen={isModalCheckOpen}>
                  <ModalHeader className="modalHeader">
                    <div className="row">
                      <h3 className="modalTitle col">¡Tarea terminada!</h3>
                      <button
                        type="button"
                        className="btn-close col"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => setIsModalCheckOpen(false)}><i className="fas fa-times"></i></button>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <p className="textChecked">¡Felicidades! Has completado esta tarea</p>
                    <p className="textShare">¿Te gustaría compartir este logro en tus redes sociales?</p>
                    <div className="socialmedia">
                      <FacebookShareButton url="https://procrastinapp.netlify.app" quote={`He logrado terminar mi tarea ${datos.nameTarea} en ProcrastinApp`}>
                        <FontAwesomeIcon className="socialMediaIcon" icon={faFacebookSquare} />
                      </FacebookShareButton>
                      <TwitterShareButton url="https://procrastinapp.netlify.app" title={`He logrado terminar mi tarea ${datos.nameTarea} en ProcrastinApp`}>
                        <FontAwesomeIcon className="socialMediaIcon" icon={faTwitterSquare} />
                      </TwitterShareButton>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <button type="button"
                      className="btn-no"
                      data-bs-dismiss="modal"
                      onClick={() => setIsModalCheckOpen(false)}>Aun no</button>
                    <button onClick={() => deleteTask(task._id)} type="button" className="btn-yes">Checkear</button>
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
              <FacebookShareButton url="https://procrastinapp.netlify.app" quote={`He creado una nueva tarea en Procrastinapp, ${datos.nameTarea} y tengo plazo hasta ${datos.fechaVencimiento}`}>
                <FontAwesomeIcon className="socialMediaIcon" icon={faFacebookSquare} />
              </FacebookShareButton>
              <TwitterShareButton url="https://procrastinapp.netlify.app" title={`He creado una nueva tarea en Procrastinapp, ${datos.nameTarea} y tengo plazo hasta ${datos.fechaVencimiento}`}>
                <FontAwesomeIcon className="socialMediaIcon" icon={faTwitterSquare} />
              </TwitterShareButton>

            </div>
          </ModalBody>
          <ModalFooter>
            <button
              type="button"
              className="btn-volver"
              data-bs-dismiss="modal"
              onClick={() => setIsModalNewOpen(false)}>Volver</button>
            <button type="submit" onClick={()=> setIsModalNewOpen(false)} className="btn-done">¡Hecho!</button>
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