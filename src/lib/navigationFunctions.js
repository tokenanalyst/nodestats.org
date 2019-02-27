



export function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
export function scrollDown() {
  return window.scrollBy(0, 750);
}

export function clickTooltip() {
  const allTooltips = document.querySelectorAll('.tooltip');
  for (let i = 0; i < allTooltips.length; i++) {
    return allTooltips[i].classList.toggle('tooltip-mobile');
  }
}
export function scrollFunction() {
  if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
    document.getElementById('downArrow').style.display = 'none';
  } else {
    document.getElementById('downArrow').style.display = 'block';
  }
}
export function scrollFunction2() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById('upArrow').style.display = 'block';
  } else {
    document.getElementById('upArrow').style.display = 'none';
  }
}
