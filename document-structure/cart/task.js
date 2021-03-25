'use strict'

const cartList = document.querySelector('.cart__products');
const controls = document.querySelectorAll('.product__quantity-control');
const addBtns = document.querySelectorAll('.product__add');

[...controls].forEach((control) => {
    control.addEventListener('click', () => {
        let quantity = control.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        if (control.classList.contains('product__quantity-control_dec') && quantity.innerText > 1) {
            quantity.innerText--;
        } else if (control.classList.contains('product__quantity-control_inc')) {
            quantity.innerText++;
        }
    });
});

[...addBtns].forEach((add) => {
    add.addEventListener('click', () => {
        addCart(add);
    });
});

function addCart(element, quantity) {
    const prodId = element.closest('.product').dataset.id;
    const prodImage = element.closest('.product').querySelector('.product__image');
    const cartProdQnt = cartList.querySelector(`.cart__product[data-id="${prodId}"] .cart__product-count`);
    const prodQnt = quantity ? quantity : element.closest('.product').querySelector('.product__quantity-value').innerText;
    if (!cartList.hasChildNodes()) {
        cartList.closest('.cart').style.display = 'block';
    }
    if (cartProdQnt) {
        cartProdQnt.innerText = Number(cartProdQnt.innerText) + Number(prodQnt);
    } else {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart__product';
        cartItem.dataset.id = prodId;
        cartItem.innerHTML = `<img class="cart__product-image" src="${prodImage.src}">
                            <div class="cart__product-count">${prodQnt}</div>`;
        cartList.appendChild(cartItem);
    }
}
