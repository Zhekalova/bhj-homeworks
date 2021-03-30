'use strict'

const links = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.style.display = 'block';

[...links].forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (link.nextSibling.className === 'tooltip') {
            link.nextSibling.remove(); 
        } else {
            tooltip.textContent = link.title;
            link.after(tooltip);
        };
    })
});