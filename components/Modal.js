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
      { className: 'modal-card' },
      _react2.default.createElement(
        'header',
        { className: 'modal-card-head' },
        _react2.default.createElement(
          'p',
          { className: 'modal-card-title' },
          'Modal title'
        ),
        _react2.default.createElement('button', { className: 'delete', 'aria-label': 'close', onClick: closeModal })
      ),
      _react2.default.createElement(
        'section',
        { className: 'modal-card-body' },
        _react2.default.createElement(
          'p',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        )
      ),
      _react2.default.createElement('footer', { className: 'modal-card-foot' })
    ),
    _react2.default.createElement('button', { className: 'modal-close is-large', 'aria-label': 'close', id: 'closeModal', onClick: closeModal })
  );
}

exports.default = Modal;