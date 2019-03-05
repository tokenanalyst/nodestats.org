import React from "react";

import Row from "./Row";
import Modal from "./Modal";
import {
  scrollDown,
  clickTooltip,
  scrollFunction,
  scrollFunction2,
  scrollUp
} from "../lib/navigationFunctions";

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
            <div className="page-divide" />
            <div  className="panel columns column is-10 is-offset-1 is-mobile">
              <div className="column is-6">
                <span className="content has-text-centered company-name">
                  <h2 className="name">
                    <span className="company">Parity</span>
                    <span
                      className="icon has-text-info company-icon tooltip"
                      onClick={clickTooltip}
                      id="tooltip"
                    >
                      <p className="tooltiptext">Tooltip text</p>
                      <i className="fas fa-info-circle" />
                    </span>
                  </h2>
                </span>
                <div className="content has-text-centered node-type">
                  <p>Full Node</p>
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
              </div>
              <div className="column is-6 geth">
                <span className="content has-text-centered company-name">
                  <h2 className="name">
                    <span className="company">Geth</span>
                    <span
                      className="icon company-icon has-text-info tooltip"
                      onClick={clickTooltip}
                    >
                      <p className="tooltiptext">Tooltip text</p>
                      <i className="fas fa-info-circle" />
                    </span>
                  </h2>
                </span>
                <div className="content has-text-centered node-type not-used">
                  <p id="full">Full Node</p>
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
              </div>
            </div>
          </div>
          <br />
          <div className="columns">
            <div className="panel columns column is-10 is-offset-1 is-mobile">
              <div className="column is-6">
                <span className="content has-text-centered company-name">
                  <h2 className="name">
                    <span className="company">Parity</span>
                    <span
                      className="icon has-text-info company-icon tooltip"
                      onClick={clickTooltip}
                      id="tooltip"
                    >
                      <p className="tooltiptext">Tooltip text</p>
                      <i className="fas fa-info-circle" />
                    </span>
                  </h2>
                </span>
                <div className="content has-text-centered node-type">
                  <p id="fast">Fast Node</p>
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
              </div>
              <div className="column is-6">
                <span className="content has-text-centered company-name">
                  <h2 className="name">
                    <span className="company">Geth</span>
                    <span
                      className="icon company-icon has-text-info tooltip"
                      onClick={clickTooltip}
                    >
                      <p className="tooltiptext">Tooltip text</p>
                      <i className="fas fa-info-circle" />
                    </span>
                  </h2>
                </span>
                <div className="content has-text-centered node-type not-used">
                  <p className="white">Fast Node</p>
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
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="panel columns column is-10 is-offset-1 is-mobile">
              <div className="column is-6">
                <span className="content has-text-centered company-name">
                  <h2 className="name">
                    <span className="company">Parity</span>
                    <span
                      className="icon has-text-info company-icon tooltip"
                      onClick={clickTooltip}
                      id="tooltip"
                    >
                      <p className="tooltiptext">Tooltip text</p>
                      <i className="fas fa-info-circle" />
                    </span>
                  </h2>
                </span>
                <div className="content has-text-centered node-type">
                  <p id="archive">Archive Node</p>
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
            <Modal />
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
                        src="/images/Screenshot 2019-03-04 at 16.27.22.png"
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
