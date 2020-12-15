import React from 'react'

export default function NewTask(props){
    return(<div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Nueva Tarea</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Ingresa nueva tarea:</p>
                    <input className="form-control" type="text"/>
                </div>
                <div class="modal-footer">
                     <button type="button" className="btn btn-volver" data-bs-dismiss="modal">Volver</button>
                     <button type="button" className="btn btn-done">¡Hecho!</button>
                </div>

            </div>

        </div>
    )
}