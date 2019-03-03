import React from 'react'
import Chart from 'react-google-charts'

function GethCharts({ chartData }) {
  const arrayValues = [];
  const arrayTimes = [];
  return (
    <section>
      {chartData
        ?
        <div className="chart-box">
          {(() => {
            console.log('chart data is', chartData, arrayValues, arrayTimes)
            for (let i = 0; i < chartData.length; i++) {
              arrayValues.push(chartData[i].value);
              arrayTimes.push(chartData[i].time.slice(11));
              arrayTimes.push(chartData[i].time);
            }
          })()}
          <div style={{ maxWidth: 1000 }}>
            <Chart
              className="charts"
              width={180}
              height={100}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Time', 'Data'],
                [arrayTimes[0], arrayValues[0]],
                [arrayTimes[100] || [], arrayValues[100]],
                [arrayTimes[200] || [], arrayValues[200]],
                [arrayTimes[300] || [], arrayValues[300]],
                [arrayTimes[400] || [], arrayValues[400]],
                [arrayTimes[500] || [], arrayValues[500]],
                [arrayTimes[600] || [], arrayValues[600]],
                [arrayTimes[700] || [], arrayValues[700]],
                [arrayTimes[800] || [], arrayValues[800]],
                [arrayTimes[900] || [], arrayValues[900]],
                [arrayTimes[1000] || [], arrayValues[1000]],
                [arrayTimes[1100] || [], arrayValues[1100]],
                [arrayTimes[1200] || [], arrayValues[1200]],
                [arrayTimes[1300] || [], arrayValues[1300]],
                [arrayTimes[1400] || [], arrayValues[1400]],

                ['Data', 'Values'],
                [arrayTimes[0], arrayValues[0]],
                [arrayTimes[1] || [], arrayValues[10]],
                [arrayTimes[20] || [], arrayValues[20]],
                [arrayTimes[30] || [], arrayValues[30]],
                [arrayTimes[40] || [], arrayValues[40]],
                [arrayTimes[50] || [], arrayValues[50]],
                [arrayTimes[60] || [], arrayValues[60]],
                [arrayTimes[70] || [], arrayValues[70]],
                [arrayTimes[80] || [], arrayValues[80]],
                [arrayTimes[90] || [], arrayValues[90]],
                [arrayTimes[100] || [], arrayValues[100]],
                [arrayTimes[110] || [], arrayValues[110]],
                [arrayTimes[120] || [], arrayValues[120]]

              ]}
              options={{
                legend: 'none',
                chart: {
                }
              }}
            />
          </div>
        </div>
        :
        <p>Please Wait....</p>
      }
    </section>
  );
}
export default GethCharts;
