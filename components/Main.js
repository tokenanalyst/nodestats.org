'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ParityRow = require('./ParityRow');

var _ParityRow2 = _interopRequireDefault(_ParityRow);

var _GethRow = require('./GethRow');

var _GethRow2 = _interopRequireDefault(_GethRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import axios from 'axios'; for later


var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'div',
          { className: 'columns' },
          _react2.default.createElement('div', { className: 'page-divide' }),
          _react2.default.createElement(
            'div',
            { className: 'columns column is-8 is-offset-2 is-mobile is-tablet main-box' },
            _react2.default.createElement(
              'div',
              { className: 'column is-6' },
              _react2.default.createElement(
                'div',
                { className: 'content has-text-centered company-name' },
                _react2.default.createElement(
                  'h2',
                  { className: '', id: 'bar' },
                  'Parity'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'content has-text-centered node-type' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Full Node (1 hr avg)'
                )
              ),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'column is-6 geth' },
              _react2.default.createElement(
                'div',
                { className: 'content has-text-centered company-name' },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Geth'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'content has-text-centered node-type not-used' },
                _react2.default.createElement(
                  'p',
                  { className: '' },
                  'Full Node (1 hr avg)'
                )
              ),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null)
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'columns' },
          _react2.default.createElement(
            'div',
            { className: 'columns column is-8 is-offset-2 is-mobile' },
            _react2.default.createElement(
              'div',
              { className: 'column is-6' },
              _react2.default.createElement(
                'div',
                { className: 'content has-text-centered node-type' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Fast Node (1 hr avg)'
                )
              ),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null),
              _react2.default.createElement(_ParityRow2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'column is-6' },
              _react2.default.createElement(
                'div',
                { className: 'content has-text-centered node-type not-used' },
                _react2.default.createElement(
                  'p',
                  { className: 'white' },
                  'Full Node (1 hr avg)'
                )
              ),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null),
              _react2.default.createElement(_GethRow2.default, null)
            )
          )
        ),
        _react2.default.createElement(
          'footer',
          { className: 'footer' },
          _react2.default.createElement(
            'div',
            { className: 'content has-text-centered' },
            _react2.default.createElement(
              'p',
              null,
              'Created by TokenAnalyst'
            )
          )
        )
      );
    }
  }]);

  return Main;
}(_react2.default.Component);

exports.default = Main;