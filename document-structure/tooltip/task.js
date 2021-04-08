'use strict'

const links = document.querySelectorAll('.has-tooltip');
//const tooltip = document.createElement('div');
//tooltip.className = 'tooltip';
//tooltip.style.display = 'block';

[...links].forEach((link) => {
    link.insertAdjacentHTML('afterEnd', `<div class = 'tooltip' style = ''> ${link.getAttribute('title')} </div>`);
    link.addEventListener('click', (e) => {
        e.preventDefault();
        /*if (link.nextSibling.className === 'tooltip') {
            link.nextSibling.remove(); 
        } else {
            tooltip.textContent = link.title;
            link.after(tooltip);
        };*/
        let tooltip = link.nextSibling;
        let positionTooltip = link.getBoundingClientRect();
        tooltip.style.left = positionTooltip.left + 'px';
        tooltip.style.top = positionTooltip.bottom + 'px';
        tooltip.classList.toggle('tooltip_active');
    })
});