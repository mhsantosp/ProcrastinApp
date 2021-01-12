import React, { Component } from "react";
import './Somos.scss';

export default class QuienesSomos extends Component {
  render() {
    return (
      <section className="container-fluid quienesSomos">
        <article className="container">
          <h1 className="text-center">Quienes Somos</h1>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-6">
              <p className="text text-left">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht. Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach "lorem ipsum" macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks).</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-6">
              <p className="text text-left">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht. Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach "lorem ipsum" macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks).</p>
            </div>
          </div>
        </article>
      </section>
    );
  }
}