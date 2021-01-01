import React from 'react';
import { Link } from "react-router-dom";
import Personaje from '../../images/personajeBienvenida.png';

export default function WelcomeView(props) {
  return (
    <section className="container-fluid welcomeView">
      <h1 className="text-center mt-5 welcomeTitle">Bienvenid@ a ProcrastinApp</h1>
      <h2 className="text-center mt-5">Cuentános, ¿Qué necesitas?</h2>
      <div className="row mt-4">
        <div className="col-9 mt-5">
          <div className="row buttons-1">
            <div className="col">
              <p className="p-WV text-center">Hacer tarea en un<br></br> tiempo determinado</p>
              <Link to="/TecnicaPomodoro">
                <button className="mt-3  button-WV">Técnica Pomodoro</button>
              </Link>
            </div>
            <div className="col">
              <p className="p-WV text-center">Organizar tu tiempo<br></br> y tareas a realizar</p>
              <Link to="/Checklist">
                <button className="mt-3 button-WV">Haz tu Checklist</button>
              </Link>
            </div>
            <div className="col">
              <p className="p-WV text-center">Te damos información sobre la procrastinación</p>
              <button className="mt-3 button-WV">Más Información</button>
            </div>

          </div>
          <div className="row mt-5 buttons-2">
            <button className="col-3 mt-4 mx-5 button-WV">Música</button>
            <button className="col-3 mt-4 mx-5 button-WV">Podcasts</button>
          </div>
        </div>
        <div className="col-3">
          <img src={Personaje} className="character" alt="Personaje dando la bienvenida a ProcrastinAPP" />
        </div>
      </div>
    </section>
  )
}