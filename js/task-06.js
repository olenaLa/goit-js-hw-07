// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
const inputEl = document.querySelector('#validation-input');
const inputValidLength = Number(inputEl.dataset.length);
inputEl.addEventListener(`blur`, onInputBlur);

function onInputBlur() {
  if (inputEl.value.length === inputValidLength) {
    inputEl.classList.remove(`invalid`);
    inputEl.classList.add(`valid`);
  } else {
    inputEl.classList.remove(`valid`);
    inputEl.classList.add(`invalid`);
  }
}
