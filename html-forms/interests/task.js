'use strict'

const checkbox = document.querySelectorAll('.interest input');

function checkDown(el) {
    const elDown = el.closest('li').querySelectorAll('input');
    [...elDown].forEach((check) => {
        check.checked = el.checked;
    });
}

function checkUp(el) {
    const siblings = el.closest('ul').querySelectorAll('input');
    if (el.closest('ul').closest('li')) {
        const parentCheck = el.closest('ul').closest('li').querySelector('input');
        if ([...siblings].every(sibling => sibling.checked)) { 
            parentCheck.checked = true;
            parentCheck.indeterminate = false;
        } else if ([...siblings].some(sibling => sibling.checked)) { 
            parentCheck.checked = false;
            parentCheck.indeterminate = true;
        } else { 
            parentCheck.checked = false;
            parentCheck.indeterminate = false;
        }
        checkUp(parentCheck); 
    }
}

[...checkbox].forEach((el) => {
    el.addEventListener('change', (e) => {
        checkDown(el);
        checkUp(el);
    })
})

