import React from "react";
import Charts from "./Charts";
import axios from "axios";

import * as Sentry from '@sentry/browser';

var url = "http://nodestats.tokenanalyst.io";

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.datatype = props.datatype;
    this.reverseOrder = props.reverseOrder;
    this.text = props.text;
    this.metricurl = props.metricurl;
    this.charturl = props.charturl;
    this.conflicturl = props.conflicturl;
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
      return 100*(notinsynccounter/comparetotal);
    }
  }

  transform(value) {
    switch (this.datatype) {
      case "sync%":
        return this.percentsync(value.metric.data).toFixed(2) + "%";
      case "cpu":
        return value.metric.data[0].mean.toFixed(2) + " %";
      case "ram":
      case "disk":
        return (
          (value.metric.data[0].mean / 1024 / 1024 / 1024).toFixed(2) + " GiB"
        );
      case "peers":
        return Math.floor(value.metric.data[0].mean);
      case "nettx":
      case "netrx":
        return value.metric.data[0].mean.toFixed(2) + " KiB/s";
      case "conflict%":

        return this.conflict(value.metric.data, value.conflict.data) + " %";
    }
  }

  tooltip() {
    if (this.datatype === 'sync%') return '% of time in sync: The % of time in the past hour that the node has downloaded and verified all the block data for what its peers are informing it is the current highest chain tip'
    if (this.datatype === 'cpu') return 'CPU Usage: The CPU usage for the node client process which is running on an Intel(R) Xeon(R) CPU E5-2686 @ 2.30GHz machine with two cores';
    if (this.datatype === 'ram') return  'Memory Usage: The memory usage for the node client process on a dedicated machine with 14GB of total memory available'
    if (this.datatype === 'nettx') return 'Upstream Bandwidth: The upstream network throughput on the network interface of the machine on which the node runs'
    if (this.datatype === 'netrx') return 'Downstream Bandwidth: The upstream network throughput on the network interface of the machine on which the node runs'
    if (this.datatype === 'peers') return 'Peer count: The number of peers currently connected to the node'
    if (this.datatype === 'disk') return 'Chain Data Size: The disk space taken up by the node client - including all of the chain '
    if (this.datatype === 'conflict%') return '% at conflicting tip: The proportion of time Geth and Parity have different block hashes at the same block height' 
  }

  componentDidMount() {
    if (this.conflicturl) {
      axios.all([axios.get(url + this.metricurl), axios.get(url + this.conflicturl)])
        .then(axios.spread((metricres, conflictres)  => {
          this.setState({ metric: metricres, conflict: conflictres });
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
        this.setState({ metric: data });
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
      <div className="column is-5 graph chart">
        <Charts url={this.charturl} />
      </div>
    );
  }

  render() {
    if (this.reverseOrder) {
      return (
        <div>
          <section className="columns is-vcentered desktop-only">
            <div className="column is-4 data">{this.mean()}</div>
            <div className="column is-4 text">{this.description()}</div>
            <div className="column is-4 is-centered">{this.chart()}</div>
          </section>
          <div className="mobile-row mobile-only is-vcentered">
            <div className="column text">{this.description()}</div>
            <div className="column data">{this.mean()}</div>
          </div>
        </div>
      );
    } else {
      return (
        <section className="columns mobile-row is-vcentered">
          <div className="column is-4 chart">{this.chart()}</div>
          <div className="column is-4 text">{this.description()}</div>
          <div className="column is-4 data">{this.mean()}</div>
        </section>
      );
    }
  }
}

export default Row;
