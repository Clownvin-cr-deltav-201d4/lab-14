'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.querySelector('tbody').innerHTML = ''; //Clear tbody;
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tbody = table.querySelector('tbody');
  for (let item of cart) {
    let itemRow = document.createElement('tr');
    let deleteButton = document.createElement('td');
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', removeItemFromCart);
    let quantity = document.createElement('td');
    quantity.textContent = item.quantity;
    let itemData = document.createElement('td');
    itemData.textContent = item.product;
  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
