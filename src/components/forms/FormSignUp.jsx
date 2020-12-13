import React from 'react';

function FormSignUp() {
  return (
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
          Si ya estas registrado <a href="#form-login" rel="noopener noreferrer">Inicia sesión?</a>
        </p>
      </div>
    </div>
  );
}

export default FormSignUp;