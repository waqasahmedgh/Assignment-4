"use strict";
// For user input save o value in variable and use it or create a function for every program and pass desired value when u call that function best approach
function sumFunction(n1, n2) {
    return n1 + n2;
}
function sumFunctionUser() {
    let userInput1 = 10;
    let userInput2 = 15;
    let result = sumFunction(userInput1, userInput2);
    console.log(`Sum Function from User Input ${userInput1} + ${userInput2} is ${result}`);
}
//console.log(`Sum Function ${sumFunction(4, 4)}`);
sumFunctionUser();
