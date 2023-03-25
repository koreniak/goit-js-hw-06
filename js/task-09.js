function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorRef = document.querySelector('button.change-color');
const bodyRef = document.querySelector('body');
const nameColorRef = document.querySelector('span.color');

function onChangeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  nameColorRef.textContent = getRandomHexColor();
};

changeColorRef.addEventListener('click', onChangeColor);