import JustValidate from 'just-validate';
const validFb = new JustValidate('.fb__form')
const $form = document.querySelector('.fb__form')
const $inputs = document.querySelectorAll('.fb__input')

import Inputmask from "inputmask";
let $inputTel = document?.querySelector("input[type='tel']");
const mask = new Inputmask('+7 (999) 999-99-99');
mask.mask($inputTel);


validFb
  .addField('.fb__input-name', [
    {
      rule: 'required',
      errorMessage: 'Ведите имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Слишком короткое имя',
    },
    {
      rule: 'customRegexp',
      value: /^[a-z а-я]+$/gi,
      errorMessage: 'Недопустимый формат',
    }]
  )

  .addField('.fb__input-email', [
    {
      rule: 'required',
      errorMessage: 'Введите адрес почты',
    },
    {
      rule: 'email',
      errorMessage: 'Проверьте правильность заполнения',
    }]
  )

  .addField('.fb__input-phone', [
    {
      rule: 'function',
      validator: function () {
        const phone = $inputTel.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите номер телефона',
    },
  ]
  )

  .onSuccess(() => {
    $form.submit();
    $inputs.forEach(inp => {
      inp.value = '';
    })
  });



