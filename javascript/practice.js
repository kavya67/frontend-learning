const products = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 }
];

let totalPrice = products.reduce((total, product) => total + product.price, 0);

console.log(`Total Price:${totalPrice}`);