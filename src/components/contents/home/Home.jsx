import React, { Component } from "react";
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <article className="container-fluid home">
        <h1>Bienvenid@ a ProcrastinApp</h1>
        <h2>Cuéntanos ¿Qué necesitas</h2>

        <div className="container">
          <div className="row mb-4">
            <div className="col-md-4">
              <p className="text">Hacer una tarea en tiempo determinado</p>
            </div>
            <div className="col-md-4">
              <p className="text">Organizar tus tareas a realizar y tu tiempo</p>
            </div>
            <div className="col-md-4">
              <p className="text">Te damos mas información sobre la procrastinación</p>
            </div>
          </div>
          <div className="btn-group w-100 text-center" role="group">
            <div className="row w-100 m-0">
              <div className="col-12 mb-5 d-block d-md-flex justify-content-md-around">
                <button type="button" className="btn-home rounded mb-3">Técnica Pomodoro</button>
                <button type="button" className="btn-home rounded mb-3">Haz tu Checklist</button>
                <button type="button" className="btn-home rounded">Más Información</button>
              </div>
              <div className="col-12 d-block d-md-flex justify-content-md-around">
                <button type="button" className="btn-home rounded mb-3">Música</button>
                <button type="button" className="btn-home rounded ">Podcasts</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}