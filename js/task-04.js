// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterEl = counterValue.textContent;
counterEl = 0;

incrementBtn.addEventListener("click", () => {
  counterEl += 1;
  counterValue.textContent = counterEl;
});

decrementBtn.addEventListener("click", () => {
  counterEl -= 1;
  counterValue.textContent = counterEl;
});
