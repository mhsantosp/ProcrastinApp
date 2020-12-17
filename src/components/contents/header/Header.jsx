import React from 'react';

import { Link } from "react-router-dom";

import logo from './../../../images/logo_name.svg';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="navbar fixed-top py-0 bg-white justify-content-center justify-content-sm-between">
        <Link className="navbar-brand" to="/" rel="noopener noreferrer">
          <img src={logo} className="img-fluid" alt="Nombre App" loading="lazy" id="nameLogo" />
        </Link>
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <Link className="btn rounded mr-2 btn-sign-up" to="/registro-usuario" role="button" rel="noopener noreferrer">Regístrate</Link>
          <Link className="btn rounded btn-sign-in" to="/inicio-sesion" role="button" rel="noopener noreferrer">Iniciar Sesión</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;