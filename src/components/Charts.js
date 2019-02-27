import React from 'react'
import Chart from 'react-google-charts'

function Charts({ gData }) {
  const num = parseInt(gData);
  return (
    <section>
      <div className="chart-box">
        <div style={{ maxWidth: 1000 }}>
          <Chart
            width={80}
            height={50}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Test', 'Geth'],
              ['test 1, 1', num],
              ['test 2, 2', num]
            ]}
            options={{
              title: 'Test Chart',

              // tooltip: {isHtml: true},
              legend: 'none',
              chartArea: { width: '100%', height: '100%' },
              hAxis: {
                title: 'h axis',
                minValue: 0
              },
              vAxis: {
                title: 'v axis',
              }
            }}
            legendToggle
          />
        </div>
      </div>
    </section>
  );
}
export default Charts;
