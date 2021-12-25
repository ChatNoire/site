let cart = localStorage.getItem("shoppcart");
if (cart) {
    cart = JSON.parse(cart);
    if (cart.length) {
        const shoppcartSize = document.getElementById("shoppcart-size");
        shoppcartSize.textContent = cart.length;
    }
} 
