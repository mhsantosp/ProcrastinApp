import React, { Component } from "react";
import './Somos.scss';
import { Card, CardBody, CardTitle, CardSubtitle, Nav, NavItem, NavLink } from 'reactstrap';

export default class QuienesSomos extends Component {
  render() {
    return (
      <section className="container-fluid viewSomos">
        <article className="container">
          <h1 className="text-center">Quienes Somos</h1>
          <div className="row">
            <div className="col-sm-12 col-md-6 dev py-3">
              <Card className="h-100">
                <div className="imgPerfil dev-1"></div>
                <CardBody className="text-center">
                  <CardTitle tag="h4">Maria Helena Santos Pineda</CardTitle>
                  <CardTitle tag="h5">Ingeniera de Sistemas</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Desarrolladora Front Ent <br/> con énfasis  en React</CardSubtitle>
                  <Nav className="justify-content-center">
                    <NavItem>
                      <NavLink href="https://github.com/mhsantosp" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-alt"></i></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://www.linkedin.com/in/msantospineda" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://daiclover.com/" rel="noopener noreferrer" target="_blank"><i className="fas fa-briefcase"></i></NavLink>
                    </NavItem>
                  </Nav>
                </CardBody>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6 dev py-3">
              <Card className="h-100">
                <div className="imgPerfil dev-2"></div>
                <CardBody className="text-center">
                  <CardTitle tag="h4">Gisell Mazo Rúa</CardTitle>
                  <CardTitle tag="h5">Productora De Multimedia</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Desarrolladora Front Ent <br/> con énfasis  en React</CardSubtitle>
                  <Nav className="justify-content-center">
                    <NavItem>
                      <NavLink href="https://github.com/gisellmazo" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-alt"></i></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://www.linkedin.com/in/gisell-mazo-455b55187/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://gisellmazo.github.io/PersonalPortafolio-reto/" rel="noopener noreferrer" target="_blank"><i className="fas fa-briefcase"></i></NavLink>
                    </NavItem>
                  </Nav>
                </CardBody>
              </Card>
            </div>
          </div>
        </article>
      </section>
    );
  }
}