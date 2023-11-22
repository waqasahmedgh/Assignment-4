"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Waqas ahmed, First assignment of Typescrit";
let titlecaseName = personName.split(" ");
console.log("Lower Case :" + personName.toLowerCase());
console.log("Upper Case :" + personName.toUpperCase());
console.log("Title: " + titlecaseName);
// console.log(
//   "Title Case: " +
//     titlecaseName[1].charAt(0).toUpperCase() +
//     titlecaseName[1].slice(1).toLowerCase()
// );
for (let l = 0; l < titlecaseName.length; l++) {
    titlecaseName[l] =
        titlecaseName[l].charAt(0).toUpperCase() +
            titlecaseName[l].slice(1).toLowerCase() +
            " ";
}
console.log("Title Case: ", titlecaseName.join());
