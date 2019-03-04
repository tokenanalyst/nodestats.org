



export function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
export function scrollDown() {
  return window.scrollBy(0, 1000);
}

// export function clickTooltip() {
//   const allTooltips = document.querySelectorAll('.tooltip');
//   for (let i = 0; i < allTooltips.length; i++) {
//     allTooltips[i].classList.toggle('tooltip-mobile');
//   }
// }
export function scrollFunction() {
  const down = document.getElementById('downArrow');
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    down.style.display = 'none';
  } else {
    down.style.display = 'block';
  }
}
export function scrollFunction2() {
  const up = document.getElementById('upArrow');
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    up.style.display = 'block';
  } else {
    up.style.display = 'none';
  }
}
