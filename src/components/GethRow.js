import React from 'react';
import Charts from './Charts';
import Modal from './Modal';

function GethRow({ text, gData, pData, chartData }) {
  return (
    <section className="columns row" id="gethTest">
      {(() => {
        const x = gData;
        if (pData < gData) {
          return <p className="column is-3-desktop data desktop-data green" id="pData">
            {x}
          </p>
        } if (pData > gData) {
          return <p className="column is-3-desktop data desktop-data red" id="pData">
            {x}
          </p>
        } if (pData === gData) {
          return <p className="column is-3-desktop data desktop-data black" id="pData">
            {x}
          </p>
        }
      }
      )()}
      <span className="column is-6-desktop text">
        <div className="columns is-mobile">
          <p className="column is-10-desktop is-10">{text} <span className="mobile-table-header">(1hr)</span></p>
          <span className="icon has-text-info tooltip column is-2-desktop is-2">
            <p className="tooltiptext">Tooltip text</p>
            <i className="fas fa-info-circle ">
            </i>
          </span>
        </div>
      </span>
      {(() => {
        if (pData < gData) {
          return <p className="column is-3-desktop data mobile-data green" id="pData">
            {gData}
          </p>
        } if (pData > gData) {
          return <p className="column is-3-desktop data mobile-data red" id="pData">
            {gData}
          </p>
        } if (pData === gData) {
          return <p className="column is-3-desktop data mobile-data black" id="pData">
            {gData}
          </p>
        }
      }
      )()}
      <div className="column is-3 graph chart">
        <Charts chartData={chartData} className=""/>
      </div>
      <Modal />
    </section>
  );
}

export default GethRow;
