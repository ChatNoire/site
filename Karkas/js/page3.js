let shoppcart = localStorage.getItem("shoppcart");
if (shoppcart) {
    shoppcart = JSON.parse(shoppcart);
} else {
    shoppcart = [];
}

const item3 = {id: 3, title: "Джазовки", amount: 1, price: 100};

const toCart = document.getElementById("add-cart-btn");
toCart.onclick = function () {
    const cartItem = shoppcart.find(item => item.id === item3.id);
    if (cartItem) {
        cartItem.amount += 1;
    } else {
        shoppcart.push(item3);
    }
    const shoppcartStr = JSON.stringify(shoppcart);
    localStorage.setItem("shoppcart", shoppcartStr);
}