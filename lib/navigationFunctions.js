'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollUp = scrollUp;
exports.scrollDown = scrollDown;
exports.clickTooltip = clickTooltip;
exports.scrollFunction = scrollFunction;
exports.scrollFunction2 = scrollFunction2;
function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function scrollDown() {
  return window.scrollBy(0, 750);
}

function clickTooltip() {
  var allTooltips = document.querySelectorAll('.tooltip');
  for (var i = 0; i < allTooltips.length; i++) {
    return allTooltips[i].classList.toggle('tooltip-mobile');
  }
}
function scrollFunction() {
  if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
    document.getElementById('downArrow').style.display = 'none';
  } else {
    document.getElementById('downArrow').style.display = 'block';
  }
}
function scrollFunction2() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById('upArrow').style.display = 'block';
  } else {
    document.getElementById('upArrow').style.display = 'none';
  }
}