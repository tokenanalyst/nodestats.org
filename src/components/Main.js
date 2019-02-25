import React from 'react';
import axios from 'axios';
import ParityRow from './ParityRow';
import GethRow from './GethRow';
import Modal from './Modal';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('is-active');
  }

  componentDidMount() {
    axios.get('https://api.tfl.gov.uk/Line/Mode/tube/Status')
      .then(result => this.setState({ stats: result.data }));
  }

  render() {
    const stats = this.state.stats;
    console.log('stats is', stats, this.props.match.params)
    return (
      <section>
        <div className="columns">
          <div className="page-divide"></div>
          <div className="columns column is-8 is-offset-2 is-mobile is-tablet main-box">
            <div className="column is-6">
              <span className="content has-text-centered company-name">
                <h2 className="subtitle" onClick={this.openModal}>Parity
                  <span className="icon has-text-info">
                    <i className="fas fa-info-circle">
                    </i>
                  </span>
                </h2>
              </span>
              <div className="content has-text-centered node-type">
                <p>Full Node</p>
              </div>
              <div className="columns is-mobile">
                <div className="column is-one-quarter is-one-quarter-desktop table-header">
                  <h3>24hr avg</h3>
                </div>
                <div className="column is-one-half table-header">
                  <h3>Description</h3>
                </div>
                <div className="column is-one-quarter table-header">
                  <h3>1hr avg</h3>
                </div>
              </div>
              <ParityRow text="Mins not at tip of the chain"/>
              <ParityRow text="CPU Usage"/>
              <ParityRow text="Memory (RAM) Usage"/>
              <ParityRow text="# of Peers"/>
              <ParityRow text="Chain data size"/>
              <ParityRow text="U.S Network bandwidth"/>
              <ParityRow text="D.S Network bandwidth"/>
            </div>
            <div className="column is-6 geth">
              <span className="content has-text-centered company-name">
                <h2 className="subtitle">Geth
                  <span className="icon has-text-info tooltip">
                    <p className="tooltiptext">Tooltip text</p>
                    <i className="fas fa-info-circle">
                    </i>
                  </span>
                </h2>
              </span>
              <div className="content has-text-centered node-type not-used">
                <p className="">Full Node</p>
              </div>
              <div className="columns is-mobile">
                <div className="column is-one-quarter table-header">
                  <h3>1hr avg</h3>
                </div>
                <div className="column is-one-half table-header">
                  <h3>Description</h3>
                </div>
                <div className="column is-one-quarter-desktop table-header">
                  <h3>24hr avg</h3>
                </div>
              </div>
              <GethRow text="Mins not at tip of the chain"/>
              <GethRow text="CPU Usage"/>
              <GethRow text="Memory (RAM) Usage"/>
              <GethRow text="# of Peers"/>
              <GethRow text="Chain data size"/>
              <GethRow text="U.S Network bandwidth"/>
              <GethRow text="D.S Network bandwidth"/>
            </div>
          </div>
        </div>
        <br />
        <div className="columns">
          <div className="columns column is-8 is-offset-2 is-mobile">
            <div className="column is-6">
              <div className="content has-text-centered node-type">
                <p>Fast Node</p>
              </div>
              <div className="columns is-mobile">
                <div className="column is-one-quarter is-one-quarter-desktop table-header">
                  <h3>24hr avg</h3>
                </div>
                <div className="column is-one-half table-header">
                  <h3>Description</h3>
                </div>
                <div className="column is-one-quarter table-header">
                  <h3>1hr avg</h3>
                </div>
              </div>
              <ParityRow text="Mins not at tip of the chain"/>
              <ParityRow text="CPU Usage"/>
              <ParityRow text="Memory (RAM) Usage"/>
              <ParityRow text="# of Peers"/>
              <ParityRow text="Chain data size"/>
              <ParityRow text="U.S Network bandwidth"/>
              <ParityRow text="D.S Network bandwidth"/>
            </div>
            <div className="column is-6">
              <div className="content has-text-centered node-type not-used">
                <p className="white">Full Node</p>
              </div>
              <div className="columns is-mobile">
                <div className="column is-one-quarter table-header">
                  <h3>1hr avg</h3>
                </div>
                <div className="column is-one-half table-header">
                  <h3>Description</h3>
                </div>
                <div className="column is-one-quarter-desktop table-header">
                  <h3>24hr avg</h3>
                </div>
              </div>
              <GethRow text="Mins not at tip of the chain"/>
              <GethRow text="CPU Usage"/>
              <GethRow text="Memory (RAM) Usage"/>
              <GethRow text="# of Peers"/>
              <GethRow text="Chain data size"/>
              <GethRow text="U.S Network bandwidth"/>
              <GethRow text="D.S Network bandwidth"/>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="columns column is-8 is-offset-2 is-mobile">
            <div className="column is-6">
              <div className="content has-text-centered node-type">
                <p>Archive Node</p>
              </div>
              <div className="columns is-mobile">
                <div className="column is-one-quarter is-one-quarter-desktop table-header">
                  <h3>24hr avg</h3>
                </div>
                <div className="column is-one-half table-header">
                  <h3>Description</h3>
                </div>
                <div className="column is-one-quarter table-header">
                  <h3>1hr avg</h3>
                </div>
              </div>
              <ParityRow text="Mins not at tip of the chain"/>
              <ParityRow text="CPU Usage"/>
              <ParityRow text="Memory (RAM) Usage"/>
              <ParityRow text="# of Peers"/>
              <ParityRow text="Chain data size"/>
              <ParityRow text="U.S Network bandwidth"/>
              <ParityRow text="D.S Network bandwidth"/>
            </div>
          </div>
          <Modal />
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
            Created by TokenAnalyst
            </p>
          </div>
        </footer>
      </section>
    )
  }
}
export default Main;
