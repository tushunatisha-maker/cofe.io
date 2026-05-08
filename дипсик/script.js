function updateTotal() {
    let total = cart.reduce((s, x) => s + x.price, 0);
    // Изменяем стоимость с 100к на 15к
    if(isDeliv && cart.length > 0) total += 15000; 
    document.getElementById('cartTotal').innerText = total.toLocaleString() + ' сум';
}