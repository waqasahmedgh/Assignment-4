"use strict";
/* - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax

Where the tax amount will be calculated by the amount of bill.*/
let numberUnits = 101;
let taxCal;
let amountBill = 1000;
if (numberUnits > 100 && numberUnits <= 200) {
    taxCal = (amountBill * 10) / 100;
    console.log(`10 % Tax on ${amountBill} is ${taxCal}`);
}
else if (numberUnits > 200 && numberUnits <= 500) {
    taxCal = (amountBill * 15) / 100;
    console.log(`15 % Tax on ${amountBill} is ${taxCal}`);
}
else if (numberUnits > 500) {
    taxCal = (amountBill * 25) / 100;
    console.log(`25 % Tax on ${amountBill} is ${taxCal}`);
}
