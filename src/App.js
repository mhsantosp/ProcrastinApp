import React from "react";
import './sass/styles.scss'
import Header from "./components/contents/header/Header";
import Footer from "./components/contents/footer/Footer";
import LoginSignup from "./components/forms/Login-Signup ";
import Home from "./components/contents/home/Home";

function Layout() {
  return (
    <div className="layout">
      <Header />

      <main className="container-fluid main py-5">
        <section>
          <Home />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
