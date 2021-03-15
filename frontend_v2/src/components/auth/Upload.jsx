import React, { useState } from "react";
import './LoginSignup.scss';
import UploadService from "../../services/upload.service";
import Avatar from "../../images/avatar.svg";
import { Form, Card, Image } from 'react-bootstrap';

const Upload = ({ setImages, images }) => {
  const [file, setFile] = useState();
  console.log('file antes de useFormik: ', file);
  const [pathImage, setPathImage] = useState(`${Avatar}`); // previsualiza la imagen antes de enviarla a la base de datos
  console.log('pathImgPerfil antes de useFormik: ', pathImage);

  // función para enviar imagen
  const sendImage = (e) => {
    e.preventDefault();
    UploadService.sendImages(file).then((result) => {
      console.log('El resultado es: ', result);
    })
  }

  // función para leer imagen y previsualiza la imagen
  const onFileChange = e => {
    console.log('length: ', e.target.files.length)
    if (e.target.files && e.target.files.length > 0) {
      console.log('length-2: ', e.target.files.length)
      const file = e.target.files[0]
      if (file.type.includes('image')) {
        const reader = new FileReader(); // lee la imagen
        reader.readAsDataURL(file); // leer la img como url
        reader.onload = function load() { // manda estado del resultado de la lectura anterior
          setPathImage(reader.result)
        }
      }
      setFile('esta es la img leida', file);
    } else {
      console.log("Error, no encuentro la imagen !!")
    }
  }

  return (
    <section className="container-fluid registros">
      <article className="authenticateIdentity">
        <Card>
          <div className="form">
            <div className="form-log-in">
              <Form>
                <Form.Row>
                  <div className="form-group col-sm-12 col-md-12 imPerfil">
                    <div className="container-fluid selectImg">
                      <Image
                        className="img-fluid card-img-top p-1 imgPerfil rounded-circle"
                        src={pathImage}
                        alt="Image"
                        loading="lazy"
                      />
                      <div className="fileImg">
                        <label htmlFor="imgPerfil">
                          <span color="primary" aria-label="upload picture" >
                            <i className="fas fa-camera-retro" />
                          </span>
                        </label>
                        <Form.Control
                          type="file"
                          accept="image/*"
                          id="imgPerfil"
                          onChange={onFileChange}
                        />
                      </div>
                    </div>
                  </div>
                </Form.Row>
                <button type="submit" className="btn btn-primary" onClick={sendImage}>enviar</button>
              </Form>
            </div>
          </div>
        </Card>
      </article>
    </section>
  )
}

export default Upload