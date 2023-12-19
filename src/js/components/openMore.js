const itemsWrap = document.querySelector('.open-more-wrap');
const items = document.querySelectorAll('.open-more-item');
const btn = document.querySelector('.open-more-btn');

function removeBtn() {
  itemsWrap.style.marginBottom = 0;
  btn.style.display = "none";
}

if (items.length <= 4) {
  removeBtn();
}

// min 1201px to 1920 & more
if (window.matchMedia('(min-width: 1201px)').matches) {
  for (let i = 4; i < items.length; i++) {
    items[i].style.display = "none";
  }

  btn.onclick = () => {
    removeBtn();
    for (let i = 4; i < items.length; i++) {
      items[i].style.display = "flex";
    }
  }
}
// max 1200px
else {
  for (let i = 6; i < items.length; i++) {
    items[i].style.display = "none";
  }

  btn.onclick = () => {
    removeBtn();
    for (let i = 6; i < items.length; i++) {
      items[i].style.display = "flex";
    }
  }
}



