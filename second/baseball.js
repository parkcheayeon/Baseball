const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const user = document.querySelector(".userNumber");
const random = document.querySelector(".randomNumber");
const score = document.querySelector(".score");
const over = document.querySelector(".over");
const explain = document.querySelector(".explain");

let count = 0;

const HIDING_CN = "hiding";

function compareNumber(cur, ran) {
    user.innerText = `Your number is ${cur}`;
    random.innerText = `MY number is ${ran}`;
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
        if (ran.includes(cur[i])) {
            ball += 1;
        }
        if (ran[i] === cur[i]) {
            strike += 1;
        }
    }
    score.innerText = `${strike} strike ${ball} ball`;
    if (ball === 0) {
        alert("숫자가 한개도 안맞네요")
    }
}

function makeNumber() {
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

function numberSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    input.value = "";
    if (!isNumber(currentValue)) {
        alert("세자리 수를 입력해주세요!");
    } else {
        const randomNumber = makeNumber();
        compareNumber(currentValue, randomNumber);
        count += 1;
        if (count === 10) {
            form.classList.add(HIDING_CN);
            user.classList.add(HIDING_CN);
            random.classList.add(HIDING_CN);
            score.classList.add(HIDING_CN);
            explain.classList.add(HIDING_CN);
            over.innerText = "GAME OVER";
        }
    }
}

function init() {
    form.addEventListener("submit", numberSubmit);
}
init();