import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import axios from 'axios'


export default function ButtonsChecklist() {

  const db = 'https://api-fake-procrastin-app.vercel.app/users'

  const [isModalNewOpen, setIsModalNewOpen] = useState(false)

  const [data, setData] = useState([]);

  const [selectedItem, setSelectedItem] = useState({
    tarea: ""
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setSelectedItem(prevState => ({
      ...prevState,
      [name]: value
    }))

    console.log(selectedItem)
  }

  const peticionPost = async () => {
    await axios.post(db, selectedItem)
      .then(response => {
        setData(data.concat(response.data));
        setIsModalNewOpen(false)
      })
  }

  return (
    <div>
      <div className="col mt-5 buttons">
        <button
          className="btn-newTask mt-4"
          onClick={() => setIsModalNewOpen(true)}>Nueva Tarea</button>
      </div>


      {/*Modal Nueva*/}

      <Modal isOpen={isModalNewOpen}>
        <ModalHeader className="modalHeader">
          <div className="row">
            <h2 className="modalTitle col">Nueva Tarea</h2>
            <button
              type="button"
              className="btn-close col"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsModalNewOpen(false)}>X</button>
          </div>
        </ModalHeader>
        <ModalBody>
          <p>Ingresa nueva tarea:</p>
          <input name="tarea" onChange={handleChange} className="form-control input" type="text" />
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn-volver"
            data-bs-dismiss="modal"
            onClick={() => setIsModalNewOpen(false)}>Volver</button>
          <button type="button" onClick={peticionPost} className="btn-done">¡Hecho!</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}