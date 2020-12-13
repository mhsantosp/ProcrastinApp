import React from 'react';

function FormLogin() {
  return (
    <div className="form-log-in">
      <form className="card-body">
        <div className="form-row">
          <div className="form-group col-12">
            <label>Usuario</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text"><i className="fas fa-user"></i></div>
              </div>
              <input type="text" className="form-control" placeholder="Usuario" required />
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
  );
}

export default FormLogin;