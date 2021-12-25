let shoppcart = localStorage.getItem("shoppcart");
if (shoppcart) {
    shoppcart = JSON.parse(shoppcart);
} else {
    shoppcart = [];
}

const item2 = {id: 2, title: "Чешки", amount: 1, price: 100};

const toCart = document.getElementById("add-cart-btn");
toCart.onclick = function () {
    const cartItem = shoppcart.find(item => item.id === item2.id);
    if (cartItem) {
        cartItem.amount += 1;
    } else {
        shoppcart.push(item2);
    }
    const shoppcartStr = JSON.stringify(shoppcart);
    localStorage.setItem("shoppcart", shoppcartStr);
}