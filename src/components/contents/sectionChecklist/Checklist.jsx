import React, {useState} from 'react'


export default function Checklist(props){

    const [user, setUser] = useState({
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
        
    })

    const mostrarTarea = () =>{
        fetch('https://api-fake-procrastin-app.vercel.app/usuarios')
        .then(response => response.json())
        .then(user => setUser(user))

    }


    return(
        <div className="col">
            <h2 className="titleList mt-4 text-left">Lista de Tareas</h2>
            <div className="mt-3 checklistBox">
                <div className="col">
                
                    <ul>
                        <li>1. {user.tareas.tarea1} <input className="checkbox" type="checkbox"/></li>
                        <li>2. {user.tareas.tarea2} <input className="checkbox" type="checkbox"/></li>
                        <li>3. {user.tareas.tarea3} <input className="checkbox" type="checkbox"/></li>
                        <li>4. {user.tareas.tarea4} <input className="checkbox" type="checkbox"/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}