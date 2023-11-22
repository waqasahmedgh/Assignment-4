"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let fTran = [];
fTran.push(["Honda", "Motocycle"]);
fTran.push(["Suzuki", "Car"]);
fTran.push(["Raksha", "Sazgar"]);
fTran.push(["Indus", "Toyota"]);
// for (let j = 0; j < fTran.length; j++) {
//   console.log(`I would like to own a
//     ${fTran[j]}`);
// }
fTran.forEach((brand, trans) => console.log(`I would like to own a ${brand} 
  ${trans}.`));
