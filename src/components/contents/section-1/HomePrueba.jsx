import React, { Component } from "react";
import './HomePrueba.scss';
import { Link } from "react-router-dom";
import Personaje from '../../images/personajeBienvenida.png';

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid welcomeView">
        <article className="container">
          <h1 className="text-center mb-5">Bienvenid@ a ProcrastinApp</h1>
          <div className="row">
            <div className="col-sm-12 col-md-9 py-3 order-2 order-md-1">
              <h2 className="text-center w-100 mb-5">Cuentános, ¿Qué necesitas?</h2>
              <div className="row mb-4">
                <div className="col-md-4">
                  <p className="text ">Hacer una tarea en tiempo determinado</p>
                </div>
                <div className="col-md-4">
                  <p className="text ">Organizar tus tareas a realizar y tu tiempo</p>
                </div>
                <div className="col-md-4">
                  <p className="text ">Te damos mas información sobre la procrastinación</p>
                </div>
              </div>
              <div className="btn-group w-100 text-center" role="group">
                <div className="row w-100 m-0">
                  <div className="col-12 mb-5 d-block d-md-flex justify-content-md-around">
                    <Link to="/TecnicaPomodoro" className="btn-home mb-3" rel="noopener noreferrer">Técnica Pomodoro</Link>
                    <Link to="/Checklist" className="btn-home mb-3 mx-md-3" rel="noopener noreferrer">Haz tu Checklist</Link>
                    <Link to="/" className="btn-home mb-3" rel="noopener noreferrer">Más Información</Link>
                  </div>
                  <div className="col-12 d-block d-md-flex justify-content-md-around">
                    <Link to="/" className="btn-home mb-3" rel="noopener noreferrer">Música</Link>
                    <Link to="/" className="btn-home mb-3" rel="noopener noreferrer">Podcasts</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 py-3 order-1 order-md-2 imagen">
              <img src={Personaje} className="img-fluid welcome" alt="Personaje dando la bienvenida a ProcrastinAPP" />
            </div>
          </div>
        </article>
      </section>
    );
  }
}