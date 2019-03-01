'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _ParityRow = require('./ParityRow');

var _ParityRow2 = _interopRequireDefault(_ParityRow);

var _GethRow = require('./GethRow');

var _GethRow2 = _interopRequireDefault(_GethRow);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _navigationFunctions = require('../lib/navigationFunctions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseUrl = 'https://nodestats.tokenanalyst.io';
var pFast1Hr = ['/parity-fast-cpu-1h-avg', '/parity-fast-ram-1h-avg', '/parity-fast-disk-1h-avg', '/parity-fast-peers-1h-avg', '/parity-fast-nettx-1h-avg', '/parity-fast-netrx-1h-avg', '/parity-fast-sync-1h-avg'];
var pFull1Hr = ['/parity-full-cpu-1h-avg', '/parity-full-ram-1h-avg', '/parity-full-disk-1h-avg', '/parity-full-peers-1h-avg', '/parity-full-nettx-1h-avg', '/parity-full-netrx-1h-avg', '/parity-full-sync-1h-afull'];
var pFast24Hr = ['/parity-fast-cpu-24h', '/parity-fast-ram-24h', '/parity-fast-disk-24h', '/parity-fast-peers-24h', '/parity-fast-nettx-24h', '/parity-fast-netrx-24h', '/parity-fast-sync-24h'];
var pFull24Hr = ['/parity-full-cpu-24h', '/parity-full-ram-24h', '/parity-full-disk-24h', '/parity-full-peers-24h', '/parity-full-nettx-24h', '/parity-full-netrx-24h', '/parity-full-sync-24h'];
var gFast1Hr = ['/geth-fast-cpu-1h-avg', '/geth-fast-ram-1h-avg', '/geth-fast-disk-1h-avg', '/geth-fast-peers-1h-avg', '/geth-fast-nettx-1h-avg', '/geth-fast-netrx-1h-avg', '/geth-fast-sync-1h-avg'];
var gFull1Hr = ['/geth-full-cpu-1h-avg', '/geth-full-ram-1h-avg', '/geth-full-disk-1h-avg', '/geth-full-peers-1h-avg', '/geth-full-nettx-1h-avg', '/geth-full-netrx-1h-avg', '/geth-full-sync-1h-afull'];
var gFast24Hr = ['/geth-fast-cpu-24h', '/geth-fast-ram-24h', '/geth-fast-disk-24h', '/geth-fast-peers-24h', '/geth-fast-nettx-24h', '/geth-fast-netrx-24h', '/geth-fast-sync-24h'];
var gFull24Hr = ['/geth-full-cpu-24h', '/geth-full-ram-24h', '/geth-full-disk-24h', '/geth-full-peers-24h', '/geth-full-nettx-24h', '/geth-full-netrx-24h', '/geth-full-sync-24h'];
var pArchive1Hr = ['/parity-archive-cpu-1h-avg', '/parity-archive-ram-1h-avg', '/parity-archive-disk-1h-avg', '/parity-archive-peers-1h-avg', '/parity-archive-nettx-1h-avg', '/parity-archive-netrx-1h-avg', '/parity-archive-sync-1h-avg'];
var pArchive24Hr = ['/parity-archive-cpu-24h', '/parity-archive-ram-24h', '/parity-archive-disk-24h', '/parity-archive-peers-24h', '/parity-archive-nettx-24h', '/parity-archive-netrx-24h', '/parity-archive-sync-24h'];

// http://lb-api-2c97d9e50f6a4e75.elb.eu-west-2.amazonaws.com/parity-full-netrx-1h-avg

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Main, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      _axios2.default.all([_axios2.default.get('' + baseUrl + pFast1Hr[0]), _axios2.default.get('' + baseUrl + pFast1Hr[1]), _axios2.default.get('' + baseUrl + pFast1Hr[2]), _axios2.default.get('' + baseUrl + pFast1Hr[3]), _axios2.default.get('' + baseUrl + pFast1Hr[4]), _axios2.default.get('' + baseUrl + pFast1Hr[5])]).then(_axios2.default.spread(function (pFastCpu, pFastRam, pFastDisk, pFastPeer, pFastNettx, pFastNettrx) {
        var fastCpuData = pFastCpu.data || [];
        var fastRamData = pFastRam.data || [];
        var fastDiskData = pFastDisk.data || [];
        var fastPeerData = pFastPeer.data || [];
        var fastNettxData = pFastNettx.data || [];
        var fastNettrxData = pFastNettrx.data || [];
        var pFast1Hr = fastCpuData.concat(fastRamData).concat(fastDiskData).concat(fastPeerData).concat(fastNettxData).concat(fastNettrxData);
        that.setState({ pFast1Hr: pFast1Hr });
      })).catch(function (error) {
        return console.log(error);
      });
      _axios2.default.all([_axios2.default.get('' + baseUrl + gFast1Hr[0]), _axios2.default.get('' + baseUrl + gFast1Hr[1]), _axios2.default.get('' + baseUrl + gFast1Hr[2]), _axios2.default.get('' + baseUrl + gFast1Hr[3]), _axios2.default.get('' + baseUrl + gFast1Hr[4]), _axios2.default.get('' + baseUrl + gFast1Hr[5])]).then(_axios2.default.spread(function (gFastCpu, gFastRam, gFastDisk, gFastPeer, gFastNettx, gFastNettrx) {
        var fastCpuData = gFastCpu.data || [];
        var fastRamData = gFastRam.data || [];
        var fastDiskData = gFastDisk.data || [];
        var fastPeerData = gFastPeer.data || [];
        var fastNettxData = gFastNettx.data || [];
        var fastNettrxData = gFastNettrx.data || [];
        var gFast1Hr = fastCpuData.concat(fastRamData).concat(fastDiskData).concat(fastPeerData).concat(fastNettxData).concat(fastNettrxData);
        that.setState({ gFast1Hr: gFast1Hr });
      })).catch(function (error) {
        return console.log(error);
      });
      _axios2.default.all([_axios2.default.get('' + baseUrl + pFull1Hr[0]), _axios2.default.get('' + baseUrl + pFull1Hr[1]), _axios2.default.get('' + baseUrl + pFull1Hr[2]), _axios2.default.get('' + baseUrl + pFull1Hr[3]), _axios2.default.get('' + baseUrl + pFull1Hr[4]), _axios2.default.get('' + baseUrl + pFull1Hr[5])]).then(_axios2.default.spread(function (pFullCpu, pFullRam, pFullDisk, pFullPeer, pFullNettx, pFullNettrx) {
        var fullCpuData = pFullCpu.data || [];
        var fullRamData = pFullRam.data || [];
        var fullDiskData = pFullDisk.data || [];
        var fullPeerData = pFullPeer.data || [];
        var fullNettxData = pFullNettx.data || [];
        var fullNettrxData = pFullNettrx.data || [];
        var pFull1Hr = fullCpuData.concat(fullRamData).concat(fullDiskData).concat(fullPeerData).concat(fullNettxData).concat(fullNettrxData);
        that.setState({ pFull1Hr: pFull1Hr });
      })).catch(function (error) {
        return console.log(error);
      });
      _axios2.default.all([_axios2.default.get('' + baseUrl + gFull1Hr[0]), _axios2.default.get('' + baseUrl + gFull1Hr[1]), _axios2.default.get('' + baseUrl + gFull1Hr[2]), _axios2.default.get('' + baseUrl + gFull1Hr[3]), _axios2.default.get('' + baseUrl + gFull1Hr[4]), _axios2.default.get('' + baseUrl + gFull1Hr[5])]).then(_axios2.default.spread(function (gFullCpu, gFullRam, gFullDisk, gFullPeer, gFullNettx, gFullNettrx) {
        var fullCpuData = gFullCpu.data || [];
        var fullRamData = gFullRam.data || [];
        var fullDiskData = gFullDisk.data || [];
        var fullPeerData = gFullPeer.data || [];
        var fullNettxData = gFullNettx.data || [];
        var fullNettrxData = gFullNettrx.data || [];
        var gFull1Hr = fullCpuData.concat(fullRamData).concat(fullDiskData).concat(fullPeerData).concat(fullNettxData).concat(fullNettrxData);
        that.setState({ gFull1Hr: gFull1Hr });
      })).catch(function (error) {
        return console.log(error);
      });
      _axios2.default.all([_axios2.default.get('' + baseUrl + pFast24Hr[0]), _axios2.default.get('' + baseUrl + pFast24Hr[1]), _axios2.default.get('' + baseUrl + pFast24Hr[2]), _axios2.default.get('' + baseUrl + pFast24Hr[3]), _axios2.default.get('' + baseUrl + pFast24Hr[4]), _axios2.default.get('' + baseUrl + pFast24Hr[5])]).then(_axios2.default.spread(function (p24FastCpu, p24FastRam, p24FastDisk, p24FastPeer, p24FastNettx, p24FastNettrx) {
        var fastCpuData = p24FastCpu.data || [];
        var fastRamData = p24FastRam.data || [];
        var fastDiskData = p24FastDisk.data || [];
        var fastPeerData = p24FastPeer.data || [];
        var fastNettxData = p24FastNettx.data || [];
        var fastNettrxData = p24FastNettrx.data || [];
        var parityFast24Hr = { fastCpuData: fastCpuData, fastRamData: fastRamData, fastDiskData: fastDiskData, fastPeerData: fastPeerData, fastNettxData: fastNettxData, fastNettrxData: fastNettrxData };
        that.setState({ parityFast24Hr: parityFast24Hr });
      })).catch(function (error) {
        return console.log(error);
      });
      _axios2.default.all([_axios2.default.get('' + baseUrl + gFast24Hr[0]), _axios2.default.get('' + baseUrl + gFast24Hr[1]), _axios2.default.get('' + baseUrl + gFast24Hr[2]), _axios2.default.get('' + baseUrl + gFast24Hr[3]), _axios2.default.get('' + baseUrl + gFast24Hr[4]), _axios2.default.get('' + baseUrl + gFast24Hr[5])]).then(_axios2.default.spread(function (g24FastCpu, g24FastRam, g24FastDisk, g24FastPeer, g24FastNettx, g24FastNettrx) {
        var fastCpuData = g24FastCpu.data || [];
        var fastRamData = g24FastRam.data || [];
        var fastDiskData = g24FastDisk.data || [];
        var fastPeerData = g24FastPeer.data || [];
        var fastNettxData = g24FastNettx.data || [];
        var fastNettrxData = g24FastNettrx.data || [];
        var gethFast24Hr = { fastCpuData: fastCpuData, fastRamData: fastRamData, fastDiskData: fastDiskData, fastPeerData: fastPeerData, fastNettxData: fastNettxData, fastNettrxData: fastNettrxData };
        that.setState({ gethFast24Hr: gethFast24Hr });
      })).catch(function (error) {
        return console.log(error);
      });
      _axios2.default.all([_axios2.default.get('' + baseUrl + pFull24Hr[0]), _axios2.default.get('' + baseUrl + pFull24Hr[1]), _axios2.default.get('' + baseUrl + pFull24Hr[2]), _axios2.default.get('' + baseUrl + pFull24Hr[3]), _axios2.default.get('' + baseUrl + pFull24Hr[4]), _axios2.default.get('' + baseUrl + pFull24Hr[5])]).then(_axios2.default.spread(function (p24FullCpu, p24FullRam, p24FullDisk, p24FullPeer, p24FullNettx, p24FullNettrx) {
        var fullCpuData = p24FullCpu.data || [];
        var fullRamData = p24FullRam.data || [];
        var fullDiskData = p24FullDisk.data || [];
        var fullPeerData = p24FullPeer.data || [];
        var fullNettxData = p24FullNettx.data || [];
        var fullNettrxData = p24FullNettrx.data || [];
        var parityFull24Hr = { fullCpuData: fullCpuData, fullRamData: fullRamData, fullDiskData: fullDiskData, fullPeerData: fullPeerData, fullNettxData: fullNettxData, fullNettrxData: fullNettrxData };
        that.setState({ parityFull24Hr: parityFull24Hr });
      })).catch(function (error) {
        return console.log(error);
      });
      _axios2.default.all([_axios2.default.get('' + baseUrl + gFull24Hr[0]), _axios2.default.get('' + baseUrl + gFull24Hr[1]), _axios2.default.get('' + baseUrl + gFull24Hr[2]), _axios2.default.get('' + baseUrl + gFull24Hr[3]), _axios2.default.get('' + baseUrl + gFull24Hr[4]), _axios2.default.get('' + baseUrl + gFull24Hr[5])]).then(_axios2.default.spread(function (g24FullCpu, g24FullRam, g24FullDisk, g24FullPeer, g24FullNettx, g24FullNettrx) {
        var fullCpuData = g24FullCpu.data || [];
        var fullRamData = g24FullRam.data || [];
        var fullDiskData = g24FullDisk.data || [];
        var fullPeerData = g24FullPeer.data || [];
        var fullNettxData = g24FullNettx.data || [];
        var fullNettrxData = g24FullNettrx.data || [];
        var gethFull24Hr = { fullCpuData: fullCpuData, fullRamData: fullRamData, fullDiskData: fullDiskData, fullPeerData: fullPeerData, fullNettxData: fullNettxData, fullNettrxData: fullNettrxData };
        that.setState({ gethFull24Hr: gethFull24Hr });
      })).catch(function (error) {
        return console.log(error);
      });
      _axios2.default.all([_axios2.default.get('' + baseUrl + pArchive1Hr[0]), _axios2.default.get('' + baseUrl + pArchive1Hr[1]), _axios2.default.get('' + baseUrl + pArchive1Hr[2]), _axios2.default.get('' + baseUrl + pArchive1Hr[3]), _axios2.default.get('' + baseUrl + pArchive1Hr[4]), _axios2.default.get('' + baseUrl + pArchive1Hr[5])]).then(_axios2.default.spread(function (pArchiveCpu, pArchiveRam, pArchiveDisk, pArchivePeer, pArchiveNettx, pArchiveNettrx) {
        var archiveCpuData = pArchiveCpu.data || [];
        var archiveRamData = pArchiveRam.data || [];
        var archiveDiskData = pArchiveDisk.data || [];
        var archivePeerData = pArchivePeer.data || [];
        var archiveNettxData = pArchiveNettx.data || [];
        var archiveNettrxData = pArchiveNettrx.data || [];
        var pArchive1Hr = archiveCpuData.concat(archiveRamData).concat(archiveDiskData).concat(archivePeerData).concat(archiveNettxData).concat(archiveNettrxData);
        that.setState({ pArchive1Hr: pArchive1Hr });
      })).catch(function (error) {
        return console.log(error);
      });
      _axios2.default.all([_axios2.default.get('' + baseUrl + pArchive24Hr[0]), _axios2.default.get('' + baseUrl + pArchive24Hr[1]), _axios2.default.get('' + baseUrl + pArchive24Hr[2]), _axios2.default.get('' + baseUrl + pArchive24Hr[3]), _axios2.default.get('' + baseUrl + pArchive24Hr[4]), _axios2.default.get('' + baseUrl + pArchive24Hr[5])]).then(_axios2.default.spread(function (p24ArchiveCpu, p24ArchiveRam, p24ArchiveDisk, p24ArchivePeer, p24ArchiveNettx, p24ArchiveNettrx) {
        var archiveCpuData = p24ArchiveCpu.data || [];
        var archiveRamData = p24ArchiveRam.data || [];
        var archiveDiskData = p24ArchiveDisk.data || [];
        var archivePeerData = p24ArchivePeer.data || [];
        var archiveNettxData = p24ArchiveNettx.data || [];
        var archiveNettrxData = p24ArchiveNettrx.data || [];
        var parityArchive24Hr = { archiveCpuData: archiveCpuData, archiveRamData: archiveRamData, archiveDiskData: archiveDiskData, archivePeerData: archivePeerData, archiveNettxData: archiveNettxData, archiveNettrxData: archiveNettrxData };
        that.setState({ parityArchive24Hr: parityArchive24Hr });
      })).catch(function (error) {
        return console.log(error);
      });
    }
    // axios.get(`http://lb-api-2c97d9e50f6a4e75.elb.eu-west-2.amazonaws.com${fast1Hr[0]}`)
    //   .then(result => this.setState({ stats: result.data }))
    //   .then(window.onscroll = function() {
    //     scrollFunction()
    //     scrollFunction2()
    //   })
    // }


  }, {
    key: 'render',
    value: function render() {
      var pFast = this.state.pFast1Hr;
      var pFull = this.state.pFull1Hr;
      var gFast = this.state.gFast1Hr;
      var gFull = this.state.gFull1Hr;
      var pFast24Hr = this.state.parityFast24Hr;
      var gFast24Hr = this.state.gethFast24Hr;
      var pFull24Hr = this.state.parityFull24Hr;
      var gFull24Hr = this.state.gethFull24Hr;
      var pArchive = this.state.pArchive1Hr;
      var pArchive24Hr = this.state.parityArchive24Hr;

      return _react2.default.createElement(
        'section',
        null,
        pFast && gFast && pFast24Hr && gFast24Hr && gFull && gFull24Hr && pFull24Hr && pArchive && pArchive24Hr ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'columns' },
            _react2.default.createElement('div', { className: 'page-divide' }),
            _react2.default.createElement(
              'div',
              { className: 'columns column is-10 is-offset-1 is-mobile main-box' },
              _react2.default.createElement(
                'div',
                { className: 'column is-6' },
                _react2.default.createElement(
                  'span',
                  { className: 'content has-text-centered company-name' },
                  _react2.default.createElement(
                    'h2',
                    { className: '' },
                    _react2.default.createElement(
                      'span',
                      { className: 'company' },
                      'Parity'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'icon has-text-info company-icon tooltip', onClick: _navigationFunctions.clickTooltip, id: 'tooltip' },
                      _react2.default.createElement(
                        'p',
                        { className: 'tooltiptext' },
                        'Tooltip text'
                      ),
                      _react2.default.createElement('i', { className: 'fas fa-info-circle' })
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'content has-text-centered node-type' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Full Node'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'columns is-mobile' },
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-quarter is-one-quarter-desktop table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      '24hr avg'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-half table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Description'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-quarter table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      '1hr avg'
                    )
                  )
                ),
                _react2.default.createElement(_ParityRow2.default, { text: 'Mins not at tip of the chain' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFull[0].mean, gData: gFull[0].mean, chartData: pFull24Hr.fullCpuData, text: 'CPU Usage' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFull[1].mean, gData: gFull[1].mean, chartData: pFull24Hr.fullRamData, text: 'Memory (RAM) Usage' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFull[3].mean, gData: gFull[3].mean, chartData: pFull24Hr.fullPeerData, text: '# of Peers' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFull[2].mean, gData: gFull[2].mean, chartData: pFull24Hr.fullDiskData, text: 'Chain data size' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFull[4].mean, gData: gFull[4].mean, chartData: pFull24Hr.fullNettxData, text: 'Upstream' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFull[5].mean, gData: gFull[5].mean, chartData: pFull24Hr.fullNettrxData, text: 'Downstream' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'column is-6 geth' },
                _react2.default.createElement(
                  'span',
                  { className: 'content has-text-centered company-name' },
                  _react2.default.createElement(
                    'h2',
                    { className: '' },
                    _react2.default.createElement(
                      'span',
                      { className: 'company' },
                      'Geth'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'icon company-icon has-text-info tooltip', onClick: _navigationFunctions.clickTooltip },
                      _react2.default.createElement(
                        'p',
                        { className: 'tooltiptext' },
                        'Tooltip text'
                      ),
                      _react2.default.createElement('i', { className: 'fas fa-info-circle' })
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'content has-text-centered node-type not-used' },
                  _react2.default.createElement(
                    'p',
                    { id: 'full' },
                    'Full Node'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'columns is-mobile' },
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-quarter table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      '1hr avg'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-half table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Description'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-quarter-desktop table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      '24hr avg'
                    )
                  )
                ),
                _react2.default.createElement(_GethRow2.default, { text: 'Mins not at tip of the chain' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFull[0].mean, gData: gFull[0].mean, chartData: gFull24Hr.fullCpuData, text: 'CPU Usage' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFull[1].mean, gData: gFull[1].mean, chartData: gFull24Hr.fullRamData, text: 'Memory (RAM) Usage' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFull[3].mean, gData: gFull[3].mean, chartData: gFull24Hr.fullPeerData, text: '# of Peers' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFull[2].mean, gData: gFull[2].mean, chartData: gFull24Hr.fullDiskData, text: 'Chain data size' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFull[4].mean, gData: gFull[4].mean, chartData: gFull24Hr.fullNettxData, text: 'Upstream' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFull[5].mean, gData: gFull[5].mean, chartData: gFull24Hr.fullNettrxData, text: 'Downstream' })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'columns' },
            _react2.default.createElement(
              'div',
              { className: 'columns column is-10 is-offset-1 is-mobile' },
              _react2.default.createElement(
                'div',
                { className: 'column is-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'content has-text-centered node-type' },
                  _react2.default.createElement(
                    'p',
                    { id: 'fast' },
                    'Fast Node'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'columns is-mobile' },
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-quarter is-one-quarter-desktop table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      '24hr avg'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-half table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Description'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-quarter table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      '1hr avg'
                    )
                  )
                ),
                _react2.default.createElement(_ParityRow2.default, { text: 'Mins not at tip of the chain' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFast[0].mean, gData: pFast[0].mean, chartData: pFast24Hr.fastCpuData, text: 'CPU Usage' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFast[1].mean, gData: pFast[0].mean, chartData: pFast24Hr.fastRamData, text: 'Memory (RAM) Usage' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFast[3].mean, gData: pFast[0].mean, chartData: pFast24Hr.fastPeerData, text: '# of Peers' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFast[2].mean, gData: pFast[0].mean, chartData: pFast24Hr.fastDiskData, text: 'Chain data size' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFast[4].mean, gData: pFast[0].mean, chartData: pFast24Hr.fastNettxData, text: 'Upstream' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pFast[5].mean, gData: pFast[0].mean, chartData: pFast24Hr.fastNettrxData, text: 'Downstream' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'column is-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'content has-text-centered node-type not-used' },
                  _react2.default.createElement(
                    'p',
                    { className: 'white' },
                    'Fast Node'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'columns is-mobile' },
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-quarter table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      '1hr avg'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-half table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Description'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-quarter-desktop table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      '24hr avg'
                    )
                  )
                ),
                _react2.default.createElement(_GethRow2.default, { text: 'Mins not at tip of the chain' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFast[0].mean, gData: pFast[0].mean, chartData: gFast24Hr.fastCpuData, text: 'CPU Usage' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFast[1].mean, gData: pFast[0].mean, chartData: gFast24Hr.fastRamData, text: 'Memory (RAM) Usage' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFast[3].mean, gData: pFast[0].mean, chartData: gFast24Hr.fastPeerData, text: '# of Peers' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFast[2].mean, gData: pFast[0].mean, chartData: gFast24Hr.fastDiskData, text: 'Chain data size' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFast[4].mean, gData: pFast[0].mean, chartData: gFast24Hr.fastNettxData, text: 'Upstream' }),
                _react2.default.createElement(_GethRow2.default, { pData: pFast[5].mean, gData: pFast[0].mean, chartData: gFast24Hr.fastNettrxData, text: 'Downstream' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'columns' },
            _react2.default.createElement(
              'div',
              { className: 'columns column is-10 is-offset-1 is-mobile' },
              _react2.default.createElement(
                'div',
                { className: 'column is-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'content has-text-centered node-type' },
                  _react2.default.createElement(
                    'p',
                    { id: 'archive' },
                    'Archive Node'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'columns is-mobile' },
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-quarter is-one-quarter-desktop table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      '24hr avg'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-half table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Description'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-quarter table-header' },
                    _react2.default.createElement(
                      'h3',
                      null,
                      '1hr avg'
                    )
                  )
                ),
                _react2.default.createElement(_ParityRow2.default, { text: 'Mins not at tip of the chain' }),
                _react2.default.createElement(_ParityRow2.default, { pData: pArchive[0].mean, chartData: pArchive24Hr.archiveCpuData, text: 'CPU Usage' }),
                _react2.default.createElement(_ParityRow2.default, { chartData: pArchive24Hr.archiveRamData, text: 'Memory (RAM) Usage' }),
                _react2.default.createElement(_ParityRow2.default, { text: '# of Peers' }),
                _react2.default.createElement(_ParityRow2.default, { text: 'Chain data size' }),
                _react2.default.createElement(_ParityRow2.default, { text: 'Upstream' }),
                _react2.default.createElement(_ParityRow2.default, { text: 'Downstream' })
              )
            ),
            _react2.default.createElement(
              'span',
              { className: 'navs arrowUp', id: 'upArrow', onClick: _navigationFunctions.scrollUp },
              '\u25B2'
            ),
            _react2.default.createElement(
              'span',
              { className: 'navs arrowDown', id: 'downArrow', onClick: _navigationFunctions.scrollDown },
              '\u25BC'
            ),
            _react2.default.createElement(
              'div',
              { className: 'mobile-bottom-navs' },
              _react2.default.createElement(
                'a',
                { href: '#archive', className: 'archive navs' },
                'Archive'
              ),
              _react2.default.createElement(
                'a',
                { href: '#fast', className: 'fast navs is-centered' },
                'Fast'
              ),
              _react2.default.createElement(
                'a',
                { href: '#full', className: 'full navs' },
                'Full'
              )
            ),
            _react2.default.createElement(_Modal2.default, null)
          ),
          _react2.default.createElement(
            'footer',
            { className: 'footer' },
            _react2.default.createElement(
              'div',
              { className: 'content has-text-centered' },
              _react2.default.createElement(
                'div',
                { className: 'columns has-text-centered' },
                _react2.default.createElement(
                  'div',
                  { className: 'column' },
                  _react2.default.createElement(
                    'figure',
                    { className: 'image is-128x128' },
                    _react2.default.createElement('img', { src: 'https://blog.bitmex.com/wp-content/uploads/2018/11/BitMEX-Research-Logo-Color-RGB.png', alt: 'Bitmex Logo' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'figure',
                    { className: 'image is-128x128' },
                    _react2.default.createElement('img', { src: '/images/Screenshot 2019-03-01 at 16.54.06.png', alt: 'TokenAnalyst Logo' })
                  )
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'Created by TokenAnalyst'
              ),
              _react2.default.createElement(
                'p',
                { className: 'disclaimer' },
                'This material should not be the basis for making investment decisions, nor be construed as a recommendation to engage in investment transactions, and is not related to the provision of advisory services regarding investment, tax, legal, financial, accounting, consulting or any other related services, nor is a recommendation being provided to buy, sell or purchase any good or product. The information and data herein have been obtained from sources we believe to be reliable. Such information has not been verified and we make no representation or warranty as to its accuracy, completeness or correctness. The website is produced by BitMEX Research and TokenAnalyst, neither BitMEX, TokenAnalyst nor any other entity, will be liable whatsoever for any direct or consequential loss arising from the use of this publication/communication or its contents.'
              )
            )
          )
        ) : _react2.default.createElement(
          'p',
          null,
          'Please Wait...'
        )
      );
    }
  }]);

  return Main;
}(_react2.default.Component);

exports.default = Main;