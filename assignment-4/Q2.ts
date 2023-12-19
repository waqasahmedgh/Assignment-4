// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

let arrayShoppingCart: number[] = [12, 23, 34];
function addItem(arr: number[], ind: number, val: number) {
  arr.splice(ind, 0, val);
  return arr;
}
function removeItem(arr: number[], ind: number) {
  arr.splice(ind, 1);
  return arr;
}

function updateItem(arr: number[], ind: number, val: number) {
  arr.splice(ind, 1, val);
  return arr;
}

console.log("Original Shopping Cart", arrayShoppingCart);
let addShoppingCart: number[] = addItem(arrayShoppingCart, 2, 99);
console.log("Add item Shopping Cart", addShoppingCart);

console.log("Original Shopping Cart", arrayShoppingCart);
let removeShoppingCart: number[] = removeItem(arrayShoppingCart, 3);
console.log("Remove item Shopping Cart", removeShoppingCart);

console.log("Original Shopping Cart", arrayShoppingCart);
let updateShoppingCart: number[] = updateItem(arrayShoppingCart, 1, 100);
console.log("Update item Shopping Cart", updateShoppingCart);
