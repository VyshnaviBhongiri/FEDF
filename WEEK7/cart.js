export let cart = [];

// Add a book to the cart
export function addToCart(book) {
  const existing = cart.find(item => item.title === book.title);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }
  console.log("Cart after adding:", cart); // debug log
}

// Remove book by index
export function removeFromCart(index) {
  const i = Number(index);
  if (i >= 0 && i < cart.length) {
    cart.splice(i, 1);
  }
  console.log("Cart after removal:", cart); // debug log
}

// Calculate total price
export function calculateTotal() {
  return cart.reduce((sum, book) => sum + book.price * book.quantity, 0);
}
