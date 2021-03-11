import React, { useState } from "react";
import './LoginSignup.scss';
import logo2 from './../../images/logo2.svg';
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Col, Image } from 'react-bootstrap';
import { useFormik } from "formik";
import Axios from "axios";
import avatar from '../../images/avatar.svg'

export default function NuevoUsuario() {
  const URL = 'http://localhost:4000/auth/signup';

  const [imgPerfil, setImgPerfil] = useState();
  console.log('file: ', imgPerfil);
  const [pathImgPerfil, setPathImgPerfil] = useState(`${avatar}`);
  const onFileChange = e => {
    console.log('length: ', e.target.files.length)
    if (e.target.files && e.target.files.length > 0) {
      console.log('length-2: ',e.target.files.length)
      const file = e.target.files[0]
      if (file.type.includes('image')) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
          setPathImgPerfil(reader.result)
        }
      }
      setImgPerfil(file);
    } else {
      console.log("Error, no encuentro la imagen !!")
    }
  }

  const { values, isSubmitting, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      names: '', lastNames: '', email: '', nameUser: '', password: '', imgPerfil: '',
    },
    onSubmit: values => {
      console.log(values);
      // Enviar los valores a la Base de Datos
      Axios.post(URL, {
        names: values.names,
        lastNames: values.lastNames,
        email: values.email,
        nameUser: values.nameUser,
        password: values.password,
        imgPerfil: values.imgPerfil,
      })
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
          <img className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
          <div className="form">
            <div className="form-log-in">
              <Form className="card-body" onSubmit={handleSubmit}>
                <Form.Row>
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

                  <div className="form-group col-sm-12 col-md-12 imPerfil">
                    <Form.Label>Imagen de perfil</Form.Label>
                    <div className="container-fluid selectImg">
                      <Image
                        className="img-fluid card-img-top p-1 imgPerfil rounded-circle"
                        src={pathImgPerfil}
                        alt="Avatar"
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
                          value={values.imgPerfil}
                          onChange={onFileChange}
                        />
                      </div>
                    </div>
                  </div>
                </Form.Row>

                <Button
                  type="submit"
                  variant="info"
                  className="btn-form"
                  disabled={isSubmitting}
                >Registrarse</Button>
              </Form>
              <div className="card-footer">
                <p className="card-text text-right">
                  Si ya estas registrado <Link to="/inicio-sesion" rel="noopener noreferrer">Inicia sesión</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}