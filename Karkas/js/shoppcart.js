let shoppcart = localStorage.getItem("shoppcart");
if (shoppcart) {
    shoppcart = JSON.parse(shoppcart);
} else {
    shoppcart = [];
}

function hideAll() {
    for (let index = 1; index < 5; index++) {
        const item = document.getElementById("item-" + index);
        const itemClassList = item.classList;
        let hidden = false;
    
        for (const curItem of itemClassList) {
            if (curItem === "hidden-block") hidden = true;
        }
        
        if (!hidden) {
            item.classList.add("hidden-block");
        } 
    }

}

function save() {
    const shoppcartStr = JSON.stringify(shoppcart);
    localStorage.setItem("shoppcart", shoppcartStr);
}

function total() {
    const totalPrice = document.getElementById("total-price");
    let sum = 0;
    for (let index = 0; index < shoppcart.length; index++) {
        const element = shoppcart[index];
        sum += element.amount * element.price;
    }
    totalPrice.textContent = sum;
}

for (let index = 0; index < shoppcart.length; index++) {
    const element = shoppcart[index];
    const id = element.id;
    const shoppcartItem = document.getElementById("item-" + id);
    shoppcartItem.classList.remove("hidden-block");
    const amount = document.getElementById("amount-" + id);
    amount.textContent = element.amount; 
    const plus = document.getElementById("plus-btn-" + id);
    plus.onclick = function () {
        element.amount += 1; 
        const amount = document.getElementById("amount-" + id);
        amount.textContent = element.amount;
        total();
        save();
    }
    const minus = document.getElementById("minus-btn-" + id);
    minus.onclick = function () {
        if (element.amount > 1) {
            element.amount -= 1; 
            const amount = document.getElementById("amount-" + id);
            amount.textContent = element.amount;
            total();
            save();
        }
    }
}

total();

const buyBtn = document.getElementById("buy-btn");
buyBtn.onclick = function () {
    shoppcart = [];
    save();
    total();
    hideAll();
}