'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGoogleCharts = require('react-google-charts');

var _reactGoogleCharts2 = _interopRequireDefault(_reactGoogleCharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GethCharts(_ref) {
  var chartData = _ref.chartData;

  var arrayValues = [];
  var arrayTimes = [];
  return _react2.default.createElement(
    'section',
    null,
    chartData ? _react2.default.createElement(
      'div',
      { className: 'chart-box' },
      function () {
        console.log('chart data is', chartData, arrayValues, arrayTimes);
        for (var i = 0; i < chartData.length; i++) {
          arrayValues.push(chartData[i].value);
          arrayTimes.push(chartData[i].time);
        }
      }(),
      _react2.default.createElement(
        'div',
        { style: { maxWidth: 1000 } },
        _react2.default.createElement(_reactGoogleCharts2.default, {
          className: 'charts',
          width: 180,
          height: 100,
          chartType: 'AreaChart',
          loader: _react2.default.createElement(
            'div',
            null,
            'Loading Chart'
          ),
          data: [['Data', 'Values'], [arrayTimes[0], arrayValues[0]], [arrayTimes[1] || [], arrayValues[10]], [arrayTimes[20] || [], arrayValues[20]], [arrayTimes[30] || [], arrayValues[30]], [arrayTimes[40] || [], arrayValues[40]], [arrayTimes[50] || [], arrayValues[50]], [arrayTimes[60] || [], arrayValues[60]], [arrayTimes[70] || [], arrayValues[70]], [arrayTimes[80] || [], arrayValues[80]], [arrayTimes[90] || [], arrayValues[90]], [arrayTimes[100] || [], arrayValues[100]], [arrayTimes[110] || [], arrayValues[110]], [arrayTimes[120] || [], arrayValues[120]]],
          options: {
            legend: 'none',
            chart: {}
          }
        })
      )
    ) : _react2.default.createElement(
      'p',
      null,
      'Please Wait....'
    )
  );
}
exports.default = GethCharts;