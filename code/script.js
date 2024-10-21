// Cart management
let cart = [];

// Function to add item to cart
function addToCart(productName, price) {
    const product = { name: productName, price: price, quantity: 1 };
    cart.push(product);
    alert(`${product.productName} added to cart`);
    updateCart();
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to update cart table
function updateCart() {
    const cartTable = document.querySelector('#cart-items tbody');
    cartTable.innerHTML = '';
    cart.forEach((item, index) => {
        const row = `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button></td>
            </tr>
        `;
        cartTable.innerHTML += row;
    });
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCart();
}
