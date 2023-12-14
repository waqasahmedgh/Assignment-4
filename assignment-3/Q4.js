"use strict";
// - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
let price = 100;
if (price > 100) {
    console.log("10% Discount : ", (price * 10) / 100);
}
else {
    console.log("5% Discount : ", (price * 5) / 100);
}
