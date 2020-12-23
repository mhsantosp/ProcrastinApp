import React, { Component } from "react";
import "./sass/styles.scss";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/contents/header/Header";
import Inicio from "./components/contents/home/Home";
import Footer from "./components/contents/footer/Footer";
import IniSecion from "./components/forms/LogIn";
import Registros from "./components/forms/SignUp";

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <BrowserRouter >
          <Header />
          <main className="container-fluid main py-5">
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route exact path="/inicio-sesion" component={IniSecion} />
              <Route exact path="/registro-usuario" component={Registros} />
            </Switch>
          </main>
          <Footer />
        </BrowserRouter >
      </div>
    );
  }
}

//export default Layout;
