import React from 'react';
import './Footer.scss'
import CO from './../../../images/colombia.svg'

function Footer() {
  return (
    <footer className="footer bg-white d-flex align-items-end flex-column" >
      <div className="container-fluid pt-5 pb-3">
        <hr className="lineFooter mb-4 mt-0 mx-auto" />
        <div className="row justify-content-md-around">
          <div className="col col-lg-3 py-3">
            <h6 className="text-uppercase font-weight-bold">Acerda de</h6>
            <hr className="lineHR mb-4 mt-0 d-inline-block mx-auto" />
            <p>PROCRASTINAPP es una iniciativa para facilitar la creación de un ambiente adecuado que ayude a la concentración y el cumplimiento de las actividades diarias.</p>
          </div>

          <div className="col col-lg-4 py-3">
            <h6 className="text-uppercase font-weight-bold">Contacto</h6>
            <hr className="lineHR mb-4 mt-0 d-inline-block mx-auto" />
            <div className="container-fluid contacto p-0">
              <p><img className="ubication mr-3" src={CO} alt="Colombia" /> Valle de Aburrá, Antioquia, CO</p>
              <a className="correo mb-3" href="mailto:contacto@procrastinapp.co" target="_blank" rel="noopener noreferrer" ><i className="far fa-envelope mr-3"></i>contacto@procrastinapp.co</a>
              <a className="ruta mb-3" href="#https://www.ProcrastinApp.co" rel="noopener noreferrer" target="_blank"><i className="fas fa-globe mr-3"></i> www.ProcrastinApp.co</a>
            </div>
          </div>

          <div className="col-md-auto py-3">
            <h6 className="text-uppercase font-weight-bold">Redes Sociales</h6>
            <hr className="lineHR mb-4 mt-0 d-inline-block mx-auto" />
            <div className="container-fluid d-flex redes p-0">
              <a href="#@ProcrastinApp" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f white-text"> </i></a>
              <a href="#@ProcrastinApp" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter white-text"> </i></a>
              <a href="#@ProcrastinApp" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in white-text"> </i></a>
              <a href="#@ProcrastinApp" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram white-text"> </i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright text-center mt-auto py-3" >
        <p className="m-0">
          © 2020 Copyright: 
          <a className="rutaFooter" href="#https://www.ProcrastinApp.co" rel="noopener noreferrer" target="_blank"> ProcrastinApp </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;