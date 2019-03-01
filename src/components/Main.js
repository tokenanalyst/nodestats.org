import React from 'react';
import axios from 'axios';
import ParityRow from './ParityRow';
import GethRow from './GethRow';
import Modal from './Modal';
import {scrollDown, clickTooltip, scrollFunction, scrollFunction2, scrollUp} from '../lib/navigationFunctions';

const baseUrl = 'https://nodestats.tokenanalyst.io'
const pFast1Hr = ['/parity-fast-cpu-1h-avg', '/parity-fast-ram-1h-avg', '/parity-fast-disk-1h-avg', '/parity-fast-peers-1h-avg', '/parity-fast-nettx-1h-avg', '/parity-fast-netrx-1h-avg', '/parity-fast-sync-1h-avg'];
const pFull1Hr = ['/parity-full-cpu-1h-avg', '/parity-full-ram-1h-avg', '/parity-full-disk-1h-avg', '/parity-full-peers-1h-avg', '/parity-full-nettx-1h-avg', '/parity-full-netrx-1h-avg', '/parity-full-sync-1h-afull'];
const pFast24Hr = ['/parity-fast-cpu-24h', '/parity-fast-ram-24h', '/parity-fast-disk-24h', '/parity-fast-peers-24h', '/parity-fast-nettx-24h', '/parity-fast-netrx-24h', '/parity-fast-sync-24h'];
const pFull24Hr = ['/parity-full-cpu-24h', '/parity-full-ram-24h', '/parity-full-disk-24h', '/parity-full-peers-24h', '/parity-full-nettx-24h', '/parity-full-netrx-24h', '/parity-full-sync-24h'];
const gFast1Hr = ['/geth-fast-cpu-1h-avg', '/geth-fast-ram-1h-avg', '/geth-fast-disk-1h-avg', '/geth-fast-peers-1h-avg', '/geth-fast-nettx-1h-avg', '/geth-fast-netrx-1h-avg', '/geth-fast-sync-1h-avg'];
const gFull1Hr = ['/geth-full-cpu-1h-avg', '/geth-full-ram-1h-avg', '/geth-full-disk-1h-avg', '/geth-full-peers-1h-avg', '/geth-full-nettx-1h-avg', '/geth-full-netrx-1h-avg', '/geth-full-sync-1h-afull'];
const gFast24Hr = ['/geth-fast-cpu-24h', '/geth-fast-ram-24h', '/geth-fast-disk-24h', '/geth-fast-peers-24h', '/geth-fast-nettx-24h', '/geth-fast-netrx-24h', '/geth-fast-sync-24h'];
const gFull24Hr = ['/geth-full-cpu-24h', '/geth-full-ram-24h', '/geth-full-disk-24h', '/geth-full-peers-24h', '/geth-full-nettx-24h', '/geth-full-netrx-24h', '/geth-full-sync-24h'];
const pArchive1Hr = ['/parity-archive-cpu-1h-avg', '/parity-archive-ram-1h-avg', '/parity-archive-disk-1h-avg', '/parity-archive-peers-1h-avg', '/parity-archive-nettx-1h-avg', '/parity-archive-netrx-1h-avg', '/parity-archive-sync-1h-avg'];
const pArchive24Hr = ['/parity-archive-cpu-24h', '/parity-archive-ram-24h', '/parity-archive-disk-24h', '/parity-archive-peers-24h', '/parity-archive-nettx-24h', '/parity-archive-netrx-24h', '/parity-archive-sync-24h'];


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
      axios.get(`${baseUrl}${gFull1Hr[0]}`),
      axios.get(`${baseUrl}${gFull1Hr[1]}`),
      axios.get(`${baseUrl}${gFull1Hr[2]}`),
      axios.get(`${baseUrl}${gFull1Hr[3]}`),
      axios.get(`${baseUrl}${gFull1Hr[4]}`),
      axios.get(`${baseUrl}${gFull1Hr[5]}`)
    ])
      .then(axios.spread(function (gFullCpu, gFullRam, gFullDisk, gFullPeer, gFullNettx, gFullNettrx) {
        var fullCpuData = gFullCpu.data || [];
        var fullRamData = gFullRam.data || [];
        var fullDiskData = gFullDisk.data || [];
        var fullPeerData = gFullPeer.data || [];
        var fullNettxData = gFullNettx.data || [];
        var fullNettrxData = gFullNettrx.data || [];
        var gFull1Hr = fullCpuData.concat(fullRamData).concat(fullDiskData).concat(fullPeerData).concat(fullNettxData).concat(fullNettrxData);
        that.setState({ gFull1Hr: gFull1Hr })
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
    axios.all([
      axios.get(`${baseUrl}${pFull24Hr[0]}`),
      axios.get(`${baseUrl}${pFull24Hr[1]}`),
      axios.get(`${baseUrl}${pFull24Hr[2]}`),
      axios.get(`${baseUrl}${pFull24Hr[3]}`),
      axios.get(`${baseUrl}${pFull24Hr[4]}`),
      axios.get(`${baseUrl}${pFull24Hr[5]}`)
    ])
      .then(axios.spread(function (p24FullCpu, p24FullRam, p24FullDisk, p24FullPeer, p24FullNettx, p24FullNettrx) {
        var fullCpuData = p24FullCpu.data || [];
        var fullRamData = p24FullRam.data || [];
        var fullDiskData = p24FullDisk.data || [];
        var fullPeerData = p24FullPeer.data || [];
        var fullNettxData = p24FullNettx.data || [];
        var fullNettrxData = p24FullNettrx.data || [];
        var parityFull24Hr = {fullCpuData ,fullRamData, fullDiskData, fullPeerData, fullNettxData, fullNettrxData};
        that.setState({ parityFull24Hr: parityFull24Hr })
      }))
      .catch(error => console.log(error));
    axios.all([
      axios.get(`${baseUrl}${gFull24Hr[0]}`),
      axios.get(`${baseUrl}${gFull24Hr[1]}`),
      axios.get(`${baseUrl}${gFull24Hr[2]}`),
      axios.get(`${baseUrl}${gFull24Hr[3]}`),
      axios.get(`${baseUrl}${gFull24Hr[4]}`),
      axios.get(`${baseUrl}${gFull24Hr[5]}`)
    ])
      .then(axios.spread(function (g24FullCpu, g24FullRam, g24FullDisk, g24FullPeer, g24FullNettx, g24FullNettrx) {
        var fullCpuData = g24FullCpu.data || [];
        var fullRamData = g24FullRam.data || [];
        var fullDiskData = g24FullDisk.data || [];
        var fullPeerData = g24FullPeer.data || [];
        var fullNettxData = g24FullNettx.data || [];
        var fullNettrxData = g24FullNettrx.data || [];
        var gethFull24Hr = {fullCpuData ,fullRamData, fullDiskData, fullPeerData, fullNettxData, fullNettrxData};
        that.setState({ gethFull24Hr: gethFull24Hr })
      }))
      .catch(error => console.log(error));
    axios.all([
      axios.get(`${baseUrl}${pArchive1Hr[0]}`),
      axios.get(`${baseUrl}${pArchive1Hr[1]}`),
      axios.get(`${baseUrl}${pArchive1Hr[2]}`),
      axios.get(`${baseUrl}${pArchive1Hr[3]}`),
      axios.get(`${baseUrl}${pArchive1Hr[4]}`),
      axios.get(`${baseUrl}${pArchive1Hr[5]}`)
    ])
      .then(axios.spread(function (pArchiveCpu, pArchiveRam, pArchiveDisk, pArchivePeer, pArchiveNettx, pArchiveNettrx) {
        var archiveCpuData = pArchiveCpu.data || [];
        var archiveRamData = pArchiveRam.data || [];
        var archiveDiskData = pArchiveDisk.data || [];
        var archivePeerData = pArchivePeer.data || [];
        var archiveNettxData = pArchiveNettx.data || [];
        var archiveNettrxData = pArchiveNettrx.data || [];
        var pArchive1Hr = archiveCpuData.concat(archiveRamData).concat(archiveDiskData).concat(archivePeerData).concat(archiveNettxData).concat(archiveNettrxData);
        that.setState({ pArchive1Hr: pArchive1Hr })
      }))
      .catch(error => console.log(error));
    axios.all([
      axios.get(`${baseUrl}${pArchive24Hr[0]}`),
      axios.get(`${baseUrl}${pArchive24Hr[1]}`),
      axios.get(`${baseUrl}${pArchive24Hr[2]}`),
      axios.get(`${baseUrl}${pArchive24Hr[3]}`),
      axios.get(`${baseUrl}${pArchive24Hr[4]}`),
      axios.get(`${baseUrl}${pArchive24Hr[5]}`)
    ])
      .then(axios.spread(function (p24ArchiveCpu, p24ArchiveRam, p24ArchiveDisk, p24ArchivePeer, p24ArchiveNettx, p24ArchiveNettrx) {
        var archiveCpuData = p24ArchiveCpu.data || [];
        var archiveRamData = p24ArchiveRam.data || [];
        var archiveDiskData = p24ArchiveDisk.data || [];
        var archivePeerData = p24ArchivePeer.data || [];
        var archiveNettxData = p24ArchiveNettx.data || [];
        var archiveNettrxData = p24ArchiveNettrx.data || [];
        var parityArchive24Hr = {archiveCpuData ,archiveRamData, archiveDiskData, archivePeerData, archiveNettxData, archiveNettrxData};
        that.setState({ parityArchive24Hr: parityArchive24Hr })
      }))
      .catch(error => console.log(error))
      .then(window.onscroll = function() {
        scrollFunction()
        scrollFunction2()
      })
  }

//   bytesToSize(bytes) {
//     var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//     var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
//     if (i === 0) return bytes + ' ' + sizes[i];
//     return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
// };


  render() {
    const pFast = this.state.pFast1Hr;
    const pFull = this.state.pFull1Hr;
    const gFast = this.state.gFast1Hr;
    const gFull = this.state.gFull1Hr;
    const pFast24Hr = this.state.parityFast24Hr;
    const gFast24Hr = this.state.gethFast24Hr;
    const pFull24Hr = this.state.parityFull24Hr
    const gFull24Hr = this.state.gethFull24Hr;
    const pArchive = this.state.pArchive1Hr;
    const pArchive24Hr = this.state.parityArchive24Hr;
    console.log('parchive is', gFast)

    return (
      <section>
        {pFast && gFast && pFast24Hr && gFast24Hr && gFull && gFull24Hr && pFull24Hr && pArchive && pArchive24Hr
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
                  <ParityRow text="Mins not at tip of the chain"/>
                  <ParityRow pData={pFull[0].mean} gData={gFull[0].mean} chartData={pFull24Hr.fullCpuData} text="CPU Usage" unit="%"/>
                  <ParityRow pData={pFull[1].mean} gData={gFull[1].mean} chartData={pFull24Hr.fullRamData} text="Memory (RAM) Usage" unit="%"/>
                  <ParityRow pData={pFull[3].mean} gData={gFull[3].mean} chartData={pFull24Hr.fullPeerData} text="# of Peers" unit=" Peers"/>
                  <ParityRow pData={pFull[2].mean} gData={gFull[2].mean} chartData={pFull24Hr.fullDiskData} text="Chain data size"/>
                  <ParityRow pData={pFull[4].mean} gData={gFull[4].mean} chartData={pFull24Hr.fullNettxData} text="Upstream" unit="Kb/s"/>
                  <ParityRow pData={pFull[5].mean} gData={gFull[5].mean} chartData={pFull24Hr.fullNettrxData} text="Downstream" unit="Kb/s"/>
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
                  <GethRow text="Mins not at tip of the chain"/>
                  <GethRow pData={pFull[0].mean} gData={gFull[0].mean} chartData={gFull24Hr.fullCpuData} text="CPU Usage" unit="%"/>
                  <GethRow pData={pFull[1].mean} gData={gFull[1].mean} chartData={gFull24Hr.fullRamData} text="Memory (RAM) Usage" unit="%"/>
                  <GethRow pData={pFull[3].mean} gData={gFull[3].mean} chartData={gFull24Hr.fullPeerData} text="# of Peers" unit=" Peers"/>
                  <GethRow pData={pFull[2].mean} gData={gFull[2].mean} chartData={gFull24Hr.fullDiskData} text="Chain data size"/>
                  <GethRow pData={pFull[4].mean} gData={gFull[4].mean} chartData={gFull24Hr.fullNettxData} text="Upstream" unit="Kb/s"/>
                  <GethRow pData={pFull[5].mean} gData={gFull[5].mean} chartData={gFull24Hr.fullNettrxData} text="Downstream" unit="Kb/s"/>
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
                  <ParityRow pData={pFast[0].mean} gData={gFast[0].mean} chartData={pFast24Hr.fastCpuData} text="CPU Usage" unit="%"/>
                  <ParityRow pData={pFast[1].mean} gData={gFast[1].mean} chartData={pFast24Hr.fastRamData} text="Memory (RAM) Usage" unit="%"/>
                  <ParityRow pData={pFast[3].mean} gData={gFast[3].mean} chartData={pFast24Hr.fastPeerData} text="# of Peers" unit=" Peers"/>
                  <ParityRow pData={pFast[2].mean} gData={gFast[2].mean} chartData={pFast24Hr.fastDiskData} text="Chain data size"/>
                  <ParityRow pData={pFast[4].mean} gData={gFast[4].mean} chartData={pFast24Hr.fastNettxData} text="Upstream" unit="Kb/s"/>
                  <ParityRow pData={pFast[5].mean} gData={gFast[0].mean} chartData={pFast24Hr.fastNettrxData} text="Downstream" unit="Kb/s"/>
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
                  <GethRow pData={pFast[0].mean} chartData={gFast24Hr.fastCpuData} text="CPU Usage" unit="%"/>
                  <GethRow pData={pFast[1].mean} gData={pFast[1].mean} chartData={gFast24Hr.fastRamData} text="Memory (RAM) Usage" unit="%"/>
                  <GethRow pData={pFast[3].mean} gData={pFast[3].mean} chartData={gFast24Hr.fastPeerData} text="# of Peers" unit=" Peers"/>
                  <GethRow pData={pFast[2].mean} gData={pFast[2].mean} chartData={gFast24Hr.fastDiskData} text="Chain data size"/>
                  <GethRow pData={pFast[4].mean} gData={pFast[4].mean} chartData={gFast24Hr.fastNettxData} text="Upstream" unit="Kb/s"/>
                  <GethRow pData={pFast[5].mean} chartData={gFast24Hr.fastNettrxData} text="Downstream" unit="Kb/s"/>
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
                  <ParityRow pData={pArchive[0].mean} gData={pArchive[0].mean} chartData={pArchive24Hr.archiveCpuData} text="CPU Usage" unit="%"/>
                  <ParityRow pData={pArchive[1].mean} gData={pArchive[1].mean} chartData={pArchive24Hr.archiveRamData} text="Memory (RAM) Usage" unit="%"/>
                  <ParityRow pData={pArchive[3].mean} gData={pArchive[3].mean} text="# of Peers" unit="Peers"/>
                  <ParityRow pData={pArchive[2].mean} gData={pArchive[2].mean}  text="Chain data size"/>
                  <ParityRow pData={pArchive[3].mean} gData={pArchive[3].mean}  text="Upstream" unit="Kb/s"/>
                  <ParityRow text="Downstream" unit="Kb/s"/>
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
                <div className="columns">
                  <div className="column is-4"></div>
                  <div className="column is-2">
                    <figure className="image is-128x128 bitmex-logo">
                      <img src="https://blog.bitmex.com/wp-content/uploads/2018/11/BitMEX-Research-Logo-Color-RGB.png" alt="Bitmex Logo"/>
                    </figure>
                  </div>
                  <div className="column is-2">
                    <figure className="image is-128x128 tokenanalyst-logo">
                      <img src="/images/Screenshot 2019-03-01 at 16.54.06.png" alt="TokenAnalyst Logo"/>
                    </figure>
                  </div>
                  <div className="column is-4"></div>
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
          :
          <p>Please Wait...</p>
        }
      </section>
    )
  }
}
export default Main;
