import React from 'react';
import { Link } from "react-router-dom";
import logo2 from './../../images/logo2.svg';
import './LoginSignup.scss';

function FormSignUp() {
  return (
    <article className="container-fluid authenticateIdentity">
      <div className="card">
        <img className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
        <div className="form">
          <div className="form-sign-up">
            <form className="card-body">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Nombre</label>
                  <input type="text" className="form-control firstName" placeholder="Nombre" required />
                </div>

                <div className="form-group col-md-6">
                  <label>Apellido</label>
                  <input type="text" className="form-control lastName" placeholder="Apellido" required />
                </div>

                <div className="form-group col-md-12">
                  <label>Correo electrónico</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-at"></i></div>
                    </div>
                    <input type="email" className="form-control" placeholder="Correo electrónico" required />
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <label>Usuario</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-user"></i></div>
                    </div>
                    <input type="text" className="form-control" placeholder="Usuario" required />
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <label>Contraseña</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-user-lock"></i></div>
                    </div>
                    <input type="password" className="form-control" placeholder="********" required />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-form">Regístrate</button>
            </form>
            <div className="card-footer">
              <p className="card-text forgot-password text-right">
                Si ya estas registrado <Link to="/inicio-sesion" rel="noopener noreferrer">Inicia sesión</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>

  );
}

export default FormSignUp;