const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const inputNum = document.querySelector(".js-inputNum");
const randomNum = document.querySelector(".js-randomNum");
const point = document.querySelector(".js-point");

let count = 0;

function compareNum(input, random) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
        if (random.includes(input[i])) {
            ball += 1;
        }
        if (input[i] === random[i]) {
            strike += 1;
        }
    }
    if (strike === 3) {
        alert('축하합니다!🎉');
    }
    if (ball === 0) {
        alert('숫자가 하나도 안맞네요 🤢');
    }
    point.innerText = `${strike} Strike ${ball} Ball`;
}

function genRandom() {
    let number = "";
    for (let i = 0; i < 3; i++) {
        const num = Math.floor(Math.random() * 10);
        number += num;
    }
    return number;
}

function paintNumber(text) {
    inputNum.innerText = `Your number is ${text}`;
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
        alert("세자리숫자를 입력해주세요!");
    } else {
        paintNumber(currentValue);
        const randomValue = genRandom();
        randomNum.innerText = `My number is ${randomValue}`;
        compareNum(currentValue, randomValue);
        count += 1;
        if (count === 10) {
            alert('실패입니다😅');
            window.location.reload();
        }
    }
}

function init() {
    alert('3 Strike 도전! 숫자를 입력해주세요!');
    form.addEventListener("submit", handleSubmit);
}
init();