'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGoogleCharts = require('react-google-charts');

var _reactGoogleCharts2 = _interopRequireDefault(_reactGoogleCharts);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var url = 'http://nodestats.tokenanalyst.io';

var Charts = function (_React$Component) {
  _inherits(Charts, _React$Component);

  function Charts(props) {
    _classCallCheck(this, Charts);

    var _this = _possibleConstructorReturn(this, (Charts.__proto__ || Object.getPrototypeOf(Charts)).call(this, props));

    _this.url = props.url;
    return _this;
  }

  _createClass(Charts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get(url + this.url).then(function (data) {
        _this2.setState(data);
        console.log(_this2.state.data);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state != null) {
        var data = this.state.data;
        var arrayValues = [];
        var arrayTimes = [];
        return _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'div',
            { className: 'chart-box' },
            function () {
              for (var i = 0; i < data.length; i++) {
                arrayValues.push(data[i].value);
                arrayTimes.push(data[i].time.slice(11, 19));
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
                data: [['Time', 'Placeholder'], [arrayTimes[0], arrayValues[0]], [arrayTimes[100] || [], arrayValues[100]], [arrayTimes[200] || [], arrayValues[200]], [arrayTimes[300] || [], arrayValues[300]], [arrayTimes[400] || [], arrayValues[400]], [arrayTimes[500] || [], arrayValues[500]], [arrayTimes[600] || [], arrayValues[600]], [arrayTimes[700] || [], arrayValues[700]], [arrayTimes[800] || [], arrayValues[800]], [arrayTimes[900] || [], arrayValues[900]], [arrayTimes[1000] || [], arrayValues[1000]], [arrayTimes[1100] || [], arrayValues[1100]], [arrayTimes[1200] || [], arrayValues[1200]], [arrayTimes[1300] || [], arrayValues[1300]], [arrayTimes[1400] || [], arrayValues[1400]]],
                options: {
                  legend: 'none',
                  chart: {}
                }

              })
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin chart-spinner' })
        );
      }
    }
  }]);

  return Charts;
}(_react2.default.Component);

exports.default = Charts;