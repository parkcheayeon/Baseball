const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const numberInput = document.querySelector(".number-input");
const numberDisplay = document.querySelector(".number-display");
const gameInfo = document.querySelector(".game-info");
const strikeDisplay = document.querySelector(".strike");
const ballDisPlay = document.querySelector(".ball");
const over = document.querySelector(".over");

const HIDE_CN = "hide";

let count = 0;

function checkNumber(cur, ran) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
        if (cur[i] === ran[i]) {
            strike++;
        }
        if (ran.includes(cur[i])) {
            ball++;
        }
    }
    gameInfo.classList.remove(HIDE_CN);
    strikeDisplay.innerText = strike;
    ballDisPlay.innerText = ball;
    if (strike === 3) {
        alert("축하합니다!");
    }
}

function randomNumber() {
    let number = "";
    for (let i = 0; i < 3; i++) {
        number += Math.floor(Math.random() * 10);
    }
    return number;
}

function isNumber(text) {
    let regExp = /^[0-9]{3}$/;
    return regExp.test(text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    input.value = "";
    if (!isNumber(currentValue)) {
        alert("세자리 숫자를 입력해주세요");
    } else {
        numberInput.innerText = `Your Number is ${currentValue}`;
        const randomValue = randomNumber();
        numberDisplay.innerText = `Random Number is ${randomValue}`;
        checkNumber(currentValue, randomValue);
        count++;
        if (count === 3) {
            form.classList.add(HIDE_CN);
            over.classList.remove(HIDE_CN);
        }
    }
}

function init() {
    form.addEventListener("submit", handleSubmit);
}
init();