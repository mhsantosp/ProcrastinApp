import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./sass/styles.scss";
import ProcrastinApp from "./components/home/Home";
import Header from "./components/header/Header";
import IniSecion from "./components/auth/SignIn";
import Registros from "./components/auth/SignUp";
import Footer from "./components/footer/Footer";
import Home from "./components/welcome/WelcomeView";
import SectionChecklist from "./components/sectionChecklist/SectionChecklist";
import SectionTecPomodoro from "./components/sectionTecPomodoro/SectionTecPomodoro";
import Multimedia from "./components/sectionMultimedia/Multimedia";
import ContactUs from "./components/sectionContactUs/SectionContactUs";
import SectionMoreInfo from "./components/sectionMoreInfo/SectionMoreInfo";
import Somos from "./components/Somos/Somos";
import Perfil from "./components/profile/Perfil";
import FotoPerfil from "./components/auth/Avatar";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="layout">
          <Header />
          <main className="container-fluid p-0">
            <Switch>
              <Route exact path="/" component={ProcrastinApp} />
              <Route exact path="/procrastinapp" component={ProcrastinApp} />
              <Route exact path="/quienes-somos" component={Somos} />
              <Route exact path="/perfil-usuario" component={Perfil} />

              <Route exact path="/inicio-sesion" render={(props) => <IniSecion {...props} />} />
              <Route exact path="/registro-usuario" component={Registros} />
              <Route exact path="/foto-usuario" component={FotoPerfil} />

              <Route exact path="/inicio" component={Home} />
              <Route exact path="/tareas" component={SectionChecklist} />
              <Route exact path="/tiempos" component={SectionTecPomodoro} />
              <Route exact path="/multimedia" component={Multimedia} />
              <Route exact path="/contactanos" component={ContactUs} />
              <Route exact path="/mas-informacion" component={SectionMoreInfo} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}