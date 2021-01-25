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
              <Route exact path="/ProcrastinApp/quienes-somos" component={Somos} />

              <Route exact path="/ProcrastinApp/inicio-sesion" render={(props) => <IniSecion {...props} />} />
              <Route exact path="/ProcrastinApp/registro-usuario" component={Registros} />

              <Route exact path="/ProcrastinApp/inicio" component={Home} />
              <Route exact path="/ProcrastinApp/Checklist" component={SectionChecklist} />
              <Route exact path="/ProcrastinApp/TecnicaPomodoro" component={SectionTecPomodoro} />
              <Route exact path="/ProcrastinApp/Musica" component={SectionMusic} />
              <Route exact path="/ProcrastinApp/Podcasts" component={SectionPodcasts} />
              <Route exact path="/ProcrastinApp/MasInformacion" component={SectionMoreInfo} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}