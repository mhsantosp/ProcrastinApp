import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo_name.svg';
import './Header.scss';
// import SolicitudInfo from '../buttons/Solicitar';

export default class Header extends Component {
  state = {
    nameUser: localStorage.getItem('nameUser')
  }

  cerrarSesion = () => {
    localStorage.removeItem('_id', { path: "/" });
    localStorage.removeItem('names', { path: "/" });
    localStorage.removeItem('lastNames', { path: "/" });
    localStorage.removeItem('email', { path: "/" });
    localStorage.removeItem('nameUser', { path: "/" });
    window.location.href = '/'; // redireciona al inicio de sesión
  }

  render() {
    return (
      <div className="header">
        <nav className="navbar fixed-top bg-white justify-content-center justify-content-sm-between">
          <Link className="navbar-brand" to="#" rel="noopener noreferrer">
            <img src={logo} className="img-fluid" alt="Nombre App" loading="lazy" id="nameLogo" />
          </Link>
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            {
              this.state.nameUser == null
                ?
                  <Link className="btn rounded btn-sign-in" to="/inicio-sesion" role="button" rel="noopener noreferrer">Regístrate / Iniciar Sesión</Link>
                :
                  <div className="dropdown">
                      {/* <img src={Avatar} alt="Avatar" className="img-fluid mr-2 avatar" /> */}
                      <button className="btn btn-perfil dropdown-toggle d-flex align-items-center" type="button" id="dropdownMenu" data-toggle="dropdown" data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
                      {localStorage.getItem('nameUser')}
                    </button>
                    
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu">
                      <Link className="dropdown-item" to="/inicio">Inicio</Link>
                      <Link className="dropdown-item" to="/perfil-usuario">Perfil</Link>
                      <Link className="dropdown-item" to="/quienes-somos">Quienes Somos</Link>
                      <button className="dropdown-item" onClick={() => this.cerrarSesion()}>Cerrar Sesión</button >
                    </div>
                  </div>
            }
          </div>
        </nav>
      </div>
    );
  }
}