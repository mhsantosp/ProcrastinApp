import React from 'react';
import logo from './../../../images/logo_name.svg';
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <nav className="navbar fixed-top py-0 bg-white justify-content-center justify-content-sm-between">
        <a className="navbar-brand" href="/" rel="noopener noreferrer">
          <img src={logo} className="img-fluid" alt="Nombre App" loading="lazy" id="nameLogo" />
        </a>
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-primary rounded mr-2 btn-sign-up">Regístrate</button>
          <button type="button" className="btn rounded btn-sign-in">Iniciar Sesión</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;