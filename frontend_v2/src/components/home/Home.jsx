import React, { Component } from "react";
import './Home.scss';
// import Video from "./Video";

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid viewHome">
        <article className="container home">
          <h1>Bienvenid@ a ProcrastinApp</h1>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-6 d-flex align-items-center">
              <p className="text text-left">Esta iniciativa facilita la creación de un ambiente adecuado para la concentración y el cumplimiento de las labores o actividades. Esto se haría implementando checklists y un itinerario en el que el usuario pueda organizar sus tiempos y horas respectivas para hacer sus actividades, también implementa una técnica pomodoro para controlar el tiempo de trabajos y descansos. Con el apoyo de contenidos como podcasts, música o tips crearemos un ambiente adecuado a la hora de realizar las diferentes actividades.</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-6">
              {/* <Video /> */}
              <iframe className="w-100" height="315" src="https://www.youtube-nocookie.com/embed/FBPI2krmeuw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Explicación corta sobre la Procrastinación"></iframe>
            </div>
          </div>
        </article>
      </section>
    );
  }
}