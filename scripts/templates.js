function getDishTemplate(dish, dishIndex) {
    return `<div onclick="addToBasket(myDishes[${dishIndex}])" class="dish-item">
            <div class="items-head">
            <h3>${dish.name}</h3>
            <a>+</a>
            </div>
            <p>${dish.description}</p>
            <p><b>${dish.price.toFixed(2)} €</b></p>
            </div>`;
}

function getDrinkTemplate(drink, drinkIndex) {
    return `<div onclick="addToBasket(myDrinks[${drinkIndex}])" class="drink-item">
            <div class="items-head">
            <h3>${drink.name}</h3>
            <a>+</a>
            </div>
            <p>${drink.description}</p>
            <p><b>${drink.price.toFixed(2)} €</b></p>
            </div>`;
}

function getDessertTemplate(dessert, dessertIndex) {
    return `<div onclick="addToBasket(myDesserts[${dessertIndex}])" class="dessert-item">
            <div class="items-head">
            <h3>${dessert.name}</h3>
            <a>+</a>
            </div>
            <p>${dessert.description}</p>
            <p><b>${dessert.price.toFixed(2)} €</b></p>
            </div>`;
}

function getBasketItemTemplate(item, itemIndex) {
    return `<div class="basket-item">
            <h3><b>${item.name}</b></h3>
            <div class="basket-item-info">
            <div class="quantity-controls">
            <a onclick="decreaseQuantity(${itemIndex})">
            <span class="minus-icon">−</span>
            </a>
            </div>
            <p> ${item.quantity} X</p>
            <div class="quantity-controls">
            <a onclick="increaseQuantity(${itemIndex})">
            <span class="plus-icon">+</span>
            </a>
            </div>
            <p>${(item.totalPrice).toFixed(2)} €</p>
            <div class="quantity-controls">
            <a onclick="removeBasketItem(${itemIndex})">
            <p>✕</p>
            </a>
            </div>
            </div>
            </div>`;
}

function getDishesHeaderTemplate() {
    return `<h1>Hauptgerichte</h1>`;
}

function getDishesImageTemplate() {
    return `<img src="./assets/img/top-food.jpg" alt="Hauptbild eines Hauptgerichts" class="top-img">`;
}

function getDrinksHeaderTemplate() {
    return `<h1>Getränke</h1>`;
}

function getDrinksImageTemplate() {
    return `<img src="./assets/img/top-drinks.jpg" alt="Hauptbild der Getränke" class="top-img">`;
}

function getDessertsHeaderTemplate() {
    return `<h1>Desserts</h1>`;
}

function getDessertsImageTemplate() {
    return `<img src="./assets/img/top-desserts.png" alt="Hauptbild der Desserts" class="top-img">`;
}

function getEmptyBasketMessageTemplate() {
    return '<p class="empty-position">Der Warenkorb ist leer.</p>';
}

function getBasketSummarySubtotalTemplate(totalSummary) {
    return `<p><b>Zwischensumme:</b> ${totalSummary.toFixed(2)} €</p>`;
}

function getBasketSummaryDeliveryPriceTemplate(deliveryPrice) {
    return `<p><b>Liefergebühr:</b> ${deliveryPrice.toFixed(2)} €</p>`;
}

function getBasketSummaryTotalTemplate(totalWithDelivery) {
    return `<p><b>Gesamt:</b> ${totalWithDelivery.toFixed(2)} €</p>`;
}

function getBasketHeaderTemplate() {
    return `<h1 class="basket-headline">Warenkorb</h1>
            <label class="switch-label">
            <input type="checkbox" id="delivery_toggle" onchange="toggleDelivery()" ${isDelivery ? 'checked' : ''}>
            <span class="switch-slider"></span>
            <span id="switch_text" class="switch-text">${isDelivery ? 'Lieferung' : 'Abholung'}</span>
            </label>`;
}

function getBasketTemplate(header, items, footer) {
  return `<div class="basket-header">${header}</div>
          <div class="basket-items">${items}</div>
          <div class="basket-footer">${footer}</div>`;
}

function getOrderButtonTemplate() {
  return `<button class="order-button" onclick="placeOrder()">Jetzt bestellen</button>`;
}