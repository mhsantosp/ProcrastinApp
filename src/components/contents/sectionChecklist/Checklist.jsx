import React, { useState, useEffect } from 'react'
import ButtonsEditDelete from './ButtonsEditDelete'
import axios from 'axios'



export default function Checklist(props) {
  // const id_user = 1
  const db = `https://api-fake-procrastin-app.vercel.app/users`

  /* const [user, setUser] = useState({
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
  }) */

  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(db)
      .then(response => {
        console.log(response)
        setData(response.data)
      })
  }

  useEffect(async () => {
    await peticionGet();
  }, [])

  return (
    <div className="col">
      <h2 className="titleList mt-4 text-left">Lista de Tareas</h2>
      <div className="mt-3 checklistBox">
        <div className="col">

          <ul>
            {
              data.map((item) => {
                return (
                  <div className="row">
                    <li className="col-8" key={item.id}>{item.tasks.task1}<input className="checkbox" type="checkbox" /></li>
                    <ButtonsEditDelete />
                  </div>
                )
              })
            }

            {
              data.map((item) => {
                return (
                  <div className="row">
                    <li className="col-8" key={item.id}>{item.tasks.task2}<input className="checkbox" type="checkbox" /></li>
                    <ButtonsEditDelete />
                  </div>
                )
              })
            }

            {
              data.map((item) => {
                return (
                  <div className="row">
                    <li className="col-8" key={item.id}>{item.tasks.task3}<input className="checkbox" type="checkbox" /></li>
                    <ButtonsEditDelete />
                  </div>
                )
              })
            }

            {
              data.map((item) => {
                return (
                  <div className="row">
                    <li className="col-8" key={item.id}>{item.tasks.task4}<input className="checkbox" type="checkbox" /></li>
                    <ButtonsEditDelete />
                  </div>
                )
              })
            }

            {/* <div className="row">
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
            */}
          </ul>
        </div>
      </div>
    </div>
  )
}