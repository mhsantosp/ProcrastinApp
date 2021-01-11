import React, { Component, useState } from "react";
import "./sass/styles.scss";
import "../src/components/contents/sass/styles.scss";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ProcrastinApp from "./components/contents/home/Home";
// import ProcrastinApp from "./components/contents/section-1/HomePrueba";
import Header from "./components/contents/header/Header";
import Logeado from "./components/contents/header/HeaderLogIn";
import Footer from "./components/contents/footer/Footer";
import IniSecion from "./components/forms/LogIn";
import Registros from "./components/forms/SignUp";
import Home from "./components/contents/section-1/WelcomeView";
import SectionChecklist from "./components/contents/sectionChecklist/SectionChecklist";
import SectionTecPomodoro from "./components/contents/sectionTecPomodoro/SectionTecPomodoro";
import Somos from "./components/Somos/Somos";

export default class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="layout">
          <Header />
          {/* <Logeado /> */}
          <main className="container-fluid p-0">
            <Switch>
              <Route exact path="/registro-usuario" component={Registros} />

              <Route exact path="/inicio-sesion" render={(props) => <IniSecion {...props} />} />

              <Route exact path="/" component={ProcrastinApp} />
              <Route exact path="/ProcrastinApp" component={ProcrastinApp} />
              <Route exact path="/quienes-somos" component={Somos} />

              <Route exact path="/inicio" component={Home} />
              <Route exact path="/Checklist" component={SectionChecklist} />
              <Route exact path="/TecnicaPomodoro" component={SectionTecPomodoro} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
