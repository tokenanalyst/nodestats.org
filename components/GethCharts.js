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
  var chartData = _ref.chartData,
      unit = _ref.unit;

  var arrayValues = [];
  var arrayTimes = [];
  return _react2.default.createElement(
    'section',
    null,
    chartData ? _react2.default.createElement(
      'div',
      { className: 'chart-box' },
      function () {
        for (var i = 0; i < chartData.length; i++) {
          arrayValues.push(chartData[i].value);
          arrayTimes.push(chartData[i].time.slice(11, 19));
        }
      }(),
      _react2.default.createElement(
        'div',
        { style: { maxWidth: 1000 } },
        _react2.default.createElement(_reactGoogleCharts2.default, {
          className: 'charts',
          width: 180,
          height: 80,
          chartType: 'AreaChart',
          loader: _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin chart-spinner' })
          ),
          data: [['Time', unit], [arrayTimes[0], arrayValues[0]], [arrayTimes[100] || [], arrayValues[100]], [arrayTimes[200] || [], arrayValues[200]], [arrayTimes[300] || [], arrayValues[300]], [arrayTimes[400] || [], arrayValues[400]], [arrayTimes[500] || [], arrayValues[500]], [arrayTimes[600] || [], arrayValues[600]], [arrayTimes[700] || [], arrayValues[700]], [arrayTimes[800] || [], arrayValues[800]], [arrayTimes[900] || [], arrayValues[900]], [arrayTimes[1000] || [], arrayValues[1000]], [arrayTimes[1100] || [], arrayValues[1100]], [arrayTimes[1200] || [], arrayValues[1200]], [arrayTimes[1300] || [], arrayValues[1300]], [arrayTimes[1400] || [], arrayValues[1400]]],
          options: {
            legend: 'none',
            chart: {}
          }

        })
      )
    ) : _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin chart-spinner' })
    )
  );
}
exports.default = GethCharts;