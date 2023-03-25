
const valueEl = document.querySelector("#value");
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

function changeDec() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

function changeInc() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", changeDec);
incrementBtnEl.addEventListener("click", changeInc);
