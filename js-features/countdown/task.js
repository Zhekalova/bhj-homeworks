'use strict';

const timer = document.getElementById('timer');
let timerStart = timer.textContent;

const countDown = function () {
    if (timerStart === 0) {
        alert('Вы победили в конкурсе!');
        window.location = 'ya.ru';
        clearInterval(timerId);
    } else {
        timerStart--;
        timer.textContent = `00:00:${timerStart >= 10 ? timerStart : "0" + timerStart}`;
    };
};

const timerId = setInterval(countDown, 1000);

