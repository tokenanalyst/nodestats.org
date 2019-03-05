"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Modal = require("./Modal");

var _Modal2 = _interopRequireDefault(_Modal);

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
    key: "openBurger",
    value: function openBurger() {
      var burger = document.getElementById("menu");
      var burgerButton = document.getElementById("burgerButton");
      burger.classList.toggle("is-active");
      burgerButton.classList.toggle("is-active");
    }
  }, {
    key: "openModal",
    value: function openModal() {
      var modal = document.getElementById("modal");
      modal.classList.toggle("is-active");
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "nav",
        { className: "navbar", role: "navigation", "aria-label": "main navigation" },
        _react2.default.createElement(
          "div",
          { className: "navbar-brand" },
          _react2.default.createElement("img", {
            className: "logo",
            src: "/images/Screenshot 2019-03-03 at 11.42.30.png"
          }),
          _react2.default.createElement(
            "a",
            {
              role: "button",
              className: "navbar-burger burger",
              "aria-label": "menu",
              "aria-expanded": "false",
              id: "burgerButton",
              onClick: this.openBurger,
              target: "menu"
            },
            _react2.default.createElement("span", { "aria-hidden": "true" }),
            _react2.default.createElement("span", { "aria-hidden": "true" }),
            _react2.default.createElement("span", { "aria-hidden": "true" })
          )
        ),
        _react2.default.createElement(
          "div",
          { id: "menu", className: "navbar-menu" },
          _react2.default.createElement(
            "div",
            { className: "navbar-end" },
            _react2.default.createElement(
              "div",
              { className: "navbar-item links" },
              _react2.default.createElement(
                "a",
                { href: "#", className: "Bitmex-link" },
                "Bitmex"
              ),
              _react2.default.createElement(
                "span",
                { className: "line" },
                "|"
              ),
              _react2.default.createElement(
                "a",
                { href: "#", className: "TokenAnalyst-link" },
                "TokenAnalyst"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "is-vcentered button-box is-centered-mobile" },
              _react2.default.createElement(
                "button",
                { className: "button navbar-item", onClick: this.openModal },
                "About/info"
              )
            )
          )
        ),
        _react2.default.createElement(_Modal2.default, null)
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;