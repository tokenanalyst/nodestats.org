import React from 'react';
import ParityCharts from './ParityCharts';

function ParityRow({ text, pData, gData, chartData }) {
  console.log('2nd', chartData)
  return (
    <section className="columns row" id="parityTest">
      <div className="column is-4 graph chart">
        <ParityCharts chartData={chartData} className=""/>
      </div>
      <span className="column is-4-desktop text">
        <div className="columns is-mobile">
          <p className="column is-10-desktop is-10">{ text } <span className="mobile-table-header">(1hr)</span></p>
          <span className="icon has-text-info tooltip column is-4-desktop is-2">
            <p className="tooltiptext">Tooltip text</p>
            <i className="fas fa-info-circle">
            </i>
          </span>
        </div>
      </span>
      <div>
      </div>
      {(() => {
        if (pData < gData) {
          return <p className="column is-4-desktop data red" id="pData">
            {pData}
          </p>
        } if (pData > gData) {
          return <p className="column is-4-desktop data green" id="pData">
            {pData}
          </p>
        } if (pData === gData) {
          return <p className="column is-4-desktop data black" id="pData">
            {pData}
          </p>
        }
      }
      )()}
    </section>
  );
}

export default ParityRow;
