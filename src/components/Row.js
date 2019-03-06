import React from "react";
import Charts from "./Charts";
import axios from "axios";

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
    if (
      typeof paritycurrent != "undefined" &&
      typeof gethcurrent != "undefined"
    ) {
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
          if (blockhashmap[key][0] != blockhashmap[key][1]) {
            notinsynccounter++;
          }
        }
      });
      return 100 * (notinsynccounter / comparetotal);
    } else {
      return 0;
    }
  }

  transform(value) {
    switch (this.datatype) {
      case "sync%":
        return this.percentsync(value.metric).toFixed(2) + "%";
      case "cpu":
        return value.metric.data[0].mean.toFixed(2) + " %";
      case "ram":
      case "disk":
        return (value.metric.data[0].mean / 1024 / 1024 / 1024).toFixed(2) + " GiB";
      case "peers":
        return Math.floor(value.metric.data[0].mean);
      case "nettx":
      case "netrx":
        console.log(value.metric.data)[0];
        return value.metric.data[0].mean.toFixed(2) + " KiB/s";
      case "conflict%":
        console.log(value.metric.data)
      // return this.conflict(value.metric, value.conflict);
    }
  }

  componentDidMount() {
    axios.all([
      axios.get(url + this.metricurl),
      axios.get(url + this.conflicturl)
    ])
    .then(axios.spread((metricres, conflictres) => {
      this.setState({metric: metricres, conflict: conflictres})
    })
    )};

  mean() {
    return (
      <span>
        {this.state == null ? (
          <p>
            <i className="fa fa-spinner fa-spin chart-spinner" />
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
        <span className="icon has-text-info tooltip column is-3-desktop is-3">
          <p className="tooltiptext">{"hello"}</p>
          <i className="fas fa-info-circle" />
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
            <div className="column is-4">{this.chart()}</div>
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
