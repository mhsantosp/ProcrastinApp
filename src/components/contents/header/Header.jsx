import React from 'react';
import logo from './../../../images/logo_name.svg';
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <nav className="navbar fixed-top py-0 shadow bg-white">
        <a className="navbar-brand" href="/" rel="noopener noreferrer">
          <img src={logo} className="img-fluid" alt="Nombre App" loading="lazy" id="nameLogo" />
        </a>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-primary mr-1 rounded">Regístrate</button>
          <button type="button" className="btn btn-outline-info ml-1 rounded">Iniciar Sesión</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
