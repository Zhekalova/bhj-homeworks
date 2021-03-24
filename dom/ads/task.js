'use strict'

const cases = document.querySelectorAll('.rotator .rotator__case');

function changeCase(count) {
    timer = setInterval(() => {
        cases[count].classList.remove('rotator__case_active');
        count = (count >= cases.length - 1) ? 0 : ++count; 
        cases[count].classList.add('rotator__case_active');
        cases[count].style.color = cases[count].getAttribute("data-color");
        clearInterval(timer);
        changeCase(count); 
    }, cases[count].dataset.speed); 
}

changeCase(0);