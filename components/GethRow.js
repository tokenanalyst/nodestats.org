"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GethRow() {
  return _react2.default.createElement(
    "section",
    { className: "columns" },
    _react2.default.createElement(
      "p",
      { className: "column is-3 data" },
      "Data"
    ),
    _react2.default.createElement(
      "p",
      { className: "column is-6 text" },
      "Text"
    ),
    _react2.default.createElement(
      "p",
      { className: "column is-3 graph" },
      "graph"
    )
  );
}

exports.default = GethRow;