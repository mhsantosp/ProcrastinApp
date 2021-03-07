import React from 'react';
import { Link } from "react-router-dom";
import Personaje from '../../images/personajeBienvenida.png';

export default function WelcomeView(props) {
  return (
    <section className="container-fluid welcomeView">
      <article>
        <h1 className="text-center welcomeTitle">Bienvenid@ a ProcrastinApp</h1>
        <h2 className="text-center mt-5">Cuentános, ¿Qué necesitas?</h2>
        <div className="row mt-4">
          <div className="col-9 mt-5">
            <div className="row buttons-1">
              <div className="col">
                <p className="p-WV text-center">Hacer tarea en un<br></br> tiempo determinado</p>
                <Link to="/tiempos">
                  <button className="mt-3  button-WV">Programa tu tiempo</button>
                </Link>
              </div>
              <div className="col">
                <p className="p-WV text-center">Organizar tu tiempo<br></br> y tareas a realizar</p>
                <Link to="/tareas">
                  <button className="mt-3 button-WV">Organiza tus tareas</button>
                </Link>
              </div>
              <div className="col">
                <p className="p-WV text-center">Te damos información sobre la procrastinación</p>
                <Link to="/mas-informacion">
                  <button className="mt-3 button-WV">Más Información</button>
                </Link>
              </div>

            </div>
            <div className="row mt-5 buttons-2">
              <Link to="/multimedia" className="col-3 mt-4 mx-5">
                <button className="button-WV">Contenido Multimedia</button>
              </Link>
              <Link to="/contactanos" className="col-3 mt-4 mx-5">
                <button className="button-WV">Contáctanos</button>
              </Link>
            </div>
          </div>

          <div className="col-3">
            <img src={Personaje} className="character" alt="Personaje dando la bienvenida a ProcrastinAPP" />
          </div>
        </div>
      </article>
    </section>

  )
}