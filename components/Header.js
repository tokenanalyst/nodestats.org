'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: 'openBurger',
    value: function openBurger() {
      var x = document.getElementById('menu');
      x.classList.toggle('is-active');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar', role: 'navigation', 'aria-label': 'main navigation' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-brand' },
          _react2.default.createElement(
            'a',
            { role: 'button', className: 'navbar-burger burger', 'aria-label': 'menu', 'aria-expanded': 'false', onClick: this.openBurger },
            _react2.default.createElement('span', { 'aria-hidden': 'true' }),
            _react2.default.createElement('span', { 'aria-hidden': 'true' }),
            _react2.default.createElement('span', { 'aria-hidden': 'true' })
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'menu', className: 'navbar-menu' },
          _react2.default.createElement(
            'div',
            { className: 'navbar-start' },
            _react2.default.createElement(
              'a',
              { href: '#', className: 'navbar-item Bitmex-link' },
              'Bitmex'
            ),
            _react2.default.createElement(
              'span',
              { className: 'navbar-item line' },
              '|'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'navbar-item TokenAnalyst-link' },
              'TokenAnalyst'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'navbar-item is-centered' },
            _react2.default.createElement(
              'h1',
              null,
              'Nodestats.org'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'navbar-end container is-vcentered' },
            _react2.default.createElement(
              'h3',
              { className: 'button navbar-item' },
              'About/info'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;