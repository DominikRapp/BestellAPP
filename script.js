let deliveryPrice = 4.99;
let basketItems = [];
let isDelivery = true;
let ratings = [];
let basketIsOpen = false;

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
  let items = getBasketItemsContent();
  let footer = getBasketFooterContent();
  basketContainer.innerHTML = getBasketTemplate(header, items, footer);
  saveToLocalStorage();
}

function getBasketItemsContent() {
  if (basketItems.length === 0) {
    return getEmptyBasketMessageTemplate();
  } else {
    let items = '';
    let totalSummary = 0;
    for (let itemIndex = 0; itemIndex < basketItems.length; itemIndex++) {
      let item = basketItems[itemIndex];
      totalSummary += item.totalPrice;
      items += getBasketItemTemplate(item, itemIndex);
    }
    return items;
  }
}

function getBasketFooterContent() {
  let totalSummary = getTotalSummary();
  let footer = getBasketSummary(totalSummary);
  footer += getOrderButtonTemplate();
  return footer;
}

function getTotalSummary() {
  let totalSummary = 0;
  for (let itemIndex = 0; itemIndex < basketItems.length; itemIndex++) {
    totalSummary += basketItems[itemIndex].totalPrice;
  }
  return totalSummary;
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

function removeBasketItem(indexOfItemToRemove) {
  basketItems.splice(indexOfItemToRemove, 1);
  renderMyOrder();
  saveToLocalStorage();
}

function toggleDelivery() {
  let toggle = document.getElementById('delivery_toggle');
  isDelivery = toggle.checked;
  let switchText = document.getElementById('switch_text');
  switchText.innerText = isDelivery ? 'Lieferung' : 'Abholung';
  renderMyOrder();
  saveToLocalStorage();
}

function increaseQuantity(basketItemIndex) {
  basketItems[basketItemIndex].quantity += 1;
  basketItems[basketItemIndex].totalPrice = basketItems[basketItemIndex].quantity * basketItems[basketItemIndex].price;
  renderMyOrder();
  saveToLocalStorage();
}

function decreaseQuantity(basketItemIndex) {
  if (basketItems[basketItemIndex].quantity > 1) {
    basketItems[basketItemIndex].quantity -= 1;
    basketItems[basketItemIndex].totalPrice = basketItems[basketItemIndex].quantity * basketItems[basketItemIndex].price;
  } else {
    basketItems.splice(basketItemIndex, 1);
  }
  renderMyOrder();
  saveToLocalStorage();
}

function addToBasket(item) {
  let itemCategory = getItemCategory(item);
  let existingItemIndex = findItemInBasket(item, itemCategory);
  if (existingItemIndex !== -1) {
    updateItemQuantityInBasket(existingItemIndex, item);
  } else {
    addNewItemToBasket(item, itemCategory);
  }
  renderMyOrder();
  saveToLocalStorage();
}

function getItemCategory(item) {
  if (isDrink(item)) {
    return 'drink';
  }
  if (isDessert(item)) {
    return 'dessert';
  }
  return 'dish';
}

function isDrink(item) {
  for (let drinkIndex = 0; drinkIndex < myDrinks.length; drinkIndex++) {
    let drink = myDrinks[drinkIndex];
    if (drink.name === item.name) {
      return true;
    }
  }
  return false;
}

function isDessert(item) {
  for (let dessertIndex = 0; dessertIndex < myDesserts.length; dessertIndex++) {
    let dessert = myDesserts[dessertIndex];
    if (dessert.name === item.name) {
      return true;
    }
  }
  return false;
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

function getBasketSummary(totalSummary) {
  let deliveryFee = isDelivery ? deliveryPrice : 0;
  let totalWithDelivery = totalSummary + deliveryFee;
  let summary = `<div class="order-summary">`;
  summary += getBasketSummarySubtotalTemplate(totalSummary);
  summary += getBasketSummaryDeliveryPriceTemplate(deliveryFee);
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
  let pageBody = document.body;
  if (basketIsOpen) {
    basketWrapper.className = "basket-wrapper";
    pageBody.className = "";
    basketIsOpen = false;
  } else {
    basketWrapper.className = "basket-wrapper show";
    pageBody.className = "no-scroll";
    basketIsOpen = true;
  }
}

function placeOrder() {
  let checkbox = document.getElementById('delivery_toggle');
  let isItDelivery = checkbox.checked;
  basketItems = [];
  renderMyOrder();
  saveToLocalStorage();
  let confirmationPage = isItDelivery ? 'delivery.html' : 'pickup.html';
  goToPage(confirmationPage);
}

function goToPage(confirmationPage) {
  window.location.href = confirmationPage;
}

function rateIt(selectedStar) {
  ratings.push(selectedStar);
  let averageRating = calculateAverageRating();
  updateStarDisplay(selectedStar);
  updateRatingTexts(averageRating);
  saveToLocalStorage();
}

function calculateAverageRating() {
  let totalRatingPoints = 0;
  let numberOfRatings = ratings.length;
  for (let ratingIndex = 0; ratingIndex < numberOfRatings; ratingIndex++) {
    let singleRating = ratings[ratingIndex];
    totalRatingPoints += singleRating;
  }
  let averageRating = totalRatingPoints / numberOfRatings;
  return averageRating;
}

function updateStarDisplay(activeStars) {
  for (let starPosition = 1; starPosition <= 5; starPosition++) {
    let star = document.getElementById("star_" + starPosition);
    star.classList.toggle("active", starPosition <= activeStars);
  }
}

function updateRatingTexts(average) {
  let formattedAverage = average.toFixed(1).replace(".", ",");
  document.getElementById("average_rating_text").innerHTML = `<b>&#8709;:</b> ${formattedAverage} von 5 Sternen`;
  document.getElementById("num_reviews_text").innerHTML = `<b>${ratings.length}x bewertet</b>`;
}

function init() {
  getFromLocalStorage();
  renderMyOrder();
}

function getFromLocalStorage() {
  loadBasketItems();
  loadDeliveryStatus();
  loadRatings();
  renderMyOrder();
}

function loadBasketItems() {
  let items = localStorage.getItem('basketItems');
  if (items) {
    basketItems = JSON.parse(items);
  }
}

function loadDeliveryStatus() {
  let delivery = localStorage.getItem('isDelivery');
  if (delivery !== null) {
    isDelivery = JSON.parse(delivery);
  }
}

function loadRatings() {
  let savedRatings = localStorage.getItem('ratings');
  if (savedRatings) {
    ratings = JSON.parse(savedRatings);
    updateRatingDisplay();
  }
}

function updateRatingDisplay() {
  let numberOfRatings = ratings.length;
  if (numberOfRatings > 0) {
    let averageRating = calculateAverageRating();
    updateRatingText(averageRating, numberOfRatings);
  } else {
    displayNoRatings();
  }
}

function calculateAverageRating() {
  let totalRatingPoints = 0;
  for (let rating of ratings) {
    totalRatingPoints += rating;
  }
  return totalRatingPoints / ratings.length;
}

function updateRatingText(averageRating, numberOfRatings) {
  document.getElementById("average_rating_text").innerHTML = `<b>&#8709;:</b> ${averageRating.toFixed(1).replace(".", ",")} von 5 Sternen`;
  document.getElementById("num_reviews_text").innerHTML = `<b>${numberOfRatings}x bewertet</b>`;
}

function displayNoRatings() {
  document.getElementById("average_rating_text").innerHTML = "<b>&#8709;:</b> 0,0 von 5 Sternen";
  document.getElementById("num_reviews_text").innerHTML = `0x <b>bewertet</b>`;
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