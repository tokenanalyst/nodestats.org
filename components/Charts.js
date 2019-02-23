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

var Charts = function (_React$Component) {
  _inherits(Charts, _React$Component);

  function Charts(props) {
    _classCallCheck(this, Charts);

    var _this = _possibleConstructorReturn(this, (Charts.__proto__ || Object.getPrototypeOf(Charts)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Charts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/api/nodestats').then(function (result) {
        return _this2.setState({ test: result.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var test = this.state.test;
      return _react2.default.createElement(
        'section',
        null,
        test ? _react2.default.createElement(
          'div',
          { className: 'chart-box' },
          _react2.default.createElement(
            'div',
            { style: { maxWidth: 900 } },
            _react2.default.createElement(_reactGoogleCharts2.default, {
              width: 80,
              height: 50,
              chartType: 'ColumnChart',
              loader: _react2.default.createElement(
                'div',
                null,
                'Loading Chart'
              ),
              data: [['Test', 'Geth', 'Parity'], ['test 1, 1', 20, 88], ['test 2, 2', 45, 133]],
              options: {
                title: 'Test Chart',

                // tooltip: {isHtml: true},
                legend: 'none',
                chartArea: { width: '200%', height: '100%' },
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
        ) : _react2.default.createElement(
          'p',
          null,
          'Please Wait...'
        )
      );
    }
  }]);

  return Charts;
}(_react2.default.Component);

exports.default = Charts;