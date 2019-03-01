'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GethCharts = require('./GethCharts');

var _GethCharts2 = _interopRequireDefault(_GethCharts);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GethRow(_ref) {
  var text = _ref.text,
      gData = _ref.gData,
      pData = _ref.pData,
      chartData = _ref.chartData;

  return _react2.default.createElement(
    'section',
    { className: 'columns row', id: 'gethTest' },
    function () {
      var x = gData;
      if (pData < gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-4-desktop data desktop-data green', id: 'pData' },
          x
        );
      }if (pData > gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-4-desktop data desktop-data red', id: 'pData' },
          x
        );
      }if (pData === gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-4-desktop data desktop-data black', id: 'pData' },
          x
        );
      }
    }(),
    _react2.default.createElement(
      'span',
      { className: 'column is-4-desktop text' },
      _react2.default.createElement(
        'div',
        { className: 'columns is-mobile' },
        _react2.default.createElement(
          'p',
          { className: 'column is-10-desktop is-10' },
          text,
          ' ',
          _react2.default.createElement(
            'span',
            { className: 'mobile-table-header' },
            '(1hr)'
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'icon has-text-info tooltip column is-2-desktop is-2' },
          _react2.default.createElement(
            'p',
            { className: 'tooltiptext' },
            'Tooltip text'
          ),
          _react2.default.createElement('i', { className: 'fas fa-info-circle ' })
        )
      )
    ),
    function () {
      if (pData < gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-3-desktop data mobile-data green', id: 'pData' },
          gData
        );
      }if (pData > gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-3-desktop data mobile-data red', id: 'pData' },
          gData
        );
      }if (pData === gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-3-desktop data mobile-data black', id: 'pData' },
          gData
        );
      }
    }(),
    _react2.default.createElement(
      'div',
      { className: 'column is-4 graph chart' },
      _react2.default.createElement(_GethCharts2.default, { chartData: chartData, className: '' })
    ),
    _react2.default.createElement(_Modal2.default, null)
  );
}

exports.default = GethRow;