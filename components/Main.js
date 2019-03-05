"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Row = require("./Row");

var _Row2 = _interopRequireDefault(_Row);

var _Modal = require("./Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _navigationFunctions = require("../lib/navigationFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "" },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: "columns" },
            _react2.default.createElement("div", { className: "page-divide" }),
            _react2.default.createElement(
              "div",
              { className: "columns column is-10 is-offset-1 is-mobile" },
              _react2.default.createElement(
                "div",
                { className: "column is-6" },
                _react2.default.createElement(
                  "span",
                  { className: "content has-text-centered company-name" },
                  _react2.default.createElement(
                    "h2",
                    { className: "name" },
                    _react2.default.createElement(
                      "span",
                      { className: "company" },
                      "Parity"
                    ),
                    _react2.default.createElement(
                      "span",
                      {
                        className: "icon has-text-info company-icon tooltip",
                        onClick: _navigationFunctions.clickTooltip,
                        id: "tooltip"
                      },
                      _react2.default.createElement(
                        "p",
                        { className: "tooltiptext" },
                        "Tooltip text"
                      ),
                      _react2.default.createElement("i", { className: "fas fa-info-circle" })
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "content has-text-centered node-type" },
                  _react2.default.createElement(
                    "p",
                    null,
                    "Full Node"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "columns is-mobile" },
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-quarter is-one-quarter-desktop table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "24hr avg"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-half table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "Description"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-quarter table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "1hr avg"
                    )
                  )
                ),
                _react2.default.createElement(_Row2.default, { text: "Mins not at tip of the chain" }),
                _react2.default.createElement(_Row2.default, {
                  metricurl: "/parity-full-cpu-1h-avg",
                  charturl: "/parity-full-cpu-24h",
                  text: "CPU Usage",
                  datatype: "cpu"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Memory (RAM) Usage",
                  metricurl: "/parity-full-ram-1h-avg",
                  charturl: "/parity-full-ram-24h",
                  datatype: "ram"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "# of Peers",
                  metricurl: "/parity-full-peers-1h-avg",
                  charturl: "/parity-full-peers-24h",
                  datatype: "peers"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Chain data size",
                  metricurl: "/parity-full-disk-1h-avg",
                  charturl: "/parity-full-disk-24h",
                  datatype: "disk"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Upstream",
                  metricurl: "/parity-full-nettx-1h-avg",
                  charturl: "/parity-full-nettx-24h",
                  datatype: "nettx"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Downstream",
                  metricurl: "/parity-full-netrx-1h-avg",
                  charturl: "/parity-full-netrx-24h",
                  datatype: "netrx"
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "column is-6 geth" },
                _react2.default.createElement(
                  "span",
                  { className: "content has-text-centered company-name" },
                  _react2.default.createElement(
                    "h2",
                    { className: "name" },
                    _react2.default.createElement(
                      "span",
                      { className: "company" },
                      "Geth"
                    ),
                    _react2.default.createElement(
                      "span",
                      {
                        className: "icon company-icon has-text-info tooltip",
                        onClick: _navigationFunctions.clickTooltip
                      },
                      _react2.default.createElement(
                        "p",
                        { className: "tooltiptext" },
                        "Tooltip text"
                      ),
                      _react2.default.createElement("i", { className: "fas fa-info-circle" })
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "content has-text-centered node-type not-used" },
                  _react2.default.createElement(
                    "p",
                    { id: "full" },
                    "Full Node"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "columns is-mobile" },
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-quarter table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "1hr avg"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-half table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "Description"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-quarter-desktop table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "24hr avg"
                    )
                  )
                ),
                _react2.default.createElement(_Row2.default, { text: "Mins not at tip of the chain" }),
                _react2.default.createElement(_Row2.default, {
                  metricurl: "/geth-full-cpu-1h-avg",
                  charturl: "/geth-full-cpu-24h",
                  text: "CPU Usage",
                  reverseOrder: "true",
                  datatype: "cpu"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Memory (RAM) Usage",
                  metricurl: "/geth-full-ram-1h-avg",
                  charturl: "/geth-full-ram-24h",
                  reverseOrder: "true",
                  datatype: "ram"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "# of Peers",
                  metricurl: "/geth-full-peers-1h-avg",
                  charturl: "/geth-full-peers-24h",
                  reverseOrder: "true",
                  datatype: "peers"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Chain data size",
                  metricurl: "/geth-full-disk-1h-avg",
                  charturl: "/geth-full-disk-24h",
                  reverseOrder: "true",
                  datatype: "disk"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Upstream",
                  metricurl: "/geth-full-nettx-1h-avg",
                  charturl: "/geth-full-nettx-24h",
                  reverseOrder: "true",
                  datatype: "nettx"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Downstream",
                  metricurl: "/geth-full-netrx-1h-avg",
                  charturl: "/geth-full-netrx-24h",
                  reverseOrder: "true",
                  datatype: "netrx"
                })
              )
            )
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "div",
            { className: "columns" },
            _react2.default.createElement(
              "div",
              { className: "columns column is-10 is-offset-1 is-mobile" },
              _react2.default.createElement(
                "div",
                { className: "column is-6" },
                _react2.default.createElement(
                  "span",
                  { className: "content has-text-centered company-name" },
                  _react2.default.createElement(
                    "h2",
                    { className: "name" },
                    _react2.default.createElement(
                      "span",
                      { className: "company" },
                      "Parity"
                    ),
                    _react2.default.createElement(
                      "span",
                      {
                        className: "icon has-text-info company-icon tooltip",
                        onClick: _navigationFunctions.clickTooltip,
                        id: "tooltip"
                      },
                      _react2.default.createElement(
                        "p",
                        { className: "tooltiptext" },
                        "Tooltip text"
                      ),
                      _react2.default.createElement("i", { className: "fas fa-info-circle" })
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "content has-text-centered node-type" },
                  _react2.default.createElement(
                    "p",
                    { id: "fast" },
                    "Fast Node"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "columns is-mobile" },
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-quarter is-one-quarter-desktop table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "24hr avg"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-half table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "Description"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-quarter table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "1hr avg"
                    )
                  )
                ),
                _react2.default.createElement(_Row2.default, {
                  metricurl: "/parity-fast-cpu-1h-avg",
                  charturl: "/parity-fast-cpu-24h",
                  text: "CPU Usage",
                  datatype: "cpu"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Memory (RAM) Usage",
                  metricurl: "/parity-fast-ram-1h-avg",
                  charturl: "/parity-fast-ram-24h",
                  datatype: "ram"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "# of Peers",
                  metricurl: "/parity-fast-peers-1h-avg",
                  charturl: "/parity-fast-peers-24h",
                  datatype: "peers"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Chain data size",
                  metricurl: "/parity-fast-disk-1h-avg",
                  charturl: "/parity-fast-disk-24h",
                  datatype: "disk"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Upstream",
                  metricurl: "/parity-fast-nettx-1h-avg",
                  charturl: "/parity-fast-nettx-24h",
                  datatype: "nettx"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Downstream",
                  metricurl: "/parity-fast-netrx-1h-avg",
                  charturl: "/parity-fast-netrx-24h",
                  datatype: "netrx"
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "column is-6" },
                _react2.default.createElement(
                  "span",
                  { className: "content has-text-centered company-name" },
                  _react2.default.createElement(
                    "h2",
                    { className: "name" },
                    _react2.default.createElement(
                      "span",
                      { className: "company" },
                      "Geth"
                    ),
                    _react2.default.createElement(
                      "span",
                      {
                        className: "icon company-icon has-text-info tooltip",
                        onClick: _navigationFunctions.clickTooltip
                      },
                      _react2.default.createElement(
                        "p",
                        { className: "tooltiptext" },
                        "Tooltip text"
                      ),
                      _react2.default.createElement("i", { className: "fas fa-info-circle" })
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "content has-text-centered node-type not-used" },
                  _react2.default.createElement(
                    "p",
                    { className: "white" },
                    "Fast Node"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "columns is-mobile" },
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-quarter table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "1hr avg"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-half table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "Description"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-quarter-desktop table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "24hr avg"
                    )
                  )
                ),
                _react2.default.createElement(_Row2.default, {
                  metricurl: "/geth-fast-cpu-1h-avg",
                  charturl: "/geth-fast-cpu-24h",
                  text: "CPU Usage",
                  reverseOrder: "true",
                  datatype: "cpu"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Memory (RAM) Usage",
                  metricurl: "/geth-fast-ram-1h-avg",
                  charturl: "/geth-fast-ram-24h",
                  reverseOrder: "true",
                  datatype: "ram"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "# of Peers",
                  metricurl: "/geth-fast-peers-1h-avg",
                  charturl: "/geth-fast-peers-24h",
                  reverseOrder: "true",
                  datatype: "peers"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Chain data size",
                  metricurl: "/geth-fast-disk-1h-avg",
                  charturl: "/geth-fast-disk-24h",
                  reverseOrder: "true",
                  datatype: "disk"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Upstream",
                  metricurl: "/geth-fast-nettx-1h-avg",
                  charturl: "/geth-fast-nettx-24h",
                  reverseOrder: "true",
                  datatype: "nettx"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Downstream",
                  metricurl: "/geth-fast-netrx-1h-avg",
                  charturl: "/geth-fast-netrx-24h",
                  reverseOrder: "true",
                  datatype: "netrx"
                })
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "columns" },
            _react2.default.createElement(
              "div",
              { className: "columns column is-10 is-offset-1 is-mobile" },
              _react2.default.createElement(
                "div",
                { className: "column is-6" },
                _react2.default.createElement(
                  "span",
                  { className: "content has-text-centered company-name" },
                  _react2.default.createElement(
                    "h2",
                    { className: "name" },
                    _react2.default.createElement(
                      "span",
                      { className: "company" },
                      "Parity"
                    ),
                    _react2.default.createElement(
                      "span",
                      {
                        className: "icon has-text-info company-icon tooltip",
                        onClick: _navigationFunctions.clickTooltip,
                        id: "tooltip"
                      },
                      _react2.default.createElement(
                        "p",
                        { className: "tooltiptext" },
                        "Tooltip text"
                      ),
                      _react2.default.createElement("i", { className: "fas fa-info-circle" })
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "content has-text-centered node-type" },
                  _react2.default.createElement(
                    "p",
                    { id: "archive" },
                    "Archive Node"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "columns is-mobile" },
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-quarter is-one-quarter-desktop table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "24hr avg"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-half table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "Description"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "column is-one-quarter table-header" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "1hr avg"
                    )
                  )
                ),
                _react2.default.createElement(_Row2.default, {
                  metricurl: "/parity-archive-cpu-1h-avg",
                  charturl: "/parity-archive-cpu-24h",
                  text: "CPU Usage",
                  datatype: "cpu"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Memory (RAM) Usage",
                  metricurl: "/parity-archive-ram-1h-avg",
                  charturl: "/parity-archive-ram-24h",
                  datatype: "ram"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "# of Peers",
                  metricurl: "/parity-archive-peers-1h-avg",
                  charturl: "/parity-archive-peers-24h",
                  datatype: "peers"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Chain data size",
                  metricurl: "/parity-archive-disk-1h-avg",
                  charturl: "/parity-archive-disk-24h",
                  datatype: "disk"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Upstream",
                  metricurl: "/parity-archive-nettx-1h-avg",
                  charturl: "/parity-archive-nettx-24h",
                  datatype: "nettx"
                }),
                _react2.default.createElement(_Row2.default, {
                  text: "Downstream",
                  metricurl: "/parity-archive-netrx-1h-avg",
                  charturl: "/parity-archive-netrx-24h",
                  datatype: "netrx"
                })
              )
            ),
            _react2.default.createElement(
              "span",
              { className: "arrowUp", id: "upArrow", onClick: _navigationFunctions.scrollUp },
              "\u25B2"
            ),
            _react2.default.createElement(
              "span",
              { className: "arrowDown", id: "downArrow", onClick: _navigationFunctions.scrollDown },
              "\u25BC"
            ),
            _react2.default.createElement(
              "div",
              { className: "mobile-bottom-navs" },
              _react2.default.createElement(
                "a",
                { href: "#archive", className: "archive navs" },
                "Archive"
              ),
              _react2.default.createElement(
                "a",
                { href: "#fast", className: "fast navs is-centered" },
                "Fast"
              ),
              _react2.default.createElement(
                "a",
                { href: "#full", className: "full navs" },
                "Full"
              )
            ),
            _react2.default.createElement(_Modal2.default, null)
          ),
          _react2.default.createElement(
            "footer",
            { className: "footer" },
            _react2.default.createElement(
              "div",
              { className: "content has-text-centered" },
              _react2.default.createElement(
                "div",
                { className: "columns" },
                _react2.default.createElement(
                  "div",
                  { className: "level is-mobile column is-4-desktop is-offset-4" },
                  _react2.default.createElement(
                    "div",
                    { className: "level-left-mobile has-text-centered" },
                    _react2.default.createElement(
                      "figure",
                      { className: "image is-128x128 bitmex-logo level-item" },
                      _react2.default.createElement("img", {
                        className: "",
                        src: "https://blog.bitmex.com/wp-content/uploads/2018/11/BitMEX-Research-Logo-Color-RGB.png",
                        alt: "Bitmex Logo"
                      })
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "level-right-mobile has-text-centered" },
                    _react2.default.createElement(
                      "figure",
                      { className: "image is-156x156 tokenanalyst-logo level-item" },
                      _react2.default.createElement("img", {
                        className: "",
                        src: "/images/Screenshot 2019-03-04 at 16.27.22.png",
                        alt: "TokenAnalyst Logo"
                      })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "p",
                { className: "disclaimer" },
                "This material should not be the basis for making investment decisions, nor be construed as a recommendation to engage in investment transactions, and is not related to the provision of advisory services regarding investment, tax, legal, financial, accounting, consulting or any other related services, nor is a recommendation being provided to buy, sell or purchase any good or product. The information and data herein have been obtained from sources we believe to be reliable. Such information has not been verified and we make no representation or warranty as to its accuracy, completeness or correctness. The website is produced by BitMEX Research and TokenAnalyst, neither BitMEX, TokenAnalyst nor any other entity, will be liable whatsoever for any direct or consequential loss arising from the use of this publication/communication or its contents."
              )
            )
          )
        )
      );
    }
  }]);

  return Main;
}(_react2.default.Component);

exports.default = Main;