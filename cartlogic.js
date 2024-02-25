// Initialize quantities
let cquantity = 0;
let hquantity = 0;

// Increment and decrement functions for each product
function cincrement() {
    cquantity++;
    document.getElementById('quantity').innerText = cquantity;
    fillQuantities();
    total();
}

function cdecrement() {
    if (cquantity > 0) {
        cquantity--;
        document.getElementById('quantity').innerText = cquantity;
    }
    fillQuantities();
    total();
}

function hincrement() {
    hquantity++;
    document.getElementById('quantity').innerText = hquantity;
    fillQuantities();
    total();
}

function hdecrement() {
    if (hquantity > 0) {
        hquantity--;
        document.getElementById('quantity').innerText = hquantity;
    }
    fillQuantities();
    total();
}

// Add to cart function
function addToCart(product, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    cart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added ' + quantity + ' item(s) of ' + product + ' to the cart.');
}

// Add to cart functions for each product
function caddToCart() {
    addToCart('honey comb', cquantity);
}

function haddToCart() {
    addToCart('honey', hquantity);
}





function incrementQuantity(product) {
    if (product === 'honey') {
        hquantity++;
    } else if (product === 'comb') {
        cquantity++;
    }
    fillQuantities();
    total();
}

function decrementQuantity(product) {
    if (product === 'honey' && hquantity > 0) {
        hquantity--;
    } else if (product === 'comb' && cquantity > 0) {
        cquantity--;
    }
    fillQuantities();
    total();
}

function fillQuantities() {
    document.getElementById('honey').innerText = hquantity;
    document.getElementById('comb').innerText = cquantity;
}

function total() {
    let honeyPrice = 120;
    let combPrice = 100;
    let totalPrice = hquantity * honeyPrice + cquantity * combPrice;
    document.getElementById('total').innerText = totalPrice;
}

  window.onload = function() {
            fillQuantities();
            total();
        };