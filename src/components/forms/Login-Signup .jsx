import React, { Component } from "react";
import logo2 from './../../images/logo2.svg';
import './Login-Signup.scss'

export default class Login extends Component {
  render() {
    return (
      <article className="container-fluid">
        <div className="card">
          <img className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
          <div className="form-log-in d-none">
            <form className="card-body">
              <div className="form-row">
                <div className="form-group col-12">
                  <label>Usuario</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-user"></i></div>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" required />
                  </div>
                </div>

                <div className="form-group col-12">
                  <label>Contraseña</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-user-lock"></i></div>
                    </div>
                    <input type="password" className="form-control" placeholder="********" required />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-form">Iniciar sesión</button>
            </form>
            <div className="card-footer">
              <p className="card-text text-right">
                No estas registrado <a href="#form-registros" rel="noopener noreferrer">Regístrate?</a>
              </p>
            </div>
          </div>

          <div className="form-sign-up">
            <form className="card-body">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Nombre</label>
                  <input type="text" className="form-control firstName" placeholder="First name" required />
                </div>

                <div className="form-group col-md-6">
                  <label>Apellido</label>
                  <input type="text" className="form-control lastName" placeholder="Last name" required />
                </div>

                <div className="form-group col-md-12">
                  <label>Correo electrónico</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-at"></i></div>
                    </div>
                    <input type="email" className="form-control" placeholder="E-mail" required />
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <label>Usuario</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-user"></i></div>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" required />
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
                Si ya estas registrado <a href="#form-login" rel="noopener noreferrer">Inicia sesión?</a>
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}