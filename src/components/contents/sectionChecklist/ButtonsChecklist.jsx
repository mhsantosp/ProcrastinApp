import React from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'


export default function ButtonsChecklist(props){
    return(
        <div className="col mt-5 buttons">
            <button className="btn btn-outline-success buttonsChecklist">Editar Tarea</button>
            <button className="btn btn-outline-danger buttonsChecklist">Borrar Tarea</button>
            <button className="btn btn-outline-info buttonsChecklist">Nueva Tarea</button>
        </div>
    )
}