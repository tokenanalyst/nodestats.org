import React from "react";
import Modal from "./Modal";

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
  openModal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is-active");
  }

  render() {
    return (
      <nav className="navbar is-vcentered" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <img
            className="logo"
            src="/images/Screenshot 2019-03-03 at 11.42.30.png"
          />

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
              <a href="#" className="Bitmex-link">
                Bitmex
              </a>
              <span className="line">|</span>
              <a href="#" className="TokenAnalyst-link">
                TokenAnalyst
              </a>
            </div>
            <div className="is-vcentered button-box is-centered-mobile">
              <button className="button navbar-item" onClick={this.openModal}>
                About/info
              </button>
            </div>
          </div>
        </div>
        <Modal />
      </nav>
    );
  }
}

export default Header;
