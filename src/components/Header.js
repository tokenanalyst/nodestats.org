import React from "react";
import nodestatslogo from '../images/nodestatslogo.png'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openBurger() {
    const burger = document.getElementById("menu");
    const burgerButton = document.getElementById("burgerButton");
    burger.classList.toggle("is-active");
    burgerButton.classList.toggle("is-active");
  }

  render() {
    return (
      <nav className="navbar is-vcentered" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a href="http://nodestats-test.s3-website.eu-west-2.amazonaws.com/nodestats" target="_blank">
            <img
              className="logo"
              src={nodestatslogo}
            />
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            id="burgerButton"
            onClick={this.openBurger}
            target="menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="menu" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item links">
              <a href="https://blog.bitmex.com/research/" target="_blank" className="Bitmex-link">
                BitMEX Research
              </a>
              <span className="line">|</span>
              <a href="https://www.tokenanalyst.io/" target="_blank" className="TokenAnalyst-link">
                TokenAnalyst
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
