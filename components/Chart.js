'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGoogleCharts = require('react-google-charts');

var _reactGoogleCharts2 = _interopRequireDefault(_reactGoogleCharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Charts() {
  return _react2.default.createElement(
    'div',
    { className: 'chartBox' },
    _react2.default.createElement(
      'div',
      { style: { display: 'flex', maxWidth: 900 } },
      _react2.default.createElement(_reactGoogleCharts2.default, {
        width: 80,
        height: 50,
        chartType: 'AreaChart',
        loader: _react2.default.createElement(
          'div',
          null,
          'Loading Chart'
        ),
        data: [['Test', 'first parameter', 'second parameter'], ['test 1, 1', 20, 90], ['test 2, 2', 45, 47], ['test 3, 3', 3, 1], ['test 4, 4', 100, 188], ['test 5, 5', 299, 497]],
        options: {
          title: 'Test Chart',
          chartArea: { width: '100%' },
          hAxis: {
            title: 'h axis',
            minValue: 0
          },
          vAxis: {
            title: 'v axis'
          }
        },
        legendToggle: true
      })
    )
  );
}

exports.default = Charts;