"use strict";
// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
let statusF = "F";
let celsius = 10;
if (statusF == "F") {
    let fahrenheit = celsius * 1.8 + 32;
    console.log(`Fahrenheit : ${fahrenheit}`);
}
let statusC = "C";
let fahrenheit1 = 10;
if (statusC == "C") {
    let celsius1 = (fahrenheit1 - 32) / 1.8;
    console.log(`Celcius :  ${celsius1}`);
}
