const inputRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

function changeInput(event) {
    event.currentTarget.value === '' ?
    outputNameRef.textContent = 'Anonymous' :
    outputNameRef.textContent = event.currentTarget.value;
};

inputRef.addEventListener('input', changeInput);