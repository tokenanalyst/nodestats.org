import React from 'react';
import axios from 'axios';
import ParityRow from './ParityRow';
import GethRow from './GethRow';
import Modal from './Modal';
import {scrollDown, clickTooltip, scrollFunction, scrollFunction2, scrollUp} from '../lib/navigationFunctions';
import {tester} from '../lib/comparison';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
    this.tester = this.tester.bind(this);
  }


  tester() {
    const x = parseInt(this.myRef1.current);
    const y = parseInt(this.myRef2.current);
    console.log('hi', x, y);
  }

  componentDidMount() {
    axios.get('/api/nodestats')
      .then(result => this.setState({ stats: result.data }))
      .then(this.tester)
      .then(window.onscroll = function() {
        scrollFunction()
        scrollFunction2()
      })
  }

  render() {
    const stats = this.state.stats;
    console.log('stats is', this.props, stats)
    return (
      <section>
        {stats
          ?
          <div>
            <div className="columns">
              <div className="page-divide"></div>
              <div className="columns column is-10 is-offset-1 is-mobile main-box">
                <div className="column is-6">
                  <span className="content has-text-centered company-name">
                    <h2 className=""><span className="company">Parity</span>
                      <span className="icon has-text-info company-icon tooltip" onClick={clickTooltip} id="tooltip">
                        <p className="tooltiptext">Tooltip text</p>
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
                  <ParityRow pData={stats.Stats.data[0].testNumber} gData={stats.Stats.data[1].testNumber} text="Mins not at tip of the chain"/>
                  <ParityRow pData={stats.Stats.data[2].testNumber} gData={stats.Stats.data[1].testNumber} text="CPU Usage"/>
                  <ParityRow pData={stats.Stats.data[2].testNumber} gData={stats.Stats.data[0].testNumber} text="Memory (RAM) Usage"/>
                  <ParityRow pData={stats.Stats.data[1].testNumber} gData={stats.Stats.data[1].testNumber} text="# of Peers"/>
                  <ParityRow pData={stats.Stats.data[2].testNumber} gData={stats.Stats.data[0].testNumber} text="Chain data size"/>
                  <ParityRow pData={stats.Stats.data[1].testNumber} gData={stats.Stats.data[2].testNumber} text="Upstream"/>
                  <ParityRow pData={stats.Stats.data[1].testNumber} gData={stats.Stats.data[0].testNumber} text="Downstream"/>
                </div>
                <div className="column is-6 geth">
                  <span className="content has-text-centered company-name">
                    <h2 className=""><span className="company">Geth</span>
                      <span className="icon company-icon has-text-info tooltip" onClick={clickTooltip}>
                        <p className="tooltiptext">Tooltip text</p>
                        <i className="fas fa-info-circle">
                        </i>
                      </span>
                    </h2>
                  </span>
                  <div className="content has-text-centered node-type not-used">
                    <p id="full">Full Node</p>
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
                  <GethRow pData={stats.Stats.data[0].testNumber} gData={stats.Stats.data[1].testNumber} text="Mins not at tip of the chain"/>
                  <GethRow pData={stats.Stats.data[2].testNumber} gData={stats.Stats.data[1].testNumber} text="CPU Usage"/>
                  <GethRow pData={stats.Stats.data[2].testNumber} gData={stats.Stats.data[0].testNumber} text="Memory (RAM) Usage"/>
                  <GethRow pData={stats.Stats.data[1].testNumber} gData={stats.Stats.data[1].testNumber} text="# of Peers"/>
                  <GethRow pData={stats.Stats.data[2].testNumber} gData={stats.Stats.data[0].testNumber} text="Chain data size"/>
                  <GethRow pData={stats.Stats.data[1].testNumber} gData={stats.Stats.data[2].testNumber} text="Upstream"/>
                  <GethRow pData={stats.Stats.data[1].testNumber} gData={stats.Stats.data[0].testNumber} text="Downstream"/>
                </div>
              </div>
            </div>
            <br />
            <div className="columns">
              <div className="columns column is-10 is-offset-1 is-mobile">
                <div className="column is-6">
                  <div className="content has-text-centered node-type">
                    <p id="fast">Fast Node</p>
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
                  {stats.data && stats.data.map(stats =>
                    <div key={stats}>
                      <ParityRow data={stats.mean} text="# of Peers"/>
                    </div>
                  )}
                  <ParityRow text="Chain data size"/>
                  <ParityRow text="Upstream"/>
                  <ParityRow text="Downstream"/>
                </div>
                <div className="column is-6">
                  <div className="content has-text-centered node-type not-used">
                    <p className="white">Fast Node</p>
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
                  <GethRow text="Upstream"/>
                  <GethRow text="Downstream"/>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="columns column is-10 is-offset-1 is-mobile">
                <div className="column is-6">
                  <div className="content has-text-centered node-type">
                    <p id="archive" ref={this.myRef}>Archive Node</p>
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
                  <ParityRow text="Upstream"/>
                  <ParityRow text="Downstream"/>
                </div>
              </div>
              <span className="navs arrowUp" id="upArrow" onClick={scrollUp}>▲</span>
              <span className="navs arrowDown" id="downArrow" onClick={scrollDown}>▼</span>
              <div className="mobile-bottom-navs">
                <a href="#archive" className="archive navs">Archive</a>
                <a href="#fast" className="fast navs is-centered">Fast</a>
                <a href="#full" className="full navs">Full</a>
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
          </div>
          :
          <p>Please Wait...</p>
        }
      </section>
    )
  }
}
export default Main;
