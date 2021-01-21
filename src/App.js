import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./sass/styles.scss";
import "../src/components/contents/sass/styles.scss";
import ProcrastinApp from "./components/contents/home/Home";
import Header from "./components/contents/header/Header";
import IniSecion from "./components/forms/LogIn";
import Registros from "./components/forms/SignUp";
import Footer from "./components/contents/footer/Footer";
import Home from "./components/contents/section-1/WelcomeView";
import SectionChecklist from "./components/contents/sectionChecklist/SectionChecklist";
import SectionTecPomodoro from "./components/contents/sectionTecPomodoro/SectionTecPomodoro";
import SectionMusic from "./components/contents/sectionMusic/SectionMusic";
import SectionPodcasts from "./components/contents/sectionPodcasts/SectionPodcasts";
import SectionMoreInfo from "./components/contents/sectionMoreInfo/SectionMoreInfo";
import Somos from "./components/Somos/Somos";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="layout">
          <Header />
          <main className="container-fluid p-0">
            <Switch>
              <Route exact path="/" component={ProcrastinApp} />
              <Route exact path="/ProcrastinApp" component={ProcrastinApp} />
              <Route exact path="/quienes-somos" component={Somos} />

              <Route exact path="/inicio-sesion" render={(props) => <IniSecion {...props} />} />
              <Route exact path="/registro-usuario" component={Registros} />

              <Route exact path="/inicio" component={Home} />
              <Route exact path="/Checklist" component={SectionChecklist} />
              <Route exact path="/TecnicaPomodoro" component={SectionTecPomodoro} />
              <Route exact path="/Musica" component={SectionMusic} />
              <Route exact path="/Podcasts" component={SectionPodcasts} />
              <Route exact path="/MasInformacion" component={SectionMoreInfo} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}