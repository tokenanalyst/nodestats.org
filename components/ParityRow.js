'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ParityCharts = require('./ParityCharts');

var _ParityCharts2 = _interopRequireDefault(_ParityCharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ParityRow(_ref) {
  var text = _ref.text,
      pData = _ref.pData,
      gData = _ref.gData,
      chartData = _ref.chartData,
      unit = _ref.unit;

  return _react2.default.createElement(
    'section',
    { className: 'columns row is-vcentered', id: 'parityTest' },
    _react2.default.createElement(
      'div',
      { className: 'column is-4 graph chart' },
      _react2.default.createElement(_ParityCharts2.default, { chartData: chartData, unit: unit, className: '' })
    ),
    _react2.default.createElement(
      'span',
      { className: 'column is-4-desktop text' },
      _react2.default.createElement(
        'div',
        { className: 'columns is-mobile' },
        _react2.default.createElement(
          'p',
          { className: 'column is-9-desktop is-9' },
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
          { className: 'icon has-text-info tooltip column is-3-desktop is-3' },
          _react2.default.createElement(
            'p',
            { className: 'tooltiptext' },
            'Tooltip text'
          ),
          _react2.default.createElement('i', { className: 'fas fa-info-circle' })
        )
      )
    ),
    _react2.default.createElement('div', null),
    function () {
      var x = parseFloat(Math.round(pData * 100) / 100).toFixed(2);
      if (pData < gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-4-desktop data red', id: 'pData' },
          x,
          unit
        );
      }if (pData > gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-4-desktop data green', id: 'pData' },
          x,
          unit
        );
      }if (pData === gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-4-desktop data black', id: 'pData' },
          x,
          unit
        );
      }
    }()
  );
}

exports.default = ParityRow;