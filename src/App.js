import React from "react";
import Header from "./components/contents/header/Header";
import Footer from "./components/contents/footer/Footer";
import SignOut from "./components/forms/SignOut";
import Login from "./components/forms/Login";

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
