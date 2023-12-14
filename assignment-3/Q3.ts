// - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

let day: number = 22;

let week: number = Math.floor(day / 7);
let balanceDays: number = day % 7;

console.log(`${week} weeks and ${balanceDays} days`);
