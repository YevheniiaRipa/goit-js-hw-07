const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
  const value = event.target.value.trim();

  if (value === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = value;
  }
}
