import React, { Component } from 'react';

import { Link } from "react-router-dom";

import logo from './../../../images/logo_name.svg';
import Avatar from './../../../images/userFemale.png';
import './Header.scss';
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Header extends Component {
  cerrarSesion = () => {
    cookies.remove('id', { path: "/" });
    cookies.remove('name', { path: "/" });
    cookies.remove('lastname', { path: "/" });
    cookies.remove('email', { path: "/" });
    cookies.remove('user', { path: "/" });
    window.location.href = './inicio-sesion';
  }
  // componentDidMount() {
  //   if (!cookies.get('user')) {
  //     window.location.href = './inicio-sesion';
  //   }
  //}

  render() {
    console.log('id: ' + cookies.get('id'));
    console.log('name: ' + cookies.get('name'));
    console.log('lastname: ' + cookies.get('lastname'));
    console.log('email: ' + cookies.get('email'));
    console.log('user: ' + cookies.get('user'));
    return (
      <header className="header">
        <nav className="navbar fixed-top bg-white justify-content-center justify-content-sm-between">
          <Link className="navbar-brand" to="/inicio" rel="noopener noreferrer">
            <img src={logo} className="img-fluid" alt="Nombre App" loading="lazy" id="nameLogo" />
          </Link>
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <Link className="btn rounded btn-sign-in order-2" to="/inicio-sesion" role="button" rel="noopener noreferrer">Iniciar Sesión</Link>
            <Link className="btn rounded mr-2 btn-sign-up order-1" to="/registro-usuario" role="button" rel="noopener noreferrer">Regístrate</Link>
            
            <button className="btn btn-outline-danger rounded mr-2 btn-sign-up" onClick={() => this.cerrarSesion()} >Cerrar Sesión</button>
            <div className="btn btn-outline-success rounded mr-2 btn-perfil" id="perfil">
              <img src={Avatar} alt="Avatar" className="img-fluid rounded-circle avatar" />
              <span name="user">User</span>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;