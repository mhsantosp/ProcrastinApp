import React, { Component } from "react";
import './Home.scss';
import Video from "./VideoBIenvenida"

export default class Home extends Component {
  render() {
    return (
      <section className="container-fluid viewHome">
        <article className="home">
          <h1>Bienvenid@ a ProcrastinApp</h1>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-5 col-lg-5">
                <p className="text text-left">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.</p>
              </div>
              <div className="col-sm-12 col-md-7 col-lg-7">
                <Video />
              </div>
            </div>
          </div>
        </article>
      </section>
    );
  }
}