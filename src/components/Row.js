import React from 'react';
import Charts from './Charts';
import Modal from './Modal';
import axios from 'axios';

var url = 'http://nodestats.tokenanalyst.io'

class Row extends React.Component {
    constructor(props){
        super(props)
        this.text = props.text
        this.unit = props.unit
        this.metricurl = props.metricurl
        this.charturl = props.charturl
    }
    componentDidMount(){
        console.log(this.state)
        axios.get(url+this.metricurl).then(data => {
            this.setState(data)
            console.log(this.state)
    })
    }
    render() {
  return (
    <section className="columns is-vcentered row" id="gethTest">
        {this.state==null ? <p><i className="fa fa-spinner fa-spin chart-spinner" /></p>:
        <p>{this.state.data[0].mean}</p>}
      <span className="column is-4-desktop text">
        <div className="columns is-mobile">
          <p className="column is-9-desktop is-9">{this.text} <span className="mobile-table-header">(1hr)</span></p>
          <span className="icon has-text-info tooltip column is-3-desktop is-3">
            <p className="tooltiptext">Tooltip text</p>
            <i className="fas fa-info-circle">
            </i>
          </span>
        </div>
      </span>
      <div className="column is-4 graph chart">
        <Charts url={this.charturl}/>
      </div>
      <Modal />
    </section>
  );
}
}

export default Row;
