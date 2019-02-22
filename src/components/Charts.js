import React from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/nodestats')
      .then(result => this.setState({ test: result.data }));
  }

  render() {
    const test = this.state.test;
    console.log('test is', test)
    return (
      <section>
        {test

          ?

          <div className="chartBox">
            <div style={{ maxWidth: 900 }}>
              <Chart
                width={80}
                height={50}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Test', 'Geth', 'Parity'],
                  ['test 1, 1', 20, 88],
                  ['test 2, 2', 45, 133]
                ]}
                options={{
                  title: 'Test Chart',
                  chartArea: { width: '100%' },
                  hAxis: {
                    title: 'h axis',
                    minValue: 0,
                  },
                  vAxis: {
                    title: 'v axis',
                  }
                }}
                legendToggle
              />
            </div>
          </div>

          :
          <p>Please Wait...</p>}
      </section>
    );
  }
}
export default Charts;
