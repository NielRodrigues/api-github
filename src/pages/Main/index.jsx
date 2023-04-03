import React from "react";
import logo from "../../assets/images/logo.png";
import "./style.css";

function Main(){
  return (
    <section className="App">
      <div className="Container">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="text-headline">
          Olá Mundo, esse é o Template da RocketStack<span>.</span>
        </h1>
        <p className="text-paragraf">FEITO POR CARLOS RODRIGUES</p>
        <a
          href="https://carlosdanieldev.netlify.app/"
          target="_blank"
          className="portfolio-link"
          rel="noreferrer"
        >
          &copy; PORTIFÓLIO
        </a>
      </div>
    </section>
  );
};

export default Main;
