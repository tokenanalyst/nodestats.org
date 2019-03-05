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
    this.unit = props.unit;
    this.metricurl = props.metricurl;
    this.charturl = props.charturl;
  }

  transform(value) {
    if(this.datatype == "cpu") {
      return(value.toFixed(2) + " %")
    }
    if(this.datatype == "ram") {
      return((value/1024/1024/1024).toFixed(2) + " GiB")
    }
    if(this.datatype == "disk") {
      return((value/1024/1024/1024).toFixed(2) + " GiB")
    }
    if(this.datatype == "peers") {
      return(value.toFixed(2) + " #")
    }
    if(this.datatype == "nettx") {
      return(value.toFixed(2) + " KiB/s")
    }
    if(this.datatype == "netrx") {
      return(value.toFixed(2) + " KiB/s")
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
          <p>{this.transform(this.state.data[0].mean)}</p>
        )}
      </span>
    )
  }

  description() {
    return(
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
    )
  }

  chart() {
    return(<div className="column is-4 graph chart">
    <Charts url={this.charturl} />
    </div>)
  }

  render() {
    if(this.reverseOrder) {
      return (
        <section className="columns is-vcentered row">
          {this.mean()}
          {this.description()}
          {this.chart()}
          <Modal />
        </section>
      )
    } else {
      return (
        <section className="columns is-vcentered row">
          {this.chart()}
          {this.description()}
          {this.mean()}
          <Modal />
        </section>
      )
    }
  }
}

export default Row;
