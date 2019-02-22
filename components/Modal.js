'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function closeModal() {
  var modal = document.getElementById('modal');
  modal.classList.toggle('is-active');
}

function Modal() {
  return _react2.default.createElement(
    'div',
    { className: 'modal', id: 'modal' },
    _react2.default.createElement('div', { className: 'modal-background' }),
    _react2.default.createElement(
      'div',
      { className: 'modal-content' },
      _react2.default.createElement(
        'p',
        null,
        'Hello'
      )
    ),
    _react2.default.createElement('button', { className: 'modal-close is-large', 'aria-label': 'close', id: 'closeModal', onClick: closeModal })
  );
}

exports.default = Modal;