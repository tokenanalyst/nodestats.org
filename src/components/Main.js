import React from 'react';

import Row from './Row';
import Modal from './Modal';
import {scrollDown, clickTooltip, scrollFunction, scrollFunction2, scrollUp} from '../lib/navigationFunctions';



// http://lb-api-2c97d9e50f6a4e75.elb.eu-west-2.amazonaws.com/parity-full-netrx-1h-avg

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="">
          <div>
            <div className="columns">
              <div className="page-divide"></div>
              <div className="columns column is-10 is-offset-1 is-mobile">
                <div className="column is-6">
                  <span className="content has-text-centered company-name">
                    <h2 className="name"><span className="company">Parity</span>
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
                  <Row text="Mins not at tip of the chain"/>
                  <Row metricurl='/parity-fast-cpu-1h-avg' charturl='/parity-fast-cpu-24h' text="CPU Usage" unit=" %"/>
                  <Row text="Memory (RAM) Usage" unit=" GB"/>
                  <Row text="# of Peers" unit=" Peers"/>
                  <Row text="Chain data size" unit=" GB"/>
                  <Row text="Upstream" unit=" Kb/s"/>
                  <Row text="Downstream" unit=" Kb/s"/>
                </div>
                <div className="column is-6 geth">
                  <span className="content has-text-centered company-name">
                    <h2 className="name"><span className="company">Geth</span>
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
                  <Row text="Mins not at tip of the chain"/>
                  <Row text="CPU Usage" unit=" %"/>
                  <Row text="Memory (RAM) Usage" unit=" GB"/>
                  <Row text="# of Peers" unit=" Peers"/>
                  <Row text="Chain data size" unit=" GB"/>
                  <Row text="Upstream" unit=" Kb/s"/>
                  <Row text="Downstream" unit=" Kb/s"/>
                </div>
              </div>
            </div>
            <br />
            <div className="columns">
              <div className="columns column is-10 is-offset-1 is-mobile">
                <div className="column is-6">
                  <span className="content has-text-centered company-name">
                    <h2 className="name"><span className="company">Parity</span>
                      <span className="icon has-text-info company-icon tooltip" onClick={clickTooltip} id="tooltip">
                        <p className="tooltiptext">Tooltip text</p>
                        <i className="fas fa-info-circle">
                        </i>
                      </span>
                    </h2>
                  </span>
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
                  <Row text="Mins not at tip of the chain"/>
                  <Row text="CPU Usage" unit=" %"/>
                  <Row text="Memory (RAM) Usage" unit=" GB"/>
                  <Row text="# of Peers" unit=" Peers"/>
                  <Row text="Chain data size" unit=" GB"/>
                  <Row text="Upstream" unit=" Kb/s"/>
                  <Row text="Downstream" unit=" Kb/s"/>
                  </div>
                <div className="column is-6">
                  <span className="content has-text-centered company-name">
                    <h2 className="name"><span className="company">Geth</span>
                      <span className="icon company-icon has-text-info tooltip" onClick={clickTooltip}>
                        <p className="tooltiptext">Tooltip text</p>
                        <i className="fas fa-info-circle">
                        </i>
                      </span>
                    </h2>
                  </span>
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
                  <Row text="Mins not at tip of the chain"/>
                  <Row text="CPU Usage" unit=" %"/>
                  <Row text="Memory (RAM) Usage" unit=" GB"/>
                  <Row text="# of Peers" unit=" Peers"/>
                  <Row text="Chain data size" unit=" GB"/>
                  <Row text="Upstream" unit=" Kb/s"/>
                  <Row text="Downstream" unit=" Kb/s"/>
                  </div>
              </div>
            </div>
            <div className="columns">
              <div className="columns column is-10 is-offset-1 is-mobile">
                <div className="column is-6">
                  <span className="content has-text-centered company-name">
                    <h2 className="name"><span className="company">Parity</span>
                      <span className="icon has-text-info company-icon tooltip" onClick={clickTooltip} id="tooltip">
                        <p className="tooltiptext">Tooltip text</p>
                        <i className="fas fa-info-circle">
                        </i>
                      </span>
                    </h2>
                  </span>
                  <div className="content has-text-centered node-type">
                    <p id="archive">Archive Node</p>
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
                  <Row text="Mins not at tip of the chain"/>
                  <Row text="CPU Usage" unit=" %"/>
                  <Row text="Memory (RAM) Usage" unit=" GB"/>
                  <Row text="# of Peers" unit=" Peers"/>
                  <Row text="Chain data size" unit=" GB"/>
                  <Row text="Upstream" unit=" Kb/s"/>
                  <Row text="Downstream" unit=" Kb/s"/>
                  </div>
              </div>
              <span className="arrowUp" id="upArrow" onClick={scrollUp}>▲</span>
              <span className="arrowDown" id="downArrow" onClick={scrollDown}>▼</span>
              <div className="mobile-bottom-navs">
                <a href="#archive" className="archive navs">Archive</a>
                <a href="#fast" className="fast navs is-centered">Fast</a>
                <a href="#full" className="full navs">Full</a>
              </div>
              <Modal />
            </div>
            <footer className="footer">
              <div className="content has-text-centered">
                <div className="columns">
                  <div className="level is-mobile column is-4-desktop is-offset-4">
                    <div className="level-left-mobile has-text-centered">
                      <figure className="image is-128x128 bitmex-logo level-item">
                        <img className="" src="https://blog.bitmex.com/wp-content/uploads/2018/11/BitMEX-Research-Logo-Color-RGB.png" alt="Bitmex Logo"/>
                      </figure>
                    </div>
                    <div className="level-right-mobile has-text-centered">
                      <figure className="image is-156x156 tokenanalyst-logo level-item">
                        <img className="" src="/images/Screenshot 2019-03-04 at 16.27.22.png" alt="TokenAnalyst Logo"/>
                      </figure>
                    </div>
                  </div>
                </div>
                <p className="disclaimer">
                This material should not be the basis for making investment
                decisions, nor be construed as a recommendation to engage in
                investment transactions, and is not related to the provision
                of advisory services regarding investment, tax, legal,
                financial, accounting, consulting or any other related
                services, nor is a recommendation being provided to buy, sell
                 or purchase any good or product.
                The information and data herein have been obtained from sources
                 we believe to be reliable. Such information has not been
                verified and we make no representation or warranty as to its
                accuracy, completeness or correctness. The website is
                produced by BitMEX Research and TokenAnalyst, neither
                BitMEX, TokenAnalyst nor any other entity, will be liable
                whatsoever for any direct or consequential loss arising
                from the use of this publication/communication or its contents.
                </p>
              </div>
            </footer>
          </div>
      </section>
    )
  }
}
export default Main;
