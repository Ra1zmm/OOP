class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(prodect, quantity) {
    this.prodect = prodect;
    this.quantity = quantity;
  }
  calculatingThePrice() {
    return this.prodect + this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
// adding
  addItem(prodect, quantit) {
    const cartItem = new ShoppingCartItem(prodect, quantit);
    this.items.push(cartItem);
  }
// removing
  removeItem(productId) {
    const filteredItems = this.items.filter(function (item) {
      return item.product.id !== productId;
    });
    this.items = filteredItems;
  }
// displaying
  displayCart() {
    if (this.items.length === 0) {
      console.log("The cart is empty.");
      return;
    }
    console.log("Shopping Cart:");
    this.items.forEach((item) => {
      console.log(
        `Product: ${item.product.name}, Quantity: ${
          item.quantity
        }, Total Price: $${item.calculateTotalPrice().toFixed(2)}`
      );
    });
  }
}




// create some products
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Phone", 800);
const product3 = new Product(3, "Headphones", 150);

// create a shopping cart
const cart = new ShoppingCart();

// add items to the cart
cart.addItem(product1, 10);
cart.addItem(product2, 27);
cart.addItem(product3, 36);

// display the cart
cart.displayCart();
console.log(`Total items in cart: ${cart.getTotalItems()}`);

// remove an item from the cart
cart.removeItem(2);  // Remove the Phone









