const inputChangerRef = document.querySelector('#font-size-control');
const textSizeRef = document.querySelector('#text');

function changeFontSize(event) {
    textSizeRef.style.fontSize = `${event.currentTarget.value}px`;
};

inputChangerRef.addEventListener('input', changeFontSize);