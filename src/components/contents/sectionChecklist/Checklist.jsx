import React from 'react'
import ButtonsEditDelete from './ButtonsEditDelete'




export default function Checklist(props) {
  

  /*  const [user, setUser] = useState({
       id : "1",
       nombre : "Gisell Mazo",
       correo : "gisellmazo@gmail.com",
       usuario : "gisellmazo13",
       contraseña : "1214743656",
       tareas : 
           {
               tarea1 : "Hacer tarea de Historia",
               tarea2 : "Estudiar Inglés",
               tarea3 : "Ejercitarme",
               tarea4 : "Leer libro pendiente"
           }
   }) */

  
  

  return (
    <div className="col">
      <h2 className="titleList mt-4 text-left">Lista de Tareas</h2>
      <div className="mt-3 checklistBox">
        <div className="col">

          <ul>
            {props.tasks !== undefined ? 
              
             
                  
                  <div className="row">
                    
                    {
                    props.tasks.map((tasks)=>
                    <li className="col-12">{tasks.task}<input className="checkbox" type="checkbox" />
                    <ButtonsEditDelete /></li>
                    )
                    }
                  </div>: ''
              
            }

          </ul>
        </div>
      </div>
    </div>
  )
}