function showModal(id) {
    document.getElementById(id).classList.add("modal_active");
}

showModal("modal_main");

let closeButtons = document.getElementsByClassName("modal__close");
for (let button of closeButtons) {
    button.onclick = () => {
        button.closest(".modal").classList.remove("modal_active");
    }
}

let successButtons = document.getElementsByClassName("show-success");
for (let button of successButtons) {
    button.onclick = () => {
        button.closest(".modal").classList.remove("modal_active");
        showModal("modal_success");
    }
}