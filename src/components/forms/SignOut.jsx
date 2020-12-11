import React, { Component } from "react";
import logo2 from './../../images/logo2.svg';
import './SignOut.scss'

export default class SignUp extends Component {
  render() {
    return (
      <article className="container">
        <div className="card form-registros">
          <form className="p-3">
            <div className="d-flex">
              <img src={logo2} alt="Logo" loading="lazy" className="img-fluid m-auto" id="logo2" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Nombre</label>
                <input type="text" className="form-control" placeholder="First name" required />
              </div>

              <div className="form-group col-md-6">
                <label>Apellido</label>
                <input type="text" className="form-control" placeholder="Last name" required />
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

            <button type="submit" className="btn btn-primary">Regístrate</button>
            <p className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
            </p>
          </form>
        </div>
      </article>
    );
  }
}