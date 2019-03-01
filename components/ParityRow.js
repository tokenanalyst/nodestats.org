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
      chartData = _ref.chartData;

  console.log('2nd', chartData);
  return _react2.default.createElement(
    'section',
    { className: 'columns row', id: 'parityTest' },
    _react2.default.createElement(
      'div',
      { className: 'column is-4 graph chart' },
      _react2.default.createElement(_ParityCharts2.default, { chartData: chartData, className: '' })
    ),
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
          { className: 'icon has-text-info tooltip column is-4-desktop is-2' },
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
      if (pData < gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-4-desktop data red', id: 'pData' },
          pData
        );
      }if (pData > gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-4-desktop data green', id: 'pData' },
          pData
        );
      }if (pData === gData) {
        return _react2.default.createElement(
          'p',
          { className: 'column is-4-desktop data black', id: 'pData' },
          pData
        );
      }
    }()
  );
}

exports.default = ParityRow;