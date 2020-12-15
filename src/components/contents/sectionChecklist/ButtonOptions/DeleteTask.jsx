import React from 'react'

export default function DeleteTask(props){
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Borrar Tarea</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>¿Estas seguro de borrar esta tarea?</p>
                </div>
                <div class="modal-footer">
                     <button type="button" className="btn btn-no" data-bs-dismiss="modal">No</button>
                     <button type="button" className="btn btn-yes">Si</button>
                </div>

            </div>

        </div>
    )
}