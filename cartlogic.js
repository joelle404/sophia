// Initialize quantities
let cquantity = 0;
let hquantity = 0;
let totall = 0;
<<<<<<< HEAD

// Get the previous quantities from localStorage
let previousCQuantity = localStorage.getItem("cquantity");
let previousHQuantity = localStorage.getItem("hquantity");
=======
let previousCQuantity = localStorage.getItem("cquantity");
let previousHQuantity = localStorage.getItem("hquantity");

>>>>>>> a146dcf8ca84e5d47d157b10471a8773a2710667
if (previousCQuantity) {
    cquantity = parseInt(previousCQuantity);
}
if (previousHQuantity) {
    hquantity = parseInt(previousHQuantity);
}

// Increment and decrement functions for each product
function cincrement() {
    cquantity++;
    document.getElementById('quantity').innerText = cquantity;
    fillQuantities();
    calculateTotal();
}

function cdecrement() {
    if (cquantity > 0) {
        cquantity--;
        document.getElementById('quantity').innerText = cquantity;
    }
    fillQuantities();
    calculateTotal();
}

function hincrement() {
    hquantity++;
    document.getElementById('quantity').innerText = hquantity;
    fillQuantities();
    calculateTotal();
}

function hdecrement() {
    if (hquantity > 0) {
        hquantity--;
        document.getElementById('quantity').innerText = hquantity;
    }
    fillQuantities();
    calculateTotal();
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
    let honeyPrice = 120;
    let combPrice = 100;

    let totalPrice = hquantity * honeyPrice + cquantity * combPrice;

    totall = totall + totalPrice; 
    document.getElementById('total').innerText = totall;
    localStorage.setItem("mytime", totall);
}

window.onload = function() {
    fillQuantities();
    calculateTotal();
};
