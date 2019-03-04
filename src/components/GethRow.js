import React from 'react';
import GethCharts from './GethCharts';
import Modal from './Modal';

function GethRow({ text, gData, pData, chartData, unit }) {
  return (
    <section className="columns is-vcentered row" id="gethTest">
      {(() => {
        const x = parseFloat(Math.round(gData * 100) / 100).toFixed(2);
        if (pData < gData) {
          return <p className="column is-4-desktop data desktop-data green" id="pData">
            {x}{unit}
          </p>
        } if (pData > gData) {
          return <p className="column is-4-desktop data desktop-data red" id="pData">
            {x}{unit}
          </p>
        } if (pData === gData) {
          return <p className="column is-4-desktop data desktop-data black" id="pData">
            {x}{unit}
          </p>
        }
      }
      )()}
      <span className="column is-4-desktop text">
        <div className="columns is-mobile">
          <p className="column is-9-desktop is-9">{text} <span className="mobile-table-header">(1hr)</span></p>
          <span className="icon has-text-info tooltip column is-3-desktop is-3">
            <p className="tooltiptext">Tooltip text</p>
            <i className="fas fa-info-circle">
            </i>
          </span>
        </div>
      </span>
      {(() => {
        const x = parseFloat(Math.round(gData * 100) / 100).toFixed(2);
        if (pData < gData) {
          return <p className="column is-3-desktop data mobile-data green" id="pData">
            {x}{unit}
          </p>
        } if (pData > gData) {
          return <p className="column is-3-desktop data mobile-data red" id="pData">
            {x}{unit}
          </p>
        } if (pData === gData) {
          return <p className="column is-3-desktop data mobile-data black" id="pData">
            {x}{unit}
          </p>
        }
      }
      )()}
      <div className="column is-4 graph chart">
        <GethCharts chartData={chartData} unit={unit} className=""/>
      </div>
      <Modal />
    </section>
  );
}

export default GethRow;
