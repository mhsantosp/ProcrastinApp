import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo2 from './../../images/logo2.svg';
import './LoginSignup.scss';
import FormLogIn from './LogIn';
import FormSignUp from './SignUp'

export default class Login extends Component {
  render() {
    return (
      <article className="container-fluid">
        <div className="card">
          <img className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
          <div className="form">
            
          </div>
        </div>
      </article>
    );
  }
}