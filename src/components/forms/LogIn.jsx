import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo2 from './../../images/logo2.svg';
import './LoginSignup.scss';
import axios from "axios";
import Cookies from "universal-cookie";

const apiBD = 'http://api-fake-procrastin-app.vercel.app/users';
const cookies = new Cookies();

export default class Login extends Component {
  constructor(props) {
    super()
    console.log(props);
  }

  state = {
    form: {
      username: '',
      password: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  };

  handleSubmit = async e => {
    e.preventDefault()
    let rta = await axios.get(`${apiBD}?email=${this.state.form.username}&password=${this.state.form.password}`)
    // if (rta.data.length > 0) {
    //   this.props.history.push('/inicio') //Ruta de redirección
    //   console.log('usuario correcto')
    // } else {
    //   alert('Usuario y/o Password incorrecto')
    // }
    // console.log(rta);
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .then(res => {
      if (res.length > 0) {
        var respuesta = res[0];
        cookies.set('id', respuesta.id, {path:"/"});
        cookies.set('name', respuesta.name, {path:"/"});
        cookies.set('lastname', respuesta.lastname, {path:"/"});
        cookies.set('email', respuesta.email, {path:"/"});
        cookies.set('user', respuesta.user, {path:"/"});
        alert(`Usuario correcto: Bienbenid@ ${respuesta.name} ${respuesta.lastname}`);
        window.location.href='./inicio'; //Ruta de redirección
      } else {
        console.log('Usuario y/o Password incorrecto');
        alert('Usuario y/o Password incorrecto');
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  // componentDidMount() {
  //   if (cookies.get('user')) {
  //     window.location.href = './inicio';
  //   }
  // }

  render() {
    return (
      <section className="container-fluid registros">
        <article className="authenticateIdentity">
          <div className="card">
            <img className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
            <div className="form">
              <div className="form-log-in">
                <form className="card-body" onSubmit={this.handleSubmit} id="form">
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label>Usuario</label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fas fa-user"></i></div>
                        </div>
                        <input type="text" className="form-control" name="username" onChange={this.handleChange} placeholder="Usuario" required />
                      </div>
                    </div>

                    <div className="form-group col-12">
                      <label>Contraseña</label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fas fa-user-lock"></i></div>
                        </div>
                        <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="********" required />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-form">Iniciar sesión</button>
                </form>
                <div className="card-footer">
                  <p className="card-text text-right">
                    No estas registrado? <Link to="/registro-usuario" rel="noopener noreferrer">Regístrate</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    );
  }
}
// export default Login;