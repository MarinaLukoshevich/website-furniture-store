const dropdown = document.querySelector('.dropdown');
const links = document.querySelectorAll('.dropdown__link');
const btnOpen = document.querySelector('.btn-categ');
const btnClose = document.querySelector('.dropdown__btn');


btnOpen.onclick = (btn) => {
  btn.preventDefault(); // отменить стандартные действия кнопки
  dropdown.classList.add('dropdown--active')
}

btnClose.onclick = (btn) => {
  btn.preventDefault();
  dropdown.classList.remove('dropdown--active')
}

links.forEach((link) => {
  link.onclick = () => {
    dropdown.classList.remove('dropdown--active')
  }
})
