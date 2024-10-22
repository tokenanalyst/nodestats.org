import React from "react";
import Charts from "./Charts";
import axios from "axios";
import ModalChart from "./ModalChart";

import * as Sentry from '@sentry/browser';

var url = "https://nodestats.tokenanalyst.io";

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.datatype = props.datatype;
    this.reverseOrder = props.reverseOrder;
    this.text = props.text;
    this.metricurl = props.metricurl;
    this.charturl = props.charturl;
    this.conflicturl = props.conflicturl;
    this.infoBar = props.infoBar;

  }

  percentsync(syncdata) {
    var totalcounter = 0;
    var synccounter = 0;
    syncdata.forEach(function(obj) {
      totalcounter++;
      if (obj["value"] == true) {
        synccounter++;
      }
    });
    return 100 * (synccounter / totalcounter);
  }

  conflict(paritycurrent, gethcurrent) {
    var blockhashmap = {};
    var notinsynccounter = 0;
    var comparetotal = 0;
    for (var i = 0; i < paritycurrent.length; i++) {
      var keyparity = paritycurrent[i].blockNumber;
      blockhashmap[keyparity] = [paritycurrent[i].blockHash];
    }
    for (var j = 0; j < gethcurrent.length; j++) {
      var keygeth = gethcurrent[j].blockNumber;
      if (keygeth in blockhashmap) {
        blockhashmap[keygeth].push(gethcurrent[j].blockHash);
      }
    }
    Object.keys(blockhashmap).forEach(function(key) {
      if (blockhashmap[key].length > 1) {
         comparetotal++;
      }
      if (blockhashmap[key][0] != blockhashmap[key][1]) {
         notinsynccounter++;
        }
      });
    if (comparetotal == 0){
      return 0
    }
    else {
      return 0*(notinsynccounter/comparetotal);
    }
  }

  blockMax(value) {

    var x = value.metric.data
    var z = []
    var y = []
    for (var i = 0; i < x.length; i++) {
      z.push(x[i].blockNumber);
      y.push(x[i].time.slice(11, 16))
    }
    return <span className="info columns has-text-centered">
      <span className="column is-6">Block Height: {Math.max(...z).toLocaleString()}</span>
      <span className="column is-6">Last Updated: {y.pop()} UTC</span>
    </span>
  }

  transform(value) {
    switch (this.datatype) {
      case "sync%":
        return this.percentsync(value.metric.data).toFixed(2) + "%";
      case "cpu":
        return value.metric.data[0].mean.toFixed(2) + "%";
      case "ram":
        if (this.metricurl === "/parity-archive-ram-1h-avg") {
          return (value.metric.data[0].mean / 1024 / 1024 / 1024 / 122 * 100).toFixed(2) + "%"
        }
        else {
          return ((value.metric.data[0].mean / 1024 / 1024 / 1024) / 15.25 * 100).toFixed(2) + "%"
        }
      case "disk":
        return (
          (value.metric.data[0].mean / 1024 / 1024 / 1024).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " GB"
        );
      case "peers":
        return Math.floor(value.metric.data[0].mean);
      case "nettx":
      case "netrx":
        return value.metric.data[0].mean.toFixed(1) + " KB/s";
      case "conflict%":
        return this.conflict(value.metric.data, value.conflict.data).toFixed(2) + "%";
      case "blockHeight":
        if (this.infoBar === "true") {
          return this.blockMax(value)
        }
    }
  }

  tooltip() {
    if (this.datatype === 'sync%') return 'The % of time in the past hour that the node has downloaded and verified the block data for what its peers are informing it is the current highest block. Chart displays when in sync (1) and not (0)'
    if (this.datatype === 'cpu' && this.metricurl === '/parity-archive-cpu-1h-avg') return 'The CPU usage for the node client process which is running on an Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz machine with 16 cores'
    if (this.datatype === 'cpu') return 'The CPU usage for the node client process which is running on an Intel(R) Xeon(R) CPU E5-2686 @ 2.30GHz machine with two cores'
    if (this.datatype === 'ram' && this.metricurl === '/parity-archive-ram-1h-avg') return  'The memory (RAM) usage of the node client process on a dedicated machine with 120GB of total memory available'
    if (this.datatype === 'ram') return  'The memory usage for the node client process on a dedicated machine with 14GB of total memory available'
    if (this.datatype === 'nettx') return 'The upstream network throughput on the network interface of the machine on which the node runs'
    if (this.datatype === 'netrx') return 'The downstream network throughput on the network interface of the machine on which the node runs'
    if (this.datatype === 'peers') return 'The number of peers currently connected to the node'
    if (this.datatype === 'disk') return 'The total disk space taken up by the node client - including all of the chain. This is the actual total chaindata size, not an average.'
    if (this.datatype === 'conflict%') return 'The proportion of time Geth and Parity have different block hashes at the same block height'
  }

  componentDidMount() {
    if (this.conflicturl) {
      axios.all([axios.get(url + this.metricurl), axios.get(url + this.conflicturl)])
        .then(axios.spread((metricres, conflictres)  => {
          this.setState({ metric: metricres, conflict: conflictres, isShowingModal: false});
          localStorage.setItem(this.metricurl, JSON.stringify(metricres)); // caching for fallback
          localStorage.setItem(this.conflicturl, JSON.stringify(conflictres)); // caching for fallback
        })
        )
        .catch(err => {
          const cachedMetric = JSON.parse(localStorage.getItem(this.metricurl))
          const cachedConflict = JSON.parse(localStorage.getItem(this.conflicturl))
          if(cachedMetric != null && cachedConflict != null) {
            this.setState({ metric: cachedMetric, conflict: cachedConflict});
            Sentry.captureException(new Error("Loaded from cache instead of API, API not reachable; Fallback used."));
          } else {
            Sentry.captureException(new Error("No Cache and no API, Fatal error"));
          }
        })
    } else {
      axios.get(url + this.metricurl).then(data => {
        this.setState({ metric: data, isShowingModal: false});
        localStorage.setItem(this.metricurl, JSON.stringify(data)); // caching for fallback
      })
      .catch(err => {
        const cachedMetric = JSON.parse(localStorage.getItem(this.metricurl))
        if(cachedMetric != null) {
          this.setState({ metric: cachedMetric});
        } else {
          console.log("No cache and no API")
          Sentry.captureException(new Error("No Cache and no API, Fatal error"));
        }
      });
    }
  }

  mean() {
    return (
      <span>
        {this.state == null ? (
          <p>
            <i className="fa fa-spinner fa-spin spinner" />
          </p>
        ) : (
          <p className="data">{this.transform(this.state)}</p>
        )}
      </span>
    );
  }

  description() {
    return (
      <span className="columns is-mobile is-multiline">
        <p className="column is-9-desktop">
          {this.text} <span className="mobile-table-header">(1hr)</span>
        </p>
        <span className="icon small-tooltips tooltip column is-3-desktop is-3">

          <p className="tooltiptext">{this.tooltip()}</p>

          <i className="fas fa-question-circle" />
        </span>
      </span>
    );
  }

  chart() {
    return (
      <div className="column is-12 graph chart">
        <Charts url={this.charturl} datatype={this.datatype}/>
      </div>
    );
  }

  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})

  modal(company) {
    return (
      <span>
        {this.state == null ? (
          <p className="empty">
              nothing
          </p>
        ) : (
          <span>
            {this.state.isShowingModal ? (
              <div className="modal is-active">
                <div className="modal-background" onClick={this.handleClose}></div>
                <div className="modal-card chart-modal">
                  <header className="modal-card-head">
                    <div className="modal-card-title title">{company} {this.text}</div>
                    <div className="modal-card-title title"></div>
                    <div>{this.mean()} 1 Hr Avg </div>
                  </header>
                  <div className="modal-card-body">
                    <div className="modal-chart">
                      <h2 className="subtitle">24 Hr Avg</h2>
                      <div className=""><ModalChart url={this.charturl} datatype={this.datatype}/></div>
                    </div>
                  </div>
                  <footer className="modal-card-foot columns is-vcentered">
                    <div className="container has-text-centered">
                      <button className="button is-info" onClick={this.handleClose}>Close</button>
                    </div>
                  </footer>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.handleClose}></button>
              </div>
            ) : (
              <p className="empty">
                  nothing
              </p>
            )
            }
          </span>
        )}
      </span>
    )
  }

  render() {
    if (this.reverseOrder) {
      return (
        <div>
          <section className="columns is-vcentered desktop-only">
            <div className="column is-4 data">{this.mean()}</div>
            <div className="column is-4 text">{this.description()}</div>
            <div className="column is-4 is-centered" onClick={this.handleClick.bind(this)}>{this.chart()}</div>
            {this.modal('Ethereum Geth')}
          </section>
          <div className="mobile-row mobile-only is-vcentered">
            <div className="column text">{this.description()}</div>
            <div className="column data">{this.mean()}</div>
          </div>
        </div>
      );
    } if (this.infoBar === 'true') {
      return (
        <div className="columns is-vcentered info-bar">
          <div className="column is-2 is-offset-1">
            {(() => {
              if (this.state === null) {
                return <div className="columns is-vcentered has-text-centered">
                  <span className="red column is-10">Loading</span>
                  <span className="offline"></span>
                </div>
              } else
                return <div className="columns is-vcentered has-text-centered">
                  <span className="green column is-10">Online</span>
                  <span className="online"></span>
                </div>
            })()}
          </div>
          <div className="column is-8 is-offset-1">
            <div className="columns time-box is-vcentered">
              <span className="column time">{this.mean()}</span>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <section className="columns mobile-row is-vcentered">
          <div className="column is-4 chart" onClick={this.handleClick.bind(this)}>{this.chart()}</div>
          <div className="column is-4 text">{this.description()}</div>
          <div className="column is-4 data">{this.mean()}</div>
          {this.modal('Ethereum Parity')}
        </section>
      );
    }
  }
}

export default Row;
