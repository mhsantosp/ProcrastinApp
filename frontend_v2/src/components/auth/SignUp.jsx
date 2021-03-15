import React, { useState } from "react";
import './LoginSignup.scss';
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Col, Image } from 'react-bootstrap';
import { useFormik } from "formik";
import Axios from "axios";
import avatar from '../../images/avatar.svg';
import ImagenPerfil from "./Upload";
import UploadService from "../../services/upload.service";

export default function NuevoUsuario() {
  const URL = 'http://localhost:5000/auth/signup';
  const urlPhoto = 'http://localhost:5000/imagen';

  const [file, setFile] = useState();
  // console.log('file antes de useFormik: ', file);
  // const [pathImgPerfil, setPathImgPerfil] = useState(`${avatar}`);
  // console.log('pathImgPerfil antes de useFormik: ', pathImgPerfil);

  // función para enviar imagen
  const sendImage = (e) => {
    e.preventDefault();
    UploadService.sendImages(file).then((result) => {
      console.log('El resultado es: ', result);
    })
  }

  const { values, isSubmitting, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      names: '', lastNames: '', email: '', nameUser: '', password: '', imgPerfil: '',
    },
    onSubmit: values => {
      console.log(values);
      // Enviar los valores a la Base de Datos
      Axios.all([
        Axios.post(urlPhoto, { imgPerfil: values.imgPerfil }),
        Axios.post(URL, {
          names: values.names,
          lastNames: values.lastNames,
          email: values.email,
          nameUser: values.nameUser,
          password: values.password,
        })
      ])
        .then(res => {
          console.log(res);
          window.location.href = '/inicio-sesion'; //redirecciona al inicio de sesión
          return res.data;
        })
    },
    validate: values => {
      const errors = {};
      if (!values.names || values.names.length < 2) errors.names = "Nombre inválido";
      if (!values.lastNames || values.lastNames.length < 2) errors.lastNames = "Apellido inválido";
      if (!values.email) {
        errors.email = 'Requerido';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Correo electrónico inválido';
      }

      if (!values.nameUser || values.nameUser.length < 2) errors.nameUser = "Usuario inválido";

      const passwordRegex = /(?=.*[0-9])/;
      if (!values.password) {
        errors.password = "Requerido";
      } else if (values.password.length < 8) {
        errors.password = "La contraseña debe tener 8 caracteres.";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "Contraseña invalida. Debe contener un número.";
      }

      return errors;
    }
  });
  // console.log(errors);
  return (
    <section className="container-fluid registros">
      <article className="authenticateIdentity">
        <div className="card">
          <div className="form">
            <div className="form-log-in">
              {/* Para enviar archivos debe especificarse el valor del atributo enctype */}
              <Form className="card-body" onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Row>
                  <div className="form-group col-sm-12 col-md-12 imPerfil">
                    <ImagenPerfil
                      value={values.imgPerfil}
                      onChange={handleChange}
                    />
                  </div>

                  <Form.Group as={Col} sm="12" md="6">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control
                      value={values.names}
                      onChange={handleChange}
                      name="names"
                      placeholder="Nombres"
                      type="text"
                    />
                    <Form.Text>{errors.names ? errors.names : ''}</Form.Text>
                  </Form.Group>

                  <Form.Group as={Col} sm="12" md="6">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                      value={values.lastNames}
                      onChange={handleChange}
                      name="lastNames"
                      placeholder="Apellidos"
                      type="text"
                    />
                    <Form.Text>{errors.lastNames ? errors.lastNames : ''}</Form.Text>
                  </Form.Group>

                  <Form.Group as={Col} sm="12" md="12">
                    <Form.Label>Correo electrónico</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text><i className="fas fa-envelope"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.email}
                        onChange={handleChange}
                        name="email"
                        placeholder="Correo electrónico"
                        type="email"
                      />
                    </InputGroup>
                    <Form.Text>{errors.email ? errors.email : ''}</Form.Text>
                  </Form.Group>

                  <Form.Group as={Col} sm="12" md="6">
                    <Form.Label>Usuario</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text><i className="fas fa-at"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.nameUser}
                        onChange={handleChange}
                        name="nameUser"
                        placeholder="Usuario"
                        type="text"
                      />
                    </InputGroup>
                    <Form.Text>{errors.nameUser ? errors.nameUser : ''}</Form.Text>
                  </Form.Group>

                  <Form.Group as={Col} sm="12" md="6">
                    <Form.Label>Contraseña</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text><i className="fas fa-user-lock"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.password}
                        onChange={handleChange}
                        name="password"
                        placeholder="**********"
                        type="password"
                      />
                    </InputGroup>
                    <Form.Text>{errors.password ? errors.password : ''}</Form.Text>
                  </Form.Group>
                </Form.Row>

                <Button
                  type="submit"
                  variant="info"
                  className="btn-form"
                  disabled={isSubmitting}
                  onClick={sendImage}
                >Registrarse</Button>
              </Form>
              <div className="card-footer">
                <p className="card-text text-right">
                  Si ya estas registrado <Link to="/inicio-sesion" rel="noopener noreferrer">Inicia sesión</Link>
                </p>
                <p className="card-text text-right">
                  Foto Perfil <Link to="/foto-usuario" rel="noopener noreferrer">Foto</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}