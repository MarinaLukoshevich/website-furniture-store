const $elements = document.querySelectorAll('.hover');
console.log($elements);


function hoverTouch() {
  $elements.forEach(el => {
    el.onmouseenter = () => {
      el.classList.add('touch');
      console.log(1);
    }

    el.onmouseleave = () => {
      el.classList.remove('touch');
      console.log(2);
    }
  })
}

if (window.matchMedia('(min-width: 1201px)').matches) {
  console.log(true);
  hoverTouch();
}








