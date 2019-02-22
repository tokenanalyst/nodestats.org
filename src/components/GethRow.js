import React from 'react';
import Charts from './Charts';
import Modal from './Modal';

function GethRow() {
  return (
    <section className="columns is-mobile">
      <p className="column is-3-desktop data">Data</p>
      <div className="column is-8-mobile is-6-desktop text">Text <span className="icon has-text-info tooltip">
        <p className="tooltiptext">Tooltip text</p>
        <i className="fas fa-info-circle">
        </i>
      </span>
      </div>
      <div className="column is-4-mobile is-3-desktop graph chart">
        <Charts />
      </div>
      <Modal />
    </section>
  );
}

export default GethRow;
