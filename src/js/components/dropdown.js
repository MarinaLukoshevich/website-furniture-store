const dropdown = document.querySelector('.dropdown');
const btnOpen = document.querySelector('.btn-categ');

btnOpen.onclick = (btn) => {
  btn.preventDefault(); // отменить стандартные действия кнопки
  dropdown.classList.add('dropdown--active')
}

// при клике на элементы !=.form-top и ее потомкам убрать список
document.onclick = (el) => {
  if (!el.target.closest('.form-top')) {
    dropdown.classList.remove('dropdown--active')
  }
};






