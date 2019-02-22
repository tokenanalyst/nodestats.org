'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Charts = require('./Charts');

var _Charts2 = _interopRequireDefault(_Charts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParityRow() {
  return _react2.default.createElement(
    'section',
    { className: 'columns is-mobile' },
    _react2.default.createElement(
      'div',
      { className: 'column is-4-mobile is-3-desktop graph chart' },
      _react2.default.createElement(_Charts2.default, null)
    ),
    _react2.default.createElement(
      'div',
      { className: 'column is-8-mobile is-6-desktop text' },
      'Text ',
      _react2.default.createElement(
        'span',
        { className: 'icon has-text-info tooltip' },
        _react2.default.createElement(
          'p',
          { className: 'tooltiptext' },
          'Tooltip text'
        ),
        _react2.default.createElement('i', { className: 'fas fa-info-circle' })
      )
    ),
    _react2.default.createElement(
      'p',
      { className: 'column is-4-mobile is-3-desktop data' },
      'Data'
    )
  );
}

exports.default = ParityRow;