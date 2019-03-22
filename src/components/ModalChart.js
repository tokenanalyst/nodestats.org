import React from "react";
import Chart from "react-google-charts";
import axios from "axios";

import * as Sentry from "@sentry/browser";

var url = "https://nodestats.tokenanalyst.io";

class ModalChart extends React.Component {
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
                height={300}
                chartType="AreaChart"
                loader={
                  <div>
                    <i className="fa fa-spinner fa-spin spinner" />
                  </div>
                }
                data=
                  {(() => {
                    const chartData = [['Time', this.dataDescription()]]
                    for (let i = 0; i < arrayTimes.length; i += 1) {
                      chartData.push([arrayTimes[i], this.dataTransform(arrayValues[i])])
                    }
                    return chartData
                  })()}

                options={{
                  lineWidth: 0.8,
                  chart: {},
                  height: '100%',
                  crosshair: { trigger: 'both', color: 'red' },
                  width: '100%',
                  chartArea: {
                    width: '73%', height: '70%'
                  },
                  hAxis: {
                    showTextEvery: 700,
                    gridlines: {
                      color: "transparent"
                    }
                  },
                  curveType: "function",
                  colors: ["#3070ff"],
                  fontSize: 15,
                  animation: {
                    startup: true,
                    easing: 'out',
                    duration: 1500
                  },
                  enableInteractivity: true
                }}
              />
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <p className="modal-spinner-box">
          <i className="fa fa-spinner fa-spin modal-spinner" />
        </p>
      );
    }
  }
}
export default ModalChart;
