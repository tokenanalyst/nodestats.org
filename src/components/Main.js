import React from "react";
import talogo from '../images/talogo.png'
import Row from "./Row";
import {
  scrollDown,
  clickTooltip,
  scrollFunction,
  scrollFunction2,
  scrollUp
} from "../lib/navigationFunctions";

import ReactGA from 'react-ga';
import {
  ParityFullModal,
  GethFullModal,
  ParityFastModal,
  GethFastModal,
  ParityArchiveModal
} from "./Modal";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {
    ReactGA.initialize('UA-113322596-5');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  fullParityModal() {
    const parityFullModal = document.getElementById("parityFullModal");
    parityFullModal.classList.toggle("is-active");
  }
  fullGethModal() {
    const gethFullModal = document.getElementById("gethFullModal");
    gethFullModal.classList.toggle("is-active");
  }
  fastParityModal() {
    const parityFastModal = document.getElementById("parityFastModal");
    parityFastModal.classList.toggle("is-active");
  }
  fastGethModal() {
    const gethFastModal = document.getElementById("gethFastModal");
    gethFastModal.classList.toggle("is-active");
  }
  archiveParityModal() {
    const parityArchiveModal = document.getElementById("parityArchiveModal");
    parityArchiveModal.classList.toggle("is-active");

  }

  render() {
    return (
      <section className="">
        <div>
          <div className="columns">
            <div className="page-divide" />
            <div className="columns column is-10 is-offset-1 is-mobile">
              <div className="column is-6 half">
                <span className="content has-text-centered company-name">
                  <h2 className="name">
                    <span className="company">Parity</span>
                  </h2>
                </span>
                <div className="content has-text-centered node-type">
                  <span>Full Node</span>
                  <span
                    className="company-icon icon tooltip"
                    onClick={this.fullParityModal}
                    id="tooltip"
                  >
                    <span className=""
                    >
                      <ParityFullModal />
                    </span>
                    <i className="fas fa-question-circle" />
                  </span>
                </div>
                <div className="columns is-mobile has-text-centered">
                  <div className="column is-one-third is-one-quarter-desktop table-header">
                    <h3>24hr avg</h3>
                  </div>
                  <div className="column is-one-third table-header">
                    <h3>Description</h3>
                  </div>
                  <div className="column is-one-third table-header">
                    <h3>1hr avg</h3>
                  </div>
                </div>
                <Row
                  metricurl="/parity-full-sync-24h"
                  charturl="/parity-full-sync-24h"
                  text="% of time in sync"
                  datatype="sync%"
                />
                <Row
                  metricurl="/parity-full-cpu-1h-avg"
                  charturl="/parity-full-cpu-24h"
                  text="CPU Usage"
                  datatype="cpu"
                />
                <Row
                  text="Memory (RAM) Usage"
                  metricurl="/parity-full-ram-1h-avg"
                  charturl="/parity-full-ram-24h"
                  datatype="ram"
                />
                <Row
                  text="# of Peers"
                  metricurl="/parity-full-peers-1h-avg"
                  charturl="/parity-full-peers-24h"
                  datatype="peers"
                />
                <Row
                  text="Chain data size"
                  metricurl="/parity-full-disk-1h-avg"
                  charturl="/parity-full-disk-24h"
                  datatype="disk"
                />
                <Row
                  text="Upstream"
                  metricurl="/parity-full-nettx-1h-avg"
                  charturl="/parity-full-nettx-24h"
                  datatype="nettx"
                />
                <Row
                  text="Downstream"
                  metricurl="/parity-full-netrx-1h-avg"
                  charturl="/parity-full-netrx-24h"
                  datatype="netrx"
                />
                <Row
                  metricurl="/parity-full-current-24h"
                  conflicturl="/geth-full-current-24h"
                  text="% of time in conflict"
                  datatype="conflict%"
                />
              </div>
              <div className="column is-6 half">
                <span className="content has-text-centered company-name">
                  <h2 className="name">
                    <span className="company">Geth</span>
                  </h2>
                </span>
                <div className="content has-text-centered node-type not-used">
                  <span id="full">Full Node</span>
                  <span
                    className="icon company-icon tooltip"
                    onClick={this.fullGethModal}
                  >
                    <span>
                      <GethFullModal />
                    </span>

                    <i className="fas fa-question-circle" />
                  </span>
                </div>
                <div className="columns is-mobile">
                  <div className="column is-one-third table-header">
                    <h3>1hr avg</h3>
                  </div>
                  <div className="column is-one-third table-header">
                    <h3>Description</h3>
                  </div>
                  <div className="column is-one-third-desktop table-header">
                    <h3>24hr avg</h3>
                  </div>
                </div>
                <Row
                  metricurl="/geth-full-sync-24h"
                  charturl="/geth-full-sync-24h"
                  text="% of time in sync"
                  reverseOrder="true"
                  datatype="sync%"
                />
                <Row
                  metricurl="/geth-full-cpu-1h-avg"
                  charturl="/geth-full-cpu-24h"
                  text="CPU Usage"
                  reverseOrder="true"
                  datatype="cpu"
                />
                <Row
                  text="Memory (RAM) Usage"
                  metricurl="/geth-full-ram-1h-avg"
                  charturl="/geth-full-ram-24h"
                  reverseOrder="true"
                  datatype="ram"
                />
                <Row
                  text="# of Peers"
                  metricurl="/geth-full-peers-1h-avg"
                  charturl="/geth-full-peers-24h"
                  reverseOrder="true"
                  datatype="peers"
                />
                <Row
                  text="Chain data size"
                  metricurl="/geth-full-disk-1h-avg"
                  charturl="/geth-full-disk-24h"
                  reverseOrder="true"
                  datatype="disk"
                />
                <Row
                  text="Upstream"
                  metricurl="/geth-full-nettx-1h-avg"
                  charturl="/geth-full-nettx-24h"
                  reverseOrder="true"
                  datatype="nettx"
                />
                <Row
                  text="Downstream"
                  metricurl="/geth-full-netrx-1h-avg"
                  charturl="/geth-full-netrx-24h"
                  reverseOrder="true"
                  datatype="netrx"
                />
                <Row
                  metricurl="/geth-full-current-24h"
                  conflicturl="/parity-full-current-24h"
                  text="% of time in conflict"
                  reverseOrder="true"
                  datatype="conflict%"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="columns">
            <div className="columns column is-10 is-offset-1 is-mobile">
              <div className="column is-6">
                <span className="content has-text-centered company-name">
                  <h2 className="name">
                    <span className="company">Parity</span>
                  </h2>
                </span>
                <div className="content has-text-centered node-type">
                  <span id="fast">Fast Node</span>
                  <span
                    className="company-icon tooltip"
                    onClick={this.fastParityModal}
                  >
                    <ParityFastModal />
                    <div className=""></div>
                    <i className="fas fa-question-circle node-circle" />
                  </span>
                </div>
                <div className="columns is-mobile">
                  <div className="column is-one-third is-one-quarter-desktop table-header">
                    <h3>24hr avg</h3>
                  </div>
                  <div className="column is-one-third table-header">
                    <h3>Description</h3>
                  </div>
                  <div className="column is-one-third table-header">
                    <h3>1hr avg</h3>
                  </div>
                </div>
                <Row
                  metricurl="/parity-fast-sync-24h"
                  charturl="/parity-fast-sync-24h"
                  text="% of time in sync"
                  datatype="sync%"
                />
                <Row
                  metricurl="/parity-fast-cpu-1h-avg"
                  charturl="/parity-fast-cpu-24h"
                  text="CPU Usage"
                  datatype="cpu"
                />
                <Row
                  text="Memory (RAM) Usage"
                  metricurl="/parity-fast-ram-1h-avg"
                  charturl="/parity-fast-ram-24h"
                  datatype="ram"
                />
                <Row
                  text="# of Peers"
                  metricurl="/parity-fast-peers-1h-avg"
                  charturl="/parity-fast-peers-24h"
                  datatype="peers"
                />
                <Row
                  text="Chain data size"
                  metricurl="/parity-fast-disk-1h-avg"
                  charturl="/parity-fast-disk-24h"
                  datatype="disk"
                />
                <Row
                  text="Upstream"
                  metricurl="/parity-fast-nettx-1h-avg"
                  charturl="/parity-fast-nettx-24h"
                  datatype="nettx"
                />
                <Row
                  text="Downstream"
                  metricurl="/parity-fast-netrx-1h-avg"
                  charturl="/parity-fast-netrx-24h"
                  datatype="netrx"
                />
                <Row
                  metricurl="/parity-fast-current-24h"
                  conflicturl="/geth-fast-current-24h"
                  text="% of time in conflict"
                  datatype="conflict%"
                />
              </div>
              <div className="column is-6">
                <span className="content has-text-centered company-name">
                  <h2 className="name">
                    <span className="company">Geth</span>
                  </h2>
                </span>
                <div className="content has-text-centered node-type not-used">
                  <span className="white">Fast Node</span>
                  <span
                    className="company-icon tooltip"
                    onClick={this.fastGethModal}
                  >
                    <GethFastModal />

                    <i className="fas fa-question-circle" />
                  </span>
                </div>
                <div className="columns is-mobile">
                  <div className="column is-one-third table-header">
                    <h3>1hr avg</h3>
                  </div>
                  <div className="column is-one-third table-header">
                    <h3>Description</h3>
                  </div>
                  <div className="column is-one-third-desktop table-header">
                    <h3>24hr avg</h3>
                  </div>
                </div>
                <Row
                  metricurl="/geth-fast-sync-24h"
                  charturl="/geth-fast-sync-24h"
                  text="% of time in sync"
                  reverseOrder="true"
                  datatype="sync%"
                />
                <Row
                  metricurl="/geth-fast-cpu-1h-avg"
                  charturl="/geth-fast-cpu-24h"
                  text="CPU Usage"
                  reverseOrder="true"
                  datatype="cpu"
                />
                <Row
                  text="Memory (RAM) Usage"
                  metricurl="/geth-fast-ram-1h-avg"
                  charturl="/geth-fast-ram-24h"
                  reverseOrder="true"
                  datatype="ram"
                />
                <Row
                  text="# of Peers"
                  metricurl="/geth-fast-peers-1h-avg"
                  charturl="/geth-fast-peers-24h"
                  reverseOrder="true"
                  datatype="peers"
                />
                <Row
                  text="Chain data size"
                  metricurl="/geth-fast-disk-1h-avg"
                  charturl="/geth-fast-disk-24h"
                  reverseOrder="true"
                  datatype="disk"
                />
                <Row
                  text="Upstream"
                  metricurl="/geth-fast-nettx-1h-avg"
                  charturl="/geth-fast-nettx-24h"
                  reverseOrder="true"
                  datatype="nettx"
                />
                <Row
                  text="Downstream"
                  metricurl="/geth-fast-netrx-1h-avg"
                  charturl="/geth-fast-netrx-24h"
                  reverseOrder="true"
                  datatype="netrx"
                />
                <Row
                  metricurl="/geth-fast-current-24h"
                  conflicturl="/parity-fast-current-24h"
                  text="% of time in conflict"
                  reverseOrder="true"
                  datatype="conflict%"
                />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="columns column is-10 is-offset-1 is-mobile">
              <div className="column is-6">
                <span className="content has-text-centered company-name">
                  <h2 className="name">
                    <span className="company">Parity</span>
                  </h2>
                </span>
                <div className="content has-text-centered node-type">
                  <span id="archive">Archive Node</span>
                  <span
                    className="company-icon tooltip"
                    onClick={this.archiveParityModal}
                    id="tooltip"
                  >
                    <ParityArchiveModal />

                    <i className="fas fa-question-circle" />
                  </span>
                </div>
                <div className="columns is-mobile">
                  <div className="column is-one-third is-one-quarter-desktop table-header">
                    <h3>24hr avg</h3>
                  </div>
                  <div className="column is-one-third table-header">
                    <h3>Description</h3>
                  </div>
                  <div className="column is-one-third table-header">
                    <h3>1hr avg</h3>
                  </div>
                </div>
                <Row
                  metricurl="/parity-archive-sync-24h"
                  charturl="/parity-archive-sync-24h"
                  text="% of time in sync"
                  datatype="sync%"
                />
                <Row
                  metricurl="/parity-archive-cpu-1h-avg"
                  charturl="/parity-archive-cpu-24h"
                  text="CPU Usage"
                  datatype="cpu"
                />
                <Row
                  text="Memory (RAM) Usage"
                  metricurl="/parity-archive-ram-1h-avg"
                  charturl="/parity-archive-ram-24h"
                  datatype="ram"
                />
                <Row
                  text="# of Peers"
                  metricurl="/parity-archive-peers-1h-avg"
                  charturl="/parity-archive-peers-24h"
                  datatype="peers"
                />
                <Row
                  text="Chain data size"
                  metricurl="/parity-archive-disk-1h-avg"
                  charturl="/parity-archive-disk-24h"
                  datatype="disk"
                />
                <Row
                  text="Upstream"
                  metricurl="/parity-archive-nettx-1h-avg"
                  charturl="/parity-archive-nettx-24h"
                  datatype="nettx"
                />
                <Row
                  text="Downstream"
                  metricurl="/parity-archive-netrx-1h-avg"
                  charturl="/parity-archive-netrx-24h"
                  datatype="netrx"
                />
              </div>
            </div>
            <span className="arrowUp" id="upArrow" onClick={scrollUp}>
              ▲
            </span>
            <span className="arrowDown" id="downArrow" onClick={scrollDown}>
              ▼
            </span>
            <div className="mobile-bottom-navs">
              <a href="#archive" className="archive navs">
                Archive
              </a>
              <a href="#fast" className="fast navs is-centered">
                Fast
              </a>
              <a href="#full" className="full navs">
                Full
              </a>
            </div>

          </div>
          <footer className="footer">
            <div className="content has-text-centered">
              <div className="columns">
                <div className="level is-mobile column is-4-desktop is-offset-4">
                  <div className="level-left-mobile has-text-centered">
                    <figure className="image is-128x128 bitmex-logo level-item">
                      <img
                        className=""
                        src="https://blog.bitmex.com/wp-content/uploads/2018/11/BitMEX-Research-Logo-Color-RGB.png"
                        alt="Bitmex Logo"
                      />
                    </figure>
                  </div>
                  <div className="level-right-mobile has-text-centered">
                    <figure className="image is-156x156 tokenanalyst-logo level-item">
                      <img
                        className=""
                        src={talogo}
                        alt="TokenAnalyst Logo"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <p className="disclaimer">
                This material should not be the basis for making investment
                decisions, nor be construed as a recommendation to engage in
                investment transactions, and is not related to the provision of
                advisory services regarding investment, tax, legal, financial,
                accounting, consulting or any other related services, nor is a
                recommendation being provided to buy, sell or purchase any good
                or product. The information and data herein have been obtained
                from sources we believe to be reliable. Such information has not
                been verified and we make no representation or warranty as to
                its accuracy, completeness or correctness. The website is
                produced by BitMEX Research and TokenAnalyst, neither BitMEX,
                TokenAnalyst nor any other entity, will be liable whatsoever for
                any direct or consequential loss arising from the use of this
                publication/communication or its contents.
              </p>
            </div>
          </footer>
        </div>
      </section>
    );
  }
}
export default Main;
