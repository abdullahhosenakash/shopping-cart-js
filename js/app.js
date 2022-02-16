function priceUpdate(product, price, isIncreasing, isPhone) {
    const quantityText = document.getElementById(product);
    const quantity = parseInt(quantityText.value);
    const updatePriceText = document.getElementById(price);
    let updatePrice = parseInt(updatePriceText.innerText);
    let newQuantity = quantity;
    if (isIncreasing) {
        newQuantity = quantity + 1;
    }
    else if (quantity > 0) {
        newQuantity = quantity - 1;

    }
    quantityText.value = newQuantity;
    if (isPhone) {
        updatePrice = newQuantity * 1219;
        updatePriceText.innerText = updatePrice;
    }
    else {
        updatePrice = newQuantity * 59
        updatePriceText.innerText = updatePrice;
    }

    calculateTotal();
}

function getInputValue(product) {
    const phoneInput = parseInt(document.getElementById(product).value);
    return phoneInput;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone-quantity') * 1219;
    const caseTotal = getInputValue('case-quantity') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const totalPrice = subtotal + tax;
    document.getElementById('subtotal-price').innerText = subtotal;
    document.getElementById('tax-price').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    return subtotal;
}

document.getElementById('phone-price-plus').addEventListener('click', function hello() {
    priceUpdate('phone-quantity', 'phone-total-price', true, true);
});

document.getElementById('phone-price-minus').addEventListener('click', function () {
    priceUpdate('phone-quantity', 'phone-total-price', false, true);
});

document.getElementById('case-price-plus').addEventListener('click', function () {
    priceUpdate('case-quantity', 'case-total-price', true, false);
});

document.getElementById('case-price-minus').addEventListener('click', function () {
    priceUpdate('case-quantity', 'case-total-price', false, false);
});

