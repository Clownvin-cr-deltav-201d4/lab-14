'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.querySelector('table#cart');

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
  console.log('Show table');
  let tbody = table.querySelector('tbody');
  for (let item of cart) {
    let itemRow = document.createElement('tr');
    let buttonCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => removeItemFromCart(item.id));
    deleteButton.textContent = 'Delete';
    let quantity = document.createElement('td');
    quantity.textContent = item.quantity;
    let itemData = document.createElement('td');
    let itemTitle= document.createElement('h4');
    let img = document.createElement('img');
    img.classList.add('cartItem');
    for (let product of allProducts) {
      if (product.name !== item.product) {
        continue;
      }
      img.setAttribute('src', product.filePath);
      itemTitle.textContent = product.name;
      break;
    }
    itemData.appendChild(itemTitle);
    itemData.appendChild(img);
    //itemData.textContent = item.product;
    itemRow.appendChild(quantity);
    itemRow.appendChild(itemData);
    buttonCell.appendChild(deleteButton);
    itemRow.appendChild(buttonCell);
    tbody.appendChild(itemRow);
  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(id) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id !== id) {
      continue;
    }
    cart.splice(i, 1);
    break;
  }
  saveCartToLocalStorage();
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
