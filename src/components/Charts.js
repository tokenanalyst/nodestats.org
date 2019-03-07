import React from "react";
import Chart from "react-google-charts";
import axios from "axios";

import * as Sentry from "@sentry/browser";

var url = "http://nodestats.tokenanalyst.io";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.url = props.url;
  }
  componentDidMount() {
    axios
      .get(url + this.url)
      .then(data => {
        this.setState(data);
        localStorage.setItem(this.url, JSON.stringify(data)); // caching for fallback
      })
      .catch(err => {
        const cachedMetric = JSON.parse(localStorage.getItem(this.url));
        if (cachedMetric != null) {
          this.setState(cachedMetric);
          Sentry.captureException(
            new Error(
              "Loaded from cache instead of API, API not reachable; Fallback used."
            )
          );
        } else {
          console.log("No cache and no API");
          Sentry.captureException(
            new Error("No Cache and no API, Fatal error")
          );
        }
      });
  }
  render() {
    if (this.state != null) {
      var data = this.state.data;
      var arrayValues = [];
      var arrayTimes = [];
      return (
        <section>
          <div className="chart-box">
            {(() => {
              for (let i = 0; i < data.length; i++) {
                if (data[i].value == true) {
                  var value = 1;
                } else if (data[i].value == false) {
                  var value = 0;
                } else if (data[i].blockNumber || data[i].blockHash) {
                  value = 0; //placehold for conflict sync chart
                } else var value = data[i].value;
                arrayValues.push(value);
                arrayTimes.push(data[i].time.slice(11, 19));
              }
            })()}
            <div style={{ maxWidth: 1000 }}>
              <Chart
                className="charts"
                width={180}
                height={80}
                chartType="AreaChart"
                loader={
                  <div>
                    <i className="fa fa-spinner fa-spin chart-spinner" />
                  </div>
                }
                data={[
                  ["Time", "Value"],
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
                  [arrayTimes[1400] || [], arrayValues[1400]]
                ]}
                options={{
                  lineWidth: 3,
                  legend: "none",
                  chart: {},
                  vAxis: {
                    gridlines: {
                      color: "transparent"
                    },
                    textPosition: "none"
                  },
                  hAxis: {
                    gridlines: {
                      color: "transparent"
                    },
                    textPosition: "none"
                  },
                  curveType: "function",
                  colors: ["#3070ff"]
                }}
              />
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <p className="spinner-box">
          <i className="fa fa-spinner fa-spin chart-spinner" />
        </p>
      );
    }
  }
}
export default Charts;
