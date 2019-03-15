import React from "react";
import Chart from "react-google-charts";
import axios from "axios";

import * as Sentry from "@sentry/browser";

var url = "http://nodestats.tokenanalyst.io";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.url = props.url;
    this.datatype = props.datatype;
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

  dataDescription() {
    if (this.datatype === 'nettx' || this.datatype === 'netrx') return "KB/s";
    if (this.datatype === 'disk') return "GB";
    if (this.datatype === 'ram' || this.datatype === 'cpu' || this.datatype === 'conflict%') return "%";
    if (this.datatype === 'peers') return "Peers";
    if (this.datatype === 'sync%') return "Sync Status";
  }
  dataTransform(data) {
    if (this.datatype === 'disk') return parseFloat((data / 1024 / 1024 / 1024).toFixed(2))
    if (this.datatype === 'nettx' || this.datatype === 'netrx') return parseFloat(data.toFixed(2))
    if (this.datatype === 'ram' && this.url === "/parity-archive-ram-24h") return parseFloat((data / 1024 / 1024 / 1024 / 122 * 100).toFixed(2))
    if (this.datatype === 'ram') return parseFloat((data / 1024 / 1024 / 1024 / 15.25 * 100).toFixed(2))
    else return data;
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
                width="100%"
                height={80}
                chartType="AreaChart"
                loader={
                  <div>
                    <i className="fa fa-spinner fa-spin spinner" />
                  </div>
                }
                data={[
                  ["Time", this.dataDescription()],
                  [arrayTimes[0], this.dataTransform(arrayValues[0])],
                  [arrayTimes[Math.floor(arrayTimes.length/10)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/10)])],
                  [arrayTimes[Math.floor(arrayTimes.length/9)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/9)])],
                  [arrayTimes[Math.floor(arrayTimes.length/7.5)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/7.5)])],
                  [arrayTimes[Math.floor(arrayTimes.length/6.5)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/6.5)])],
                  [arrayTimes[Math.floor(arrayTimes.length/5.5)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/5.5)])],
                  [arrayTimes[Math.floor(arrayTimes.length/5)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/5)])],
                  [arrayTimes[Math.floor(arrayTimes.length/4.2)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/4.2)])],
                  [arrayTimes[Math.floor(arrayTimes.length/3.8)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/3.8)])],
                  [arrayTimes[Math.floor(arrayTimes.length/3.4)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/3.4)])],
                  [arrayTimes[Math.floor(arrayTimes.length/3)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/3)])],
                  [arrayTimes[Math.floor(arrayTimes.length/2.6)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/2.6)])],
                  [arrayTimes[Math.floor(arrayTimes.length/2.3)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/2.3)])],
                  [arrayTimes[Math.floor(arrayTimes.length/2)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/2)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.95)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.95)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.9)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.9)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.85)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.85)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.8)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.8)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.7)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.7)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.65)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.65)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.5)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.5)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.45)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.45)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.3)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.3)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.25)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.25)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.15)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.15)])],
                  [arrayTimes[Math.floor(arrayTimes.length/1.1)] || [], this.dataTransform(arrayValues[Math.floor(arrayValues.length/1.1)])],
                  [arrayTimes[arrayTimes.length-1] || [], this.dataTransform(arrayValues[arrayValues.length-1])]
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
                  colors: ["#3070ff"],
                  fontSize: 10
                }}
              />
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <p className="spinner-box">
          <i className="fa fa-spinner fa-spin spinner" />
        </p>
      );
    }
  }
}
export default Charts;
