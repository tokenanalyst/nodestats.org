import React from 'react';
import axios from 'axios';
import ParityRow from './ParityRow';
import GethRow from './GethRow';
import Modal from './Modal';
import {scrollDown, clickTooltip, scrollFunction, scrollFunction2, scrollUp} from '../lib/navigationFunctions';

const baseUrl = 'http://lb-api-2c97d9e50f6a4e75.elb.eu-west-2.amazonaws.com'
const pFast1Hr = ['/parity-fast-cpu-1h-avg', '/parity-fast-ram-1h-avg', '/parity-fast-disk-1h-avg', '/parity-fast-peers-1h-avg', '/parity-fast-nettx-1h-avg', '/parity-fast-netrx-1h-avg', '/parity-fast-sync-1h-avg'];
const pFull1Hr = ['/parity-full-cpu-1h-avg', '/parity-full-ram-1h-avg', '/parity-full-disk-1h-avg', '/parity-full-peers-1h-avg', '/parity-full-nettx-1h-avg', '/parity-full-netrx-1h-avg', '/parity-full-sync-1h-afull'];
const pFast24Hr = ['/parity-fast-cpu-24h', '/parity-fast-ram-24h', '/parity-fast-disk-24h', '/parity-fast-peers-24h', '/parity-fast-nettx-24h', '/parity-fast-netrx-24h', '/parity-fast-sync-24h'];
const gFast1Hr = ['/geth-fast-cpu-1h-avg', '/geth-fast-ram-1h-avg', '/geth-fast-disk-1h-avg', '/geth-fast-peers-1h-avg', '/geth-fast-nettx-1h-avg', '/geth-fast-netrx-1h-avg', '/geth-fast-sync-1h-avg'];
const gFast24Hr = ['/geth-fast-cpu-24h', '/geth-fast-ram-24h', '/geth-fast-disk-24h', '/geth-fast-peers-24h', '/geth-fast-nettx-24h', '/geth-fast-netrx-24h', '/geth-fast-sync-24h'];

// http://lb-api-2c97d9e50f6a4e75.elb.eu-west-2.amazonaws.com/parity-full-netrx-1h-avg

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var that = this;
    axios.all([
      axios.get(`${baseUrl}${pFast1Hr[0]}`),
      axios.get(`${baseUrl}${pFast1Hr[1]}`),
      axios.get(`${baseUrl}${pFast1Hr[2]}`),
      axios.get(`${baseUrl}${pFast1Hr[3]}`),
      axios.get(`${baseUrl}${pFast1Hr[4]}`),
      axios.get(`${baseUrl}${pFast1Hr[5]}`)
    ])
      .then(axios.spread(function (pFastCpu, pFastRam, pFastDisk, pFastPeer, pFastNettx, pFastNettrx) {
        var fastCpuData = pFastCpu.data || [];
        var fastRamData = pFastRam.data || [];
        var fastDiskData = pFastDisk.data || [];
        var fastPeerData = pFastPeer.data || [];
        var fastNettxData = pFastNettx.data || [];
        var fastNettrxData = pFastNettrx.data || [];
        var pFast1Hr = fastCpuData.concat(fastRamData).concat(fastDiskData).concat(fastPeerData).concat(fastNettxData).concat(fastNettrxData);
        that.setState({ pFast1Hr: pFast1Hr })
      }))
      .catch(error => console.log(error));
    axios.all([
      axios.get(`${baseUrl}${gFast1Hr[0]}`),
      axios.get(`${baseUrl}${gFast1Hr[1]}`),
      axios.get(`${baseUrl}${gFast1Hr[2]}`),
      axios.get(`${baseUrl}${gFast1Hr[3]}`),
      axios.get(`${baseUrl}${gFast1Hr[4]}`),
      axios.get(`${baseUrl}${gFast1Hr[5]}`)
    ])
      .then(axios.spread(function (gFastCpu, gFastRam, gFastDisk, gFastPeer, gFastNettx, gFastNettrx) {
        var fastCpuData = gFastCpu.data || [];
        var fastRamData = gFastRam.data || [];
        var fastDiskData = gFastDisk.data || [];
        var fastPeerData = gFastPeer.data || [];
        var fastNettxData = gFastNettx.data || [];
        var fastNettrxData = gFastNettrx.data || [];
        var gFast1Hr = fastCpuData.concat(fastRamData).concat(fastDiskData).concat(fastPeerData).concat(fastNettxData).concat(fastNettrxData);
        that.setState({ gFast1Hr: gFast1Hr })
      }))
      .catch(error => console.log(error));
    axios.all([
      axios.get(`${baseUrl}${pFull1Hr[0]}`),
      axios.get(`${baseUrl}${pFull1Hr[1]}`),
      axios.get(`${baseUrl}${pFull1Hr[2]}`),
      axios.get(`${baseUrl}${pFull1Hr[3]}`),
      axios.get(`${baseUrl}${pFull1Hr[4]}`),
      axios.get(`${baseUrl}${pFull1Hr[5]}`)
    ])
      .then(axios.spread(function (pFullCpu, pFullRam, pFullDisk, pFullPeer, pFullNettx, pFullNettrx) {
        var fullCpuData = pFullCpu.data || [];
        var fullRamData = pFullRam.data || [];
        var fullDiskData = pFullDisk.data || [];
        var fullPeerData = pFullPeer.data || [];
        var fullNettxData = pFullNettx.data || [];
        var fullNettrxData = pFullNettrx.data || [];
        var pFull1Hr = fullCpuData.concat(fullRamData).concat(fullDiskData).concat(fullPeerData).concat(fullNettxData).concat(fullNettrxData);
        that.setState({ pFull1Hr: pFull1Hr })
      }))
      .catch(error => console.log(error));
    axios.all([
      axios.get(`${baseUrl}${pFast24Hr[0]}`),
      axios.get(`${baseUrl}${pFast24Hr[1]}`),
      axios.get(`${baseUrl}${pFast24Hr[2]}`),
      axios.get(`${baseUrl}${pFast24Hr[3]}`),
      axios.get(`${baseUrl}${pFast24Hr[4]}`),
      axios.get(`${baseUrl}${pFast24Hr[5]}`)
    ])
      .then(axios.spread(function (p24FastCpu, p24FastRam, p24FastDisk, p24FastPeer, p24FastNettx, p24FastNettrx) {
        var fastCpuData = p24FastCpu.data || [];
        var fastRamData = p24FastRam.data || [];
        var fastDiskData = p24FastDisk.data || [];
        var fastPeerData = p24FastPeer.data || [];
        var fastNettxData = p24FastNettx.data || [];
        var fastNettrxData = p24FastNettrx.data || [];
        var parityFast24Hr = {fastCpuData ,fastRamData, fastDiskData, fastPeerData, fastNettxData, fastNettrxData};
        that.setState({ parityFast24Hr: parityFast24Hr })
      }))
      .catch(error => console.log(error));
    axios.all([
      axios.get(`${baseUrl}${gFast24Hr[0]}`),
      axios.get(`${baseUrl}${gFast24Hr[1]}`),
      axios.get(`${baseUrl}${gFast24Hr[2]}`),
      axios.get(`${baseUrl}${gFast24Hr[3]}`),
      axios.get(`${baseUrl}${gFast24Hr[4]}`),
      axios.get(`${baseUrl}${gFast24Hr[5]}`)
    ])
      .then(axios.spread(function (g24FastCpu, g24FastRam, g24FastDisk, g24FastPeer, g24FastNettx, g24FastNettrx) {
        var fastCpuData = g24FastCpu.data || [];
        var fastRamData = g24FastRam.data || [];
        var fastDiskData = g24FastDisk.data || [];
        var fastPeerData = g24FastPeer.data || [];
        var fastNettxData = g24FastNettx.data || [];
        var fastNettrxData = g24FastNettrx.data || [];
        var gethFast24Hr = {fastCpuData ,fastRamData, fastDiskData, fastPeerData, fastNettxData, fastNettrxData};
        that.setState({ gethFast24Hr: gethFast24Hr })
      }))
      .catch(error => console.log(error));
  }
  // axios.get(`http://lb-api-2c97d9e50f6a4e75.elb.eu-west-2.amazonaws.com${fast1Hr[0]}`)
  //   .then(result => this.setState({ stats: result.data }))
  //   .then(window.onscroll = function() {
  //     scrollFunction()
  //     scrollFunction2()
  //   })
  // }


  render() {
    const pFast = this.state.pFast1Hr;
    const pFull = this.state.pFull1Hr;
    const gFast = this.state.gFast1Hr;
    const pFast24Hr = this.state.parityFast24Hr;
    const gFast24Hr = this.state.gethFast24Hr;
    // const stats1 = this.state.stats1;
    console.log('pFast is', this.props, pFast, gFast, pFull, gFast24Hr)
    return (
      <section>
        {pFast && gFast && pFast24Hr && gFast24Hr
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
                  <ParityRow pData={pFast[0].mean} gData={gFast} text="Mins not at tip of the chain"/>
                  <ParityRow pData={pFast[0].mean} gData={gFast} text="CPU Usage"/>
                  <ParityRow pData={pFast[1].mean} gData={gFast} text="Memory (RAM) Usage"/>
                  <ParityRow pData={pFast[3].mean} gData={gFast} text="# of Peers"/>
                  <ParityRow pData={pFast[2].mean} gData={gFast} text="Chain data size"/>
                  <ParityRow pData={pFast[4].mean} gData={gFast} text="Upstream"/>
                  <ParityRow pData={pFast[5].mean} gData={gFast} text="Downstream"/>
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
                  <GethRow pData={pFast[0].mean} gData={gFast} text="Mins not at tip of the chain"/>
                  <GethRow pData={pFast[0].mean} gData={gFast} text="CPU Usage"/>
                  <GethRow pData={pFast[1].mean} gData={gFast} text="Memory (RAM) Usage"/>
                  <GethRow pData={pFast[3].mean} gData={gFast} text="# of Peers"/>
                  <GethRow pData={pFast[2].mean} gData={gFast} text="Chain data size"/>
                  <GethRow pData={pFast[4].mean} gData={gFast} text="Upstream"/>
                  <GethRow pData={pFast[5].mean} gData={gFast} text="Downstream"/>
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
                  <ParityRow pData={pFast[0].mean} gData={gFast} text="Mins not at tip of the chain"/>
                  <ParityRow pData={pFast[0].mean} gData={gFast} chartData={pFast24Hr.fastCpuData} text="CPU Usage"/>
                  <ParityRow pData={pFast[1].mean} gData={gFast} chartData={pFast24Hr.fastRamData} text="Memory (RAM) Usage"/>
                  <ParityRow pData={pFast[3].mean} gData={gFast} chartData={pFast24Hr.fastPeerData} text="# of Peers"/>
                  <ParityRow pData={pFast[2].mean} gData={gFast} chartData={pFast24Hr.fastDiskData} text="Chain data size"/>
                  <ParityRow pData={pFast[4].mean} gData={gFast} chartData={pFast24Hr.fastNettxData} text="Upstream"/>
                  <ParityRow pData={pFast[5].mean} gData={gFast} chartData={pFast24Hr.fastNettrxData} text="Downstream"/>
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
                  <GethRow pData={pFast[0].mean} gData={gFast} text="Mins not at tip of the chain"/>
                  <GethRow pData={pFast[0].mean} gData={gFast} chartData={gFast24Hr.fastCpuData} text="CPU Usage"/>
                  <GethRow pData={pFast[1].mean} gData={gFast} chartData={gFast24Hr.fastRamData} text="Memory (RAM) Usage"/>
                  <GethRow pData={pFast[3].mean} gData={gFast} chartData={gFast24Hr.fastPeerData} text="# of Peers"/>
                  <GethRow pData={pFast[2].mean} gData={gFast} chartData={gFast24Hr.fastDiskData} text="Chain data size"/>
                  <GethRow pData={pFast[4].mean} gData={gFast} chartData={gFast24Hr.fastNettxData} text="Upstream"/>
                  <GethRow pData={pFast[5].mean} gData={gFast} chartData={gFast24Hr.fastNettrxData} text="Downstream"/>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="columns column is-10 is-offset-1 is-mobile">
                <div className="column is-6">
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
