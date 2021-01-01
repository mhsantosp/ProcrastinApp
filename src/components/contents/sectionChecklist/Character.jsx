import React from 'react'
import PersonajeInicial from '../../images/checklist1.png'


export default function Character(props) {
  return (
    <div className="col anuncios">
      <p className="p-checklist">Escribe tus tareas pendientes<br></br>Te ayudaré a organizarte mejor</p>
      <img className="img-fluid checklistCharacter" src={PersonajeInicial} />
    </div>
  )
}