import React, { Component } from "react";
import logo2 from './../../images/logo2.svg';
import './Login-Signup.scss';
import FormLogin from './FormLogin';
import FormSignUp from './FormSignUp';

export default class Login extends Component {
  render() {
    return (
      <article className="container-fluid">
        <div className="card">
          <img className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
          <div className="form">
            <FormLogin />
          </div>
        </div>
      </article>
    );
  }
}