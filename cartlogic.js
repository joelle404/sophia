// Initialize quantities
let cquantity = 0;
let hquantity = 0;
let totall = 0;


let previousCQuantity = localStorage.getItem("cquantity");
let previousHQuantity = localStorage.getItem("hquantity");

if (previousCQuantity) {
    cquantity = parseInt(previousCQuantity);
}
if (previousHQuantity) {
    hquantity = parseInt(previousHQuantity);
}

// Add to cart function
function addToCart(product, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    cart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added ' + quantity + ' item(s) of ' + product + ' to the cart.');
}

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
    calculateTotal();
}

function decrementQuantity(product) {
    if (product === 'honey' && hquantity > 0) {
        hquantity--;
    } else if (product === 'comb' && cquantity > 0) {
        cquantity--;
    }
    fillQuantities();
    calculateTotal();
}

function fillQuantities() {
    document.getElementById('honey').innerText = hquantity;
    document.getElementById('comb').innerText = cquantity;
    localStorage.setItem("cquantity", cquantity);
    localStorage.setItem("hquantity", hquantity);
}

function calculateTotal() {
    let honeyPrice = 150;
    let combPrice = 180;

    let totalPrice = hquantity * honeyPrice + cquantity * combPrice;

    totall = totalPrice;

    document.getElementById('total').innerText = totall;
    localStorage.setItem("mytime", totall);
}

window.onload = function() {
    fillQuantities();
    calculateTotal();
};
