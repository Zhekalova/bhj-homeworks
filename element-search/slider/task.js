'use strict'

function sliderNext() {
    let currentSlide = document.getElementsByClassName("slider__item_active")[0];
    currentSlide.classList.remove("slider__item_active");
    if (currentSlide.nextElementSibling !== null) {
        currentSlide.nextElementSibling.classList.add("slider__item_active");
    } else {
        let slides = document.getElementsByClassName("slider__item");
        slides[0].classList.add("slider__item_active");
    }
}

function sliderPrev() {
    let currentSlide = document.getElementsByClassName("slider__item_active")[0];
    currentSlide.classList.remove("slider__item_active");
    if (currentSlide.previousElementSibling !== null) {
        currentSlide.previousElementSibling.classList.add("slider__item_active");
    } else {
        let slides = document.getElementsByClassName("slider__item");
        slides[slides.length - 1].classList.add("slider__item_active");
    }
}

function selectSliderDot(dot) {
    let dots = Array.prototype.slice.call(document.getElementsByClassName('slider__dot'));
    let index = dots.indexOf(dot);
    
    let activeDots = document.getElementsByClassName("slider__dot_active");
    if (activeDots.length) {
        activeDots[0].classList.remove("slider__dot_active");
    }
    document.getElementsByClassName("slider__item_active")[0].classList.remove("slider__item_active");

    let slides = document.getElementsByClassName("slider__item");
    slides[index].classList.add("slider__item_active");
    dot.classList.add("slider__dot_active");
}

document.getElementsByClassName("slider__arrow_next")[0].onclick = () => sliderNext();
document.getElementsByClassName("slider__arrow_prev")[0].onclick = () => sliderPrev();

let dots = document.getElementsByClassName("slider__dot");
for (let dot of dots) {
    dot.onclick = () => selectSliderDot(dot);
}