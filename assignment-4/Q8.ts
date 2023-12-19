// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array . use a for loop to perform the conversion for each temperature.

let celsiusTemp: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let fehArray: number[] = [];

for (let i = 0; i < celsiusTemp.length; i++) {
  let f = celsiusTemp[i] * (9 / 5) + 32;
  fehArray.push(f);
}

console.log(fehArray);
