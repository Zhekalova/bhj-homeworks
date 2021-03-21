'use strict'

const slidesCount = document.getElementsByClassName("slider__item").length;

function selectItem(index) {
    let dots = document.getElementsByClassName('slider__dot');
    let slides = document.getElementsByClassName("slider__item");

    let activeSlides = document.getElementsByClassName("slider__item_active");
    if (activeSlides.length) {
        activeSlides[0].classList.remove("slider__item_active");
    }
    let activeDots = document.getElementsByClassName("slider__dot_active");
    if (activeDots.length) {
        activeDots[0].classList.remove("slider__dot_active");
    }

    slides[index].classList.add("slider__item_active");
    dots[index].classList.add("slider__dot_active");
}

function getCurrentSlideIndex() {
    let currentSlide = document.getElementsByClassName("slider__item_active")[0];
    let slides = Array.prototype.slice.call(document.getElementsByClassName('slider__item'));
    return slides.indexOf(currentSlide);
}

function sliderNext() {
    let index = getCurrentSlideIndex();

    if (index < slidesCount - 1) {
        selectItem(index + 1);
    } else {
        selectItem(0);
    }
}

function sliderPrev() {
    let index = getCurrentSlideIndex();

    if (index > 0) {
        selectItem(index - 1);
    } else {
        selectItem(slidesCount - 1);
    }
}

selectItem(0);

document.getElementsByClassName("slider__arrow_next")[0].onclick = () => sliderNext();
document.getElementsByClassName("slider__arrow_prev")[0].onclick = () => sliderPrev();

let dots = document.getElementsByClassName("slider__dot");
for (let index = 0; index < dots.length; index++) {
    dots[index].onclick = () => selectItem(index);
}