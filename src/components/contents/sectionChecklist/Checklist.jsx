import React from 'react'
import ButtonsEditDelete from './ButtonsEditDelete'

export default function Checklist(props) {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="titleList mt-5 mb-4 text-left">Lista de Tareas</h2>
      <div className="checklistBox">
        <div className="container-fluid">
          <ul className="my-3 p-0">
            {props.tasks !== undefined ?

              <div className="row">
                {
                  props.tasks.map((tasks) =>
                    <li className="col-12 d-flex align-items-center mb-2">{tasks.task}<input className="checkbox" type="checkbox" />
                      <ButtonsEditDelete /></li>
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