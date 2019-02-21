import React from 'react';

function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="#" className="navbar-item">Bitmex</a>
        <p className="navbar-item">|</p>
        <a href="#" className="navbar-item">TokenAnalyst</a>
      </div>
      <div className="navbar-item is-centered">
        <h1>Nodestats.org</h1>
      </div>
      <div className="navbar-end">
        <h3 className="button navbar-item">About/info</h3>
      </div>
    </nav>
  )
}

export default Header;
