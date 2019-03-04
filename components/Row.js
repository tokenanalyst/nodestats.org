'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Charts = require('./Charts');

var _Charts2 = _interopRequireDefault(_Charts);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var url = 'http://nodestats.tokenanalyst.io';

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row(props) {
    _classCallCheck(this, Row);

    var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, props));

    _this.text = props.text;
    _this.unit = props.unit;
    _this.metricurl = props.metricurl;
    _this.charturl = props.charturl;
    return _this;
  }

  _createClass(Row, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log(this.state);
      _axios2.default.get(url + this.metricurl).then(function (data) {
        _this2.setState(data);
        console.log(_this2.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'columns is-vcentered row', id: 'gethTest' },
        this.state == null ? _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin chart-spinner' })
        ) : _react2.default.createElement(
          'p',
          null,
          this.state.data[0].mean
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
              this.text,
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
        _react2.default.createElement(
          'div',
          { className: 'column is-4 graph chart' },
          _react2.default.createElement(_Charts2.default, { url: this.charturl })
        ),
        _react2.default.createElement(_Modal2.default, null)
      );
    }
  }]);

  return Row;
}(_react2.default.Component);

exports.default = Row;