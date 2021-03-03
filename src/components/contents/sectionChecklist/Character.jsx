import React from 'react'
import PersonajeInicial from '../../images/checklist1.png'


export default function Character(props) {
  return (
    <div className="container-fluid text-center p-0">
      <p className="p-checklist m-0">Escribe tus tareas pendientes</p>
      <p className="p-checklist m-0">Te ayudaré a organizarte mejor</p>
      <img className="checklistCharacter" alt="Personaje" src={PersonajeInicial} />
    </div>
  )
}