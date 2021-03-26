import React from "react";
import './Perfil.scss';
import { Form, InputGroup, Button, Col, Card, Image } from 'react-bootstrap';
import { useFormik } from "formik";
import Axios from "axios";
import Gravatar from 'react-gravatar';

export default function PerfilUsuario() {
  const URL = 'http://localhost:4000/users';

  const { values, isSubmitting, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      names: `${localStorage.getItem('names')}`,
      lastNames: `${localStorage.getItem('lastNames')}`,
      email: `${localStorage.getItem('email')}`,
      nameUser: `${localStorage.getItem('nameUser')}`,
      password: '',
      terms: false
    },
    onSubmit: values => {
      console.log(values);
      // Enviar los valores a la Base de Datos
      Axios.put(URL, {
        names: values.names,
        lastNames: values.lastNames,
        email: values.email,
        nameUser: values.nameUser,
        password: values.password,
      })
        .then(res => {
          console.log(res);
          // window.location.href = '/inicio-sesion'; //redirecciona al inicio de sesión
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

      if (!values.imgPerfil || values.imgPerfil.length < 2) errors.imgPerfil = "Imagen requerida";

      if (values.terms === true) {
          console.log(values.terms);
      } else {
          console.log(values.terms);
          errors.terms = 'Requerido';
      }

      return errors;
    }
  });
  // console.log(errors);
  return (
    <section className="container-fluid perfil">
      <article>
        <div className="card">
          <Card.Header className="text-center" as="h4">Perfil de usuario</Card.Header>
          <div className="form">
            <div className="datosPerfil">
              <Form className="card-body" onSubmit={handleSubmit}>
                <Form.Row>
                  <div className="form-group col-sm-12 col-md-12 imPerfil">
                    <div className="container-fluid selectImg">
                      <Gravatar
                        name="imgPerfil"
                        id="imgPerfil"
                        email={values.email}
                        size={150}
                        rating="pg"
                        default="monsterid"
                        className="CustomAvatar-image imgPerfil rounded-circle"
                        value={values.imgPerfil}
                        onChange={handleChange}
                      />
                    </div>
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

                  <Form.Group className="mx-auto">
                    <Form.Check
                      type="switch"
                      name="terms"
                      id="customSwitch"
                      value={values.terms}
                      onChange={handleChange}
                      label="Acepte, si esta seguro de los cambios"
                      feedback="Debes estar de acuerdo antes de enviar."
                      required
                    />
                    <Form.Text>{errors.terms ? errors.terms: ''}</Form.Text>
                  </Form.Group>
                </Form.Row>

                <Button
                  type="submit"
                  variant="info"
                  className="btn-form"
                  disabled={isSubmitting}
                >Guardar</Button>
              </Form>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}