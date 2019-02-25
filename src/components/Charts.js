import React from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <div className="chart-box">
          <div style={{ maxWidth: 900 }}>
            <Chart
              width={80}
              height={50}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Test', 'Geth', 'Parity'],
                ['test 1, 1', 20, 88],
                ['test 2, 2', 45, 133]
              ]}
              options={{
                title: 'Test Chart',

                // tooltip: {isHtml: true},
                legend: 'none',
                chartArea: { width: '200%', height: '100%' },
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
}
export default Charts;
