// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const btnRenderEl = document.querySelector('button[data-action="render"]');
const btnDestroyEl = document.querySelector('button[data-action="destroy"]');
const inputEl = document.querySelector('#controls input');
const boxesWrapperEl = document.querySelector('#boxes');

const getRandomColor = () => {
  const firstRandomColor = Math.round(Math.random() * 255);
  const secondRandomColor = Math.round(Math.random() * 255);
  const thirdRandomColor = Math.round(Math.random() * 255);
  return `rgb(${firstRandomColor},${secondRandomColor},${thirdRandomColor})`;
};

function createBoxes(amount) {
  const array = new Array(amount);
  const boxes = [...array];
  const boxesMarkup = boxes
    .map(
      (element, i) =>
        `<div style="height: ${i * 10 + 30}px; width: ${i * 10 + 30}px; background-color:${getRandomColor()};"></div>`,
    )
    .join('');
  boxesWrapperEl.innerHTML = boxesMarkup;
}

btnRenderEl.addEventListener('click', function () {
  createBoxes(Number(inputEl.value));
});

function destroyBoxes() {
  boxesWrapperEl.innerHTML = '';
  inputEl.value = '';
}

btnDestroyEl.addEventListener('click', destroyBoxes);