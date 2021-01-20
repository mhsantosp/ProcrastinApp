import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from './../../images/logo2.svg';
import './LoginSignup.scss';
import axios from "axios";

const Login = () => {
  // const apiBD = 'http://api-fake-procrastin-app.vercel.app/users';

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  // procesa la solicitud de inicio de sesión
  const handleSubmit = async e => {
    e.preventDefault();
    const datos = { email, password };
    // enviar el nombre de usuario y la contraseña al servidor
    const response = await axios.get("http://api-fake-procrastin-app.vercel.app/users", datos);
    // Establece el estado del usuario
    setUser(response.data)
    // Almacenar al usuario en localStorage
    localStorage.setItem('user', response.data)
    console.log(response.data)
    window.location.href='./inicio'; //Ruta de redirección
  };

  // Si se reconoce el usuario, muestra el siguiente mensaje
  if (user) {
    alert (`${user} es reconocido`);
  }

  // Si no se reconoce el usuario, muestre el formulario de inicio de sesion
  return (
    <section className="container-fluid registros">
      <article className="authenticateIdentity">
        <div className="card">
          <img className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
          <div className="form">
            <div className="form-log-in">
              <form className="card-body" id="form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label htmlFor="email">Usuario</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-user"></i></div>
                      </div>
                      <input className="form-control"
                        type="text" name="email" value={email} placeholder="Usuario"
                        onChange={({ target }) => setEmail(target.value)}
                        required
                        id="usuario"
                      />
                    </div>
                  </div>
                  <div className="form-group col-12">
                    <label htmlFor="password">Contraseña</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-user-lock"></i></div>
                      </div>
                      <input className="form-control"
                        type="password" name="password" value={password} placeholder="********"
                        onChange={({ target }) => setPassword(target.value)}
                        required
                        id="clave"
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-form">Login</button>
              </form>
              <div className="card-footer">
                <p className="card-text text-right">No estas registrado? <Link to="/registro-usuario" rel="noopener noreferrer">Regístrate</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Login;