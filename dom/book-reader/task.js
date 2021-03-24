'use strict'

const sizes = document.querySelectorAll('.book__control .font-size');
const book = document.getElementById('book');

const colors = document.querySelectorAll('.book__control_color .color');
const colorsBg = document.querySelectorAll('.book__control_background .color');

function hideAllActiveFontSizes() {
    let activeFontSizes = document.getElementsByClassName('font-size_active');
    for (let i of activeFontSizes) {
        i.classList.remove('font-size_active');
    }
};

function deleteAllActiveColors() {
    let activeColors = document.getElementsByClassName('color_active');
    for (let i of activeColors) {
        i.classList.remove('color_active');
    }
};


[...sizes].forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllActiveFontSizes();
        el.classList.add('font-size_active');

        if (el.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');  
        } else if (el.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
    })
});

[...colors].forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        deleteAllActiveColors();
        el.classList.add('color_active');

        if (el.classList.contains('text_color_black')) {
            book.classList.add('book_color-black');
            book.classList.remove('book_color-gray'); 
            book.classList.remove('book_color-whitesmoke'); 
        } else if (el.classList.contains('text_color_gray')) {
            book.classList.remove('book_color-black');
            book.classList.add('book_color-gray'); 
            book.classList.remove('book_color-whitesmoke');
        } else if (el.classList.contains('text_color_whitesmoke')) {
            book.classList.remove('book_color-black');
            book.classList.remove('book_color-gray'); 
            book.classList.add('book_color-whitesmoke');
        }
    })
});

[...colorsBg].forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        deleteAllActiveColors();
        el.classList.add('color_active');

        if (el.classList.contains('bg_color_black')) {
            book.classList.add('book_bg-black');
            book.classList.remove('book_bg-gray'); 
            book.classList.remove('book_bg-white'); 
        } else if (el.classList.contains('bg_color_gray')) {
            book.classList.remove('book_bg-black');
            book.classList.add('book_bg-gray'); 
            book.classList.remove('book_bg-white');
        } else if (el.classList.contains('bg_color_white')) {
            book.classList.remove('book_bg-black');
            book.classList.remove('book_bg-gray'); 
            book.classList.add('book_bg-white');
        }
    })
});