console.log(`Hello.js`);
let name = `Roma`;
let age = `110`;
let button = document.getElementById(`BTN`);
let button2 = document.getElementById('BTN2');
let title = document.getElementById(`title`);
let aga = document.getElementById(`aga`);
title.textContent = `Hello`;
button.onclick = function () {
    title.textContent = `How are you?`;
    aga.textContent = Number(aga.textContent) + 1;
}
button2.onclick = function () {
    aga1.textContent = Number(aga1.textContent) + 5;
}