import React from 'react';
import Modal from './Modal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openBurger() {
    const burger = document.getElementById('menu');
    const burgerButton = document.getElementById('burgerButton');
    burger.classList.toggle('is-active');
    burgerButton.classList.toggle('is-active');
  }
  openModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('is-active');
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item is-centered">
            <h1 className="title">Nodestats.org</h1>
          </div>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" id="burgerButton" onClick={this.openBurger} target="menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="menu" className="navbar-menu">
          <div className="navbar-start">
            <a href="#" className="navbar-item Bitmex-link">Bitmex</a>
            <span className="navbar-item line">|</span>
            <a href="#" className="navbar-item TokenAnalyst-link">TokenAnalyst</a>
          </div>
          <div className="navbar-end container is-vcentered button-box">
            <h3 className="button navbar-item" onClick={this.openModal}>About/info</h3>
          </div>
        </div>
        <Modal />
      </nav>
    )
  }
}

export default Header;
