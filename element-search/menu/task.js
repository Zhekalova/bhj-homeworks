function hideAllSubmenus() {
    let subs = document.getElementsByClassName("menu_active");
    for (let sub of subs) {
        sub.classList.remove("menu_active");
    }
}

let menuLinks = document.getElementsByClassName("menu__link");
for (let link of menuLinks) {
    let subMenu = link.closest(".menu__item").getElementsByClassName("menu_sub");
    subMenu = (subMenu.length) ? subMenu[0] : null;
    if (subMenu !== null) {
        link.href = "javascript:void(0)";
        link.onclick = () => {
            hideAllSubmenus();
            subMenu.classList.add("menu_active");
            
        }
    }
}