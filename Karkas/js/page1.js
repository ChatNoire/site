let shoppcart = localStorage.getItem("shoppcart");
if (shoppcart) {
    shoppcart = JSON.parse(shoppcart);
} else {
    shoppcart = [];
}

const item1 = {id: 1, title: "Получешкан", amount: 1, price: 100};

const toCart = document.getElementById("add-cart-btn");
toCart.onclick = function () {
    const cartItem = shoppcart.find(item => item.id === item1.id);
    if (cartItem) {
        cartItem.amount += 1;
    } else {
        shoppcart.push(item1);
    }
    const shoppcartStr = JSON.stringify(shoppcart);
    localStorage.setItem("shoppcart", shoppcartStr);
}