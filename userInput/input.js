"use strict";
// GitHub Repo: https://github.com/codeinpiece/typescript-tutorials
// YouTube Channel: https://www.youtube.com/@codeinpieces
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
// Taking User String Input (Name Input)
var prompt1 = promptSync();
var name = prompt1("What is your name?");
console.log("Hello, ".concat(name, "! Welcome to Code in Piece!"));
// Example for taking numbers as input and adding them
var prompt2 = promptSync();
var num1Str = prompt2("Enter the first number: ");
var num2Str = prompt2("Enter the second number: ");
var num1 = parseInt(num1Str);
var num2 = parseInt(num2Str);
var sum = num1 + num2;
console.log("The sum of ".concat(num1, " and ").concat(num2, " is: ").concat(sum));
