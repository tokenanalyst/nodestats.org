'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('chart.js');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GethRow() {
  return _react2.default.createElement(
    'section',
    { className: 'columns is-mobile' },
    _react2.default.createElement(
      'p',
      { className: 'column is-3-desktop data' },
      'Data'
    ),
    _react2.default.createElement(
      'p',
      { className: 'column is-8-mobile is-6-desktop text' },
      'Text'
    ),
    _react2.default.createElement(
      'p',
      { className: 'column is-4-mobile is-3-desktop graph' },
      'graph'
    )
  );
}

exports.default = GethRow;