/* global Product, Cart */

'use strict';

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  //This name is also horrid... are they even trying?
  var selectElement = document.getElementById('items');

  for (var product of allProducts) {
    var option = document.createElement('option');
    option.textContent = product.name;
    selectElement.appendChild(option);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var selected = document.getElementById('items').value;
  var quantity = document.getElementById('quantity').value;
  if (quantity <= 0) {
    alert('Quantity must be greater than 0.');
  }
  cart.push(new CartItem(selected, quantity));
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  document.getElementById('itemCount').textContent = `(${cart.length})`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var selected = document.getElementById('items').value;
  var quantity = document.getElementById('quantity').value;
  if (quantity <= 0) {
    return;
  }
  var cartprev = document.createElement('p');
  cartprev.textContent = `Added ${quantity} of ${selected} to cart`;

  var cartContents = document.getElementById('cartContents');
  cartContents.appendChild(cartprev);
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
updateCounter();
