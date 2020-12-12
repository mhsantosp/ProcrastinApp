import React from "react";
import './sass/styles.scss'
import Header from "./components/contents/header/Header";
import Footer from "./components/contents/footer/Footer";
import Login from "./components/forms/Login-Signup ";

function Layout() {
  return (
    <div className="layout">
      <Header />

      <main className="container-fluid main py-5">
        <section>
          <Login />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
