import React from 'react'
import ButtonsEditDelete from './ButtonsEditDelete'

export default function Checklist(props) {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="titleList mt-5 mb-4 text-left">Lista de Tareas</h2>
      <div className="container-fluid checklistBox">
        <div className="container-fluid py-3 px-0">
          <ul className="list-group">
            {props.tasks !== undefined ?

              <div className="container-fluid p-0">
                {
                  props.tasks.map((tasks) =>
                    <li className="list-group-item d-flex align-items-center pr-0">
                      <span>{tasks.task}</span>
                      
                      <input className="checkbox" type="checkbox" />
                      <ButtonsEditDelete />
                    </li>
                  )
                }
              </div> : ''
            }
          </ul>
        </div>
      </div>
    </div>
  )
}