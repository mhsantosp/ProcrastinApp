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
          <ul className="navbar-nav flex-row align-items-center">
            <li className="nav-item active" style={{ marginRight: '15px', fontSize: '1.5rem' }}>
              <Link className="nav-link p-2" to="/registro-usuario">Regístrate <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item" style={{ marginRight: '15px', fontSize: '1.5rem' }}>
              <Link className="nav-link p-2" to="/inicio-sesion">Iniciar Sesión</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center p-2" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ height: '56px' }}>
                <img src={Avatar} alt="Avatar" className="img-fluid mr-2 avatar" style={{ width: '40px'}} />
                <span name="user" style={{ fontSize: '1.5rem' }}>User</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink" style={{ position: 'absolute'}}>
                <Link className="dropdown-item" to="/">Perfil</Link>
                <button  className="dropdown-item" onClick={() => this.cerrarSesion()}>Cerrar Sesión</button >
                <Link className="dropdown-item" to="/quienes-somos">Quienes Somos</Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;