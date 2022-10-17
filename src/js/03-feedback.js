const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

if (localStorage.getItem('feedback-form-state')) {
  console.log('Восстанавливаю данные формы');
  form.elements.email.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  form.elements.message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
} else console.log('Данных для восстановления формы нет');

const formInput = () => {
  console.log('Фиксирую ввод данных');
  let email = form.elements.email.value;
  let message = form.elements.message.value;
  const savedFormData = {
    email,
    message,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(savedFormData));
};

const formSubmit = event => {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Все поля формы должны быть заполнены!');
    return;
  }
  let email = form.elements.email.value;
  let message = form.elements.message.value;
  const savedFormData = {
    email,
    message,
  };
  console.log('Отправляю данные формы');
  console.log(savedFormData);
  form.reset();
  localStorage.removeItem('feedback-form-state');
};

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(formInput, 500));
