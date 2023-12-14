"use strict";
// - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
let day = 22;
let week = Math.floor(day / 7);
let balanceDays = day % 7;
console.log(`${week} weeks and ${balanceDays} days`);
