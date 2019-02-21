import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openBurger() {
    let x = document.getElementById('menu');
    x.classList.toggle('is-active');
  }


  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" onClick={this.openBurger}>
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
          <div className="navbar-item is-centered">
            <h1>Nodestats.org</h1>
          </div>
          <div className="navbar-end container is-vcentered">
            <h3 className="button navbar-item">About/info</h3>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
