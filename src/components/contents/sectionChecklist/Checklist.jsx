import React, { useState, useEffect } from 'react'
import ButtonsEditDelete from './ButtonsEditDelete'
import axios from 'axios'



export default function Checklist(props) {

  const db = 'https://api-fake-procrastin-app.vercel.app/usuarios'

  const [user, setUser] = useState({
    id: "1",
    nombre: "Gisell Mazo",
    correo: "gisellmazo@gmail.com",
    usuario: "gisellmazo13",
    contraseña: "1214743656",
    tareas:
    {
      tarea1: "Hacer tarea de Historia",
      tarea2: "Estudiar Inglés",
      tarea3: "Ejercitarme",
      tarea4: "Leer libro pendiente"
    }

  })

  /* const [database, setDatabase] = useState([]);

   const peticionGet = async () => {
       await axios.get(db)
           .then(response => {
               setDatabase(response.database)
           })
   }

   useEffect(async () => {
       await peticionGet();
   }, [])*/

  /*función en la que especificamos que sehara con la tarea seleccionada
  dependiendo la acción, ya sea editar o borrar*/
  /*const selectTask = (task, action) =>{
      setTaksSelected(task);
      (action === 'Editar')
  }*/

  /*const mostrarTarea = () =>{
      fetch('https://api-fake-procrastin-app.vercel.app/usuarios')
      .then(response => response.json())
      .then(user => setUser(user))

  }*/


  return (
    <div className="col">
      <h2 className="titleList mt-4 text-left">Lista de Tareas</h2>
      <div className="mt-3 checklistBox">
        <div className="col">

          <ul>
            {/*{
                            database.map((item) => {
                                return(
                                <div className="row">
                                    <li className="col-8" key={item.id}>{item.nombre}<input className="checkbox" type="checkbox" /></li>
                                    <ButtonsEditDelete />
                                </div>
                            )})
                        }*/}


            <div className="row">
              <li className="col-8">{user.tareas.tarea1}<input className="checkbox" type="checkbox" /></li>
              <ButtonsEditDelete />
            </div>

            <div className="row">
              <li className="col-8">{user.tareas.tarea2}<input className="checkbox" type="checkbox" /></li>
              <ButtonsEditDelete />
            </div>

            <div className="row">
              <li className="col-8">{user.tareas.tarea3}<input className="checkbox" type="checkbox" /></li>
              <ButtonsEditDelete />
            </div>
          </ul>
        </div>
      </div>



    </div>
  )
}