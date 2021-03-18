'use strict';

const count = document.getElementById('clicker__counter');
let countClicks = count.textContent;

const cookie = document.getElementById('cookie');

const speed = document.getElementById('clicker__speed');
let timeFirst = 0;

cookie.onclick = () => {
    countClicks++;
    count.textContent = countClicks;
    if (countClicks % 2 === 0) {
        cookie.width = 200;
        timeFirst = (new Date().getTime());
    } else {
        cookie.width = 220;
        speed.textContent = (1000 / ((new Date()).getTime() - timeFirst)).toFixed(2);
    };
};