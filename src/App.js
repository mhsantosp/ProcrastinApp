import React, { Component } from "react";
import "./sass/styles.scss";
import "../src/components/contents/sass/styles.scss";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/contents/header/Header";
import Footer from "./components/contents/footer/Footer";
import IniSecion from "./components/forms/LogIn";
import Registros from "./components/forms/SignUp";
import Home from "./components/contents/home/Home";
import Welcome from "./components/contents/section-1/WelcomeView";
import SectionChecklist from "./components/contents/sectionChecklist/SectionChecklist";
import SectionTecPomodoro from "./components/contents/sectionTecPomodoro/SectionTecPomodoro";
import SectionMusic from "./components/contents/sectionMusic/SectionMusic";
import SectionPodcasts from "./components/contents/sectionPodcasts/SectionPodcasts";
import SectionMoreInfo from "./components/contents/sectionMoreInfo/SectionMoreInfo";

export default class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="layout">
          <Header />
          <main className="container-fluid p-0">
            <Switch>
              <Route exact path="/inicio-sesion" render={(props) => <IniSecion {...props} />} />
              <Route exact path="/registro-usuario" component={Registros} />

              {/* <Route exact path="/" component={Home} /> */}

              <Route exact path="/" component={Welcome} />
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