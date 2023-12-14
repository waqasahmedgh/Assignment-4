"use strict";
// - Write a program that checks if the given year is leap year or not.
// What is a leap year? To be a leap year, the year number must be divisible by four – except for end-of-century years, which must be divisible by 400. This means that the year 2000 was a leap year, although 1900 was not. 2024, 2028, 2032 and 2036 are all leap years.
let leapYear = 2000;
console.log(leapYear % 4, leapYear % 100, leapYear % 400);
if ((leapYear % 4 == 0 && leapYear % 100 != 0) || leapYear % 400 == 0) {
    console.log(`${leapYear} is a Leap Year`);
}
else {
    console.log(`${leapYear} is not a Leap Year`);
}
