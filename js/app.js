/* global Product, Cart */

'use strict';

// TODO: Create a "Cart" constructor (named Cart) that has item and quantity
// properties, and builds an array of items as you create instances

//This classes name was horrid. It is not a cart, but a "CartItem".
class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
}


// Product Contructor
class Product {
  constructor(filePath, name) {
    this.filePath = filePath;
    this.name = name;
  }
}

let allProducts = [];
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load or create cart

function generateCatalog() {
  allProducts.push(new Product('assets/bag.jpg', 'Bag'));
  allProducts.push(new Product('assets/banana.jpg', 'Banana'));
  allProducts.push(new Product('assets/bathroom.jpg', 'Bathroom'));
  allProducts.push(new Product('assets/boots.jpg', 'Boots'));
  allProducts.push(new Product('assets/breakfast.jpg', 'Breakfast'));
  allProducts.push(new Product('assets/bubblegum.jpg', 'Bubblegum'));
  allProducts.push(new Product('assets/chair.jpg', 'Chair'));
  allProducts.push(new Product('assets/cthulhu.jpg', 'Cthulhu'));
  allProducts.push(new Product('assets/dog-duck.jpg', 'Dog-Duck'));
  allProducts.push(new Product('assets/dragon.jpg', 'Dragon'));
  allProducts.push(new Product('assets/pen.jpg', 'Pen'));
  allProducts.push(new Product('assets/pet-sweep.jpg', 'Pet Sweep'));
  allProducts.push(new Product('assets/scissors.jpg', 'Scissors'));
  allProducts.push(new Product('assets/shark.jpg', 'Shark'));
  allProducts.push(new Product('assets/sweep.png', 'Sweep'));
  allProducts.push(new Product('assets/tauntaun.jpg', 'Taun-Taun'));
  allProducts.push(new Product('assets/unicorn.jpg', 'Unicorn'));
  allProducts.push(new Product('assets/usb.gif', 'USB'));
  allProducts.push(new Product('assets/water-can.jpg', 'Water Can'));
  allProducts.push(new Product('assets/wine-glass.jpg', 'Wine Glass'));
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
