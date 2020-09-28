// Напиши скрипт який, при наборі тексту в інпут input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.
const refs = {
  input: document.querySelector('#name-input'),
  nameEl: document.querySelector('#name-output'),
};

refs.input.addEventListener(`input`, inputChange);

function inputChange(event) {
  event.currentTarget.value !== ``
    ? (refs.nameEl.textContent = event.currentTarget.value)
    : (refs.nameEl.textContent = `незнайомець`);
}
