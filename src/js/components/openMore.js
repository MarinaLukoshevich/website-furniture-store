
document.addEventListener('DOMContentLoaded', () => {
  const itemsWrap = document.querySelector('.open-more-wrap');
  const items = document.querySelectorAll('.open-more-item');
  const btn = document.querySelector('.open-more-btn');
  const sectionBest = document.querySelector('.best');
  const tl = gsap.timeline({ paused: true }); //animation

  if (items.length <= 4) {
    removeBtn();
  }

  if (window.matchMedia('(min-width: 1201px)').matches) { // true, если экран >= 1200px
    hideCard(4);
    showBtn(4);
  } else {
    hideCard(6);
    showBtn(6);
  }

  function removeBtn() {
    itemsWrap.style.marginBottom = 0;
    sectionBest.style.paddingBottom = 0;
    btn.style.transform = "scale(0)";
    // btn.style.display = "none"; // используя display = "none" перестает работать плавность кнопки
  }

  function hideCard(countCard) {
    for (let i = countCard; i < items.length; i++) {
      items[i].style.display = "none"; // прячем лишние cards
    }
  }

  function showBtn(countCard) {
    btn.onclick = () => {
      removeBtn();
      tl.play(); // start animation
      for (let i = countCard; i < items.length; i++) {
        items[i].style.display = "flex"; // показать cards
        tl.from(items[i], { opacity: 0, y: -100, scale: 0.5, duration: 0.25, ease: "power1.out" }); //показать cards c анимацией
      };
    }
  }
})








