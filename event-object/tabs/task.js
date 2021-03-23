'use strict'

const tabs = [...document.getElementsByClassName('tab')];
const content = [...document.getElementsByClassName('tab__content')];

function hideAllContents() {
    let contents = document.getElementsByClassName('tab__content_active');
    for (let i of contents) {
        i.classList.remove('tab__content_active');
    }
} 

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        hideAllContents();
        tab.classList.add('tab_active');
        let currentTab = tabs.indexOf(tab);
        let currentContent = content[currentTab];
        currentContent.classList.add('tab__content_active');
    })
})