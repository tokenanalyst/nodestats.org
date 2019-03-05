import React from "react";
import Charts from "./Charts";
import Modal from "./Modal";
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
  }

  percentsync(syncdata) {
    var totalcounter = 0;
    var synccounter = 0;
    syncdata.forEach(function(obj) {
      ++totalcounter;
      if (obj["value"] == true) {
        ++synccounter;
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
      keygeth = gethcurrent[j].blockNumber;
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
  }

  transform(value) {
    switch (this.datatype) {
      case "sync%":
        return this.percentsync(value)
      case "cpu":
        return value[0].mean.toFixed(2) + " %";
      case "ram":
      case "disk":
        return (value[0].mean / 1024 / 1024 / 1024).toFixed(2) + " GiB";
      case "peers":
        return Math.floor(value[0].mean);
      case "nettx":
      case "netrx":
        return value[0].mean.toFixed(2) + " KiB/s";
    }
  }

  componentDidMount() {
    axios.get(url + this.metricurl).then(data => {
      this.setState(data);
    });
  }

  mean() {
    return (
      <span>
        {this.state == null ? (
          <p>
            <i className="fa fa-spinner fa-spin chart-spinner" />
          </p>
        ) : (
          <p>{this.transform(this.state.data)}</p>
        )}
      </span>
    );
  }

  description() {
    return (
      <span className="column is-4-desktop text">
        <div className="columns is-mobile">
          <p className="column is-9-desktop is-9">
            {this.text} <span className="mobile-table-header">(1hr)</span>
          </p>
          <span className="icon has-text-info tooltip column is-3-desktop is-3">
            <p className="tooltiptext">Tooltip text</p>
            <i className="fas fa-info-circle" />
          </span>
        </div>
      </span>
    );
  }

  chart() {
    return (
      <div className="column is-4 graph chart">
        <Charts url={this.charturl} />
      </div>
    );
  }

  render() {
    if (this.reverseOrder) {
      return (
        <section className="columns is-vcentered row">
          {this.mean()}
          {this.description()}
          {this.chart()}
          <Modal />
        </section>
      );
    } else {
      return (
        <section className="columns is-vcentered row">
          {this.chart()}
          {this.description()}
          {this.mean()}
          <Modal />
        </section>
      );
    }
  }
}

export default Row;
