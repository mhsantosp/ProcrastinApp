import React, { useState, useEffect } from 'react'
import Checklist from './Checklist'
import ButtonNewTask from './ButtonNewTask'
import Character from './Character'
import axios from 'axios'

export default function SectionChecklist(props) {
  
  const id_user = localStorage.getItem('id')
  const db = `https://api-fake-procrastin-app.vercel.app/users/${id_user}`

  const [data, setData] = useState({});

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
    <section className="container-fluid tareas">
      <article className="row">
        <div className="col-sm-12 col-md-6 py-3 order-2 order-md-1">
          <Checklist {...data} />
          <ButtonNewTask user={data} peticionGet={peticionGet} />
        </div>
        <div className="col-sm-12 col-md-6 py-5 characterSC order-1 order-md-2">
          <Character />
        </div>
      </article>
    </section>
  )
}