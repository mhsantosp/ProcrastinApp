import React from "react";
import "./sass/styles.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/contents/header/Header";
import HomePrueba from "./components/contents/home/Home";
import Footer from "./components/contents/footer/Footer";
import IniSecion from "./components/forms/LoginSignup";
import Registros from "./components/forms/FormSignUp";

function Layout() {
  return (
    <div className="layout">
      <Router>
        <Header />
        <main className="container-fluid main py-5">
          <Switch>
            <Route exact path="/" component={HomePrueba} />
            <Route exact path="/inicio-sesion" component={IniSecion} />
            <Route exact path="/registro-usuario" component={Registros} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default Layout;
