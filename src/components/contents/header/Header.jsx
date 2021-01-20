import React, { Component } from 'react';

import { Link } from "react-router-dom";

import logo from './../../../images/logo_name.svg';
import Avatar from './../../../images/userFemale.png';
import './Header.scss';
const isLogged = false; //Controlar botones  isLogged = false => Log-In / isLogged = true => Log-Out
console.log(isLogged)

export default class Header extends Component {

  cerrarSesion = () => {
    localStorage.removeItem('id', { path: "/" });
    localStorage.removeItem('name', { path: "/" });
    localStorage.removeItem('lastname', { path: "/" });
    localStorage.removeItem('email', { path: "/" });
    localStorage.removeItem('user', { path: "/" });
    window.location.href = './inicio-sesion';
  }

  render() {
    console.log('id: ' + localStorage.getItem('id'));
    console.log('name: ' + localStorage.getItem('name'));
    console.log('lastname: ' + localStorage.getItem('lastname'));
    console.log('email: ' + localStorage.getItem('email'));
    console.log('user: ' + localStorage.getItem('user'));
    return (
      <header className="header">
        <nav className="navbar fixed-top bg-white justify-content-center justify-content-sm-between">
          <Link className="navbar-brand" to="/inicio" rel="noopener noreferrer">
            <img src={logo} className="img-fluid" alt="Nombre App" loading="lazy" id="nameLogo" />
          </Link>
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            {
              isLogged
                ? 
                  <Link className="btn rounded btn-sign-in" to="/inicio-sesion" role="button" rel="noopener noreferrer">Regístrate / Iniciar Sesión</Link>
                : 
                  <div className="dropdown" style={{ height: '38px' }}>
                    <button className="btn btn-perfil dropdown-toggle d-flex align-items-center" type="button" id="dropdownMenu" data-toggle="dropdown" data-hover="dropdown" aria-haspopup="true" aria-expanded="false" style={{ height: '38px', width: 'max-content', textTransform: 'capitalize' }}>
                      <img src={Avatar} alt="Avatar" className="img-fluid mr-2 avatar" style={{ width: '32px' }} />
                      {localStorage.getItem('user')}
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu">
                      {/* <Link className="dropdown-item" to="/">Perfil</Link> */}
                      <Link className="dropdown-item" to="/quienes-somos">Quienes Somos</Link>
                      <button className="dropdown-item" onClick={() => this.cerrarSesion()}>Cerrar Sesión</button >
                    </div>
                  </div>
            }
          </div>
        </nav>
      </header>
    );
  }
}