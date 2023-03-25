const inputRef = document.querySelector("#validation-input");

function controlLength(event) {
    event.currentTarget.value.length === Number(inputRef.dataset.length) ?
    inputRef.classList.add('valid') :
    inputRef.classList.add('invalid');
}

inputRef.addEventListener('blur', controlLength);