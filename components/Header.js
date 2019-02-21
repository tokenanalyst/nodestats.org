"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    "nav",
    { className: "navbar", role: "navigation", "aria-label": "main navigation" },
    _react2.default.createElement(
      "div",
      { className: "navbar-brand" },
      _react2.default.createElement(
        "a",
        { href: "#", className: "navbar-item" },
        "Bitmex"
      ),
      _react2.default.createElement(
        "p",
        { className: "navbar-item" },
        "|"
      ),
      _react2.default.createElement(
        "a",
        { href: "#", className: "navbar-item" },
        "TokenAnalyst"
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "navbar-item is-centered" },
      _react2.default.createElement(
        "h1",
        null,
        "Nodestats.org"
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "navbar-end" },
      _react2.default.createElement(
        "h3",
        { className: "button navbar-item" },
        "About/info"
      )
    )
  );
}

exports.default = Header;