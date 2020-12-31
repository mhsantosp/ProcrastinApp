import React, { Component } from "react";
import "./sass/styles.scss";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/contents/header/Header";
// import Inicio from "./components/contents/home/Home";
import Footer from "./components/contents/footer/Footer";
import IniSecion from "./components/forms/LogIn";
import Registros from "./components/forms/SignUp";
import WelcomeView from "./components/contents/section-1/WelcomeView";
import SectionChecklist from "./components/contents/sectionChecklist/SectionChecklist";
import SectionTecPomodoro from "./components/contents/sectionTecPomodoro/SectionTecPomodoro";

export default class Layout extends Component {
  render() {
    return (
      <div className="layout App">
        <BrowserRouter>
          <Header />
          <main className="container-fluid main py-5">
            <Switch>
              {/* <Route exact path="/" render={(props) => <IniSecion {...props} />} />
              <Route exact path="/registro-usuario" component={Registros} /> */}

              <Route path="/Checklist" exact>
                <SectionChecklist />
              </Route>

              <Route path="/TecnicaPomodoro" exact>
                <SectionTecPomodoro />
              </Route>

              <Route path="/" exact>
                <WelcomeView />
              </Route>
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
