let products = [
    { id: 1, name: 'FlashDisk', price: 50 },
    { id: 2, name: 'Earphone', price: 45 }
];

let cartItems = [];

function renderProducts() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Harga: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
        `;
        productList.appendChild(productDiv);
    });
}

function renderCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${products.find(product => product.id === item).name} - $${products.find(product => product.id === item).price}`;
        cartElement.appendChild(li);
    });

    calculateTotal();
}

function addToCart(id) {
    cartItems.push(id);
    renderCart();
}

function removeFromCart(id) {
    const index = cartItems.indexOf(id);
    if (index !== -1) {
        cartItems.splice(index, 1);
        renderCart();
    }
}

function calculateTotal() {
    const total = cartItems.reduce((acc, current) => {
        const product = products.find(product => product.id === current);
        return acc + product.price;
    }, 0);

    document.getElementById('total').value = `$${total}`;
}

renderProducts();

const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Pembayaran sebesar ' + document.getElementById('total').value + ' berhasil dibuat!');
});