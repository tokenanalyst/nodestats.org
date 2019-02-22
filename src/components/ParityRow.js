import React from 'react';
import Charts from './Charts';

function ParityRow() {
  return (
    <section className="columns is-mobile">
      <div className="column is-4-mobile is-3-desktop graph chart">
        <Charts />
      </div>
      <p className="column is-8-mobile is-6-desktop text">Text <span className="icon has-text-info tooltip">
        <p className="tooltiptext">Tooltip text</p>
        <i className="fas fa-info-circle">
        </i>
      </span>
      </p>
      <p className="column is-4-mobile is-3-desktop data">Data</p>
    </section>
  );
}

export default ParityRow;
