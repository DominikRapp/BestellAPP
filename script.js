let deliveryPrice = 4.99;
let basketItems = [];
let isDelivery = true;
let ratings = [];

function renderMyDishes() {
  let contentRef = document.getElementById('content_main');
  contentRef.innerHTML += getDishes();
}

function renderMyDrinks() {
  let contentRef = document.getElementById('content_main');
  contentRef.innerHTML += getDrinks();
}

function renderMyDesserts() {
  let contentRef = document.getElementById('content_main');
  contentRef.innerHTML += getDesserts();
}

function renderMyOrder() {
  let basketContainer = document.getElementById('basket_container');
  let header = getBasketHeaderTemplate();
  let items = '';
  let footer = '';
  if (basketItems.length === 0) {
    items = getEmptyBasketMessageTemplate();
  } else {
    let totalSum = 0;
    for (let itemIndex = 0; itemIndex < basketItems.length; itemIndex++) {
      let item = basketItems[itemIndex];
      totalSum += item.totalPrice;
      items += getBasketItemTemplate(item, itemIndex);
    }
    footer = getBasketSummary(totalSum);
    footer += `<button class="order-button" onclick="placeOrder()">Jetzt bestellen</button>`;
  }
  basketContainer.innerHTML = `<div class="basket-header">${header}</div>
                                <div class="basket-items">${items}</div>
                                <div class="basket-footer">${footer}</div>`;
  saveToLocalStorage();
}

function activateCategory(category) {
  document.getElementById('dishes').classList.remove('active');
  document.getElementById('drinks').classList.remove('active');
  document.getElementById('desserts').classList.remove('active');
  let selectedCategory = document.getElementById(category);
  if (selectedCategory) {
    selectedCategory.classList.add('active');
  }
}

function removeBasketItem(index) {
  basketItems.splice(index, 1);
  renderMyOrder();
  saveToLocalStorage();
}

function toggleDelivery() {
  let toggle = document.getElementById('deliveryToggle');
  isDelivery = toggle.checked;
  let switchText = document.getElementById('switchText');
  switchText.innerText = isDelivery ? 'Lieferung' : 'Abholung';
  renderMyOrder();
  saveToLocalStorage();
}

function increaseQuantity(index) {
  basketItems[index].quantity += 1;
  basketItems[index].totalPrice = basketItems[index].quantity * basketItems[index].price;
  renderMyOrder();
  saveToLocalStorage();
}

function decreaseQuantity(index) {
  if (basketItems[index].quantity > 1) {
    basketItems[index].quantity -= 1;
    basketItems[index].totalPrice = basketItems[index].quantity * basketItems[index].price;
  } else {
    basketItems.splice(index, 1);
  }
  renderMyOrder();
  saveToLocalStorage();
}

function addToBasket(item) {
  let itemCategory = getItemCategory(item);
  let existingItemIndex = findItemInBasket(item, itemCategory);
  (existingItemIndex !== -1) ? updateItemQuantityInBasket(existingItemIndex, item) : addNewItemToBasket(item, itemCategory);
  renderMyOrder();
  saveToLocalStorage();
}

function getItemCategory(item) {
  if (isDrink(item))
    return 'drink';
  if (isDessert(item))
    return 'dessert';
  return 'dish';
}

function isDrink(item) {
  return myDrinks.some(drink => drink.name === item.name);
}

function isDessert(item) {
  return myDesserts.some(dessert => dessert.name === item.name);
}

function getDishes() {
  let dishesSection = `<div id="dishes" class="category">`;
  dishesSection += getDishesHeaderTemplate();
  dishesSection += getDishesImageTemplate();
  dishesSection += getDishesList();
  dishesSection += `</div>`;
  return dishesSection;
}

function getDishesList() {
  let list = '';
  for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++) {
    list += getDishTemplate(myDishes[dishIndex], dishIndex);
  }
  return list;
}

function getDrinks() {
  let drinksSection = `<div id="drinks" class="category">`;
  drinksSection += getDrinksHeaderTemplate();
  drinksSection += getDrinksImageTemplate();
  drinksSection += getDrinksList();
  drinksSection += `</div>`;
  return drinksSection;
}

function getDrinksList() {
  let list = '';
  for (let drinkIndex = 0; drinkIndex < myDrinks.length; drinkIndex++) {
    list += getDrinkTemplate(myDrinks[drinkIndex], drinkIndex);
  }
  return list;
}

function getDesserts() {
  let dessertsSection = `<div id="desserts" class="category">`;
  dessertsSection += getDessertsHeaderTemplate();
  dessertsSection += getDessertsImageTemplate();
  dessertsSection += getDessertsList();
  dessertsSection += `</div>`;
  return dessertsSection;
}

function getDessertsList() {
  let list = '';
  for (let dessertIndex = 0; dessertIndex < myDesserts.length; dessertIndex++) {
    list += getDessertTemplate(myDesserts[dessertIndex], dessertIndex);
  }
  return list;
}

function getBasketSummary(totalSum) {
  let deliveryFee = isDelivery ? deliveryPrice : 0;
  let totalWithDelivery = totalSum + deliveryFee;
  let summary = `<div class="order-summary">`;
  summary += getBasketSummarySubtotalTemplate(totalSum);
  summary += getBasketSummaryDeliveryFeeTemplate(deliveryFee);
  summary += getBasketSummaryTotalTemplate(totalWithDelivery);
  summary += `</div>`;
  return summary;
}

function findItemInBasket(item, category) {
  for (let itemIndex = 0; itemIndex < basketItems.length; itemIndex++) {
    if (basketItems[itemIndex].name === item.name && basketItems[itemIndex].type === category) {
      return itemIndex;
    }
  }
  return -1;
}

function updateItemQuantityInBasket(itemIndex, item) {
  basketItems[itemIndex].quantity += 1;
  basketItems[itemIndex].totalPrice = basketItems[itemIndex].quantity * item.price;
}

function addNewItemToBasket(item, category) {
  let newItem = {
    name: item.name,
    price: item.price,
    description: item.description,
    type: category,
    quantity: 1,
    totalPrice: item.price
  };
  basketItems.push(newItem);
}

function renderAll() {
  init();
  renderMyDishes();
  renderMyDrinks();
  renderMyDesserts();
  renderMyOrder();
  document.getElementById('dishes_link').onclick = () => activateCategory('dishes');
  document.getElementById('drinks_link').onclick = () => activateCategory('drinks');
  document.getElementById('desserts_link').onclick = () => activateCategory('desserts');
  activateCategory('dishes');
}

function closeBurgerMenu() {
  let burgerNav = document.getElementById('burger_nav');
  let burgerButton = document.getElementById('burger_menu_button');

  burgerNav.style.display = 'none';
  burgerButton.innerHTML = '☰';
}

function toggleBurgerMenu() {
  let burgerNav = document.getElementById('burger_nav');
  let burgerButton = document.getElementById('burger_menu_button');

  if (burgerNav.style.display === 'flex') {
    burgerNav.style.display = 'none';
    burgerButton.innerHTML = '☰';
  } else {
    burgerNav.style.display = 'flex';
    burgerButton.innerHTML = '✕';
  }
}

function toggleBurgerButton() {
  let burgerButton = document.getElementById('burger_menu_button');
  burgerButton.innerHTML = '☰';
}

function closeBurgerMenu() {
  let burgerNav = document.getElementById('burger_nav');
  burgerNav.style.display = 'none';
}

function toggleBasket() {
  let basketWrapper = document.getElementsByClassName('basket-wrapper')[0];
  let body = document.body;
  if (basketWrapper.classList.contains('show')) {
    basketWrapper.classList.remove('show');
    body.classList.remove('no-scroll');
  } else {
    basketWrapper.classList.add('show');
    body.classList.add('no-scroll');
  }
}

function placeOrder() {
  let checkbox = document.getElementById('deliveryToggle');
  let itIsDelivery = checkbox.checked;
  basketItems = [];
  renderMyOrder();
  saveToLocalStorage();
  let confirmationPage = itIsDelivery ? 'delivery.html' : 'pickup.html';
  window.location.href = confirmationPage;
}

function rate(star) {
  ratings.push(star);
  let sum = ratings.reduce((acc, val) => acc + val, 0);
  let average = sum / ratings.length;
  for (let i = 1; i <= 5; i++) {
    let starEl = document.getElementById("star_" + i);
    if (i <= star) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  }
  document.getElementById("average_rating_text").innerHTML = `<b>&#8709;:</b> ${average.toFixed(1).replace(".", ",")} von 5 Sternen`;
  document.getElementById("num_reviews_text").innerHTML = `<b>${ratings.length}x bewertet</b>`;
  saveToLocalStorage();
}

function init() {
  getFromLocalStorage();
  renderMyOrder();
}

function getFromLocalStorage() {
  let items = localStorage.getItem('basketItems');
  let delivery = localStorage.getItem('isDelivery');
  let savedRatings = localStorage.getItem('ratings');
  if (items) {
    basketItems = JSON.parse(items);
  }
  if (delivery !== null) {
    isDelivery = JSON.parse(delivery);
  }
  if (savedRatings) {
    ratings = JSON.parse(savedRatings);
    let numReviews = ratings.length;
    if (numReviews > 0) {
      let average = ratings.reduce((acc, rating) => acc + rating, 0) / numReviews;
      document.getElementById("average_rating_text").innerHTML = "<b>&#8709;:</b> " + average.toFixed(1).replace(".", ",") + " von 5 Sternen";
      document.getElementById("num_reviews_text").innerHTML = `<b>${numReviews}x bewertet</b>`;
    } else {
      document.getElementById("average_rating_text").innerHTML = "<b>&#8709;:</b> 0,0 von 5 Sternen";
      document.getElementById("num_reviews_text").innerHTML = `0x <b>bewertet</b>`;
    }
  }
}

  function saveToLocalStorage() {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
    localStorage.setItem('isDelivery', JSON.stringify(isDelivery));
    localStorage.setItem('ratings', JSON.stringify(ratings));
  }

  function loadFromLocalStorage() {
    let savedItems = JSON.parse(localStorage.getItem('basketItems'));
    if (savedItems) {
      basketItems = savedItems;
    }
  }

  function clearLocalStorage() {
    localStorage.removeItem('basketItems');
    localStorage.removeItem('isDelivery');
    basketItems = [];
    isDelivery = false;
    renderMyOrder();
  }