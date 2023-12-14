"use strict";
// - Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
let givenNumber = 26;
if (givenNumber % 3 == 0 && givenNumber % 5 == 0) {
    console.log(`${givenNumber} Divisible by Three and Five `);
}
else if (givenNumber % 5 == 0) {
    console.log(`${givenNumber} Divisible by Five`);
}
else if (givenNumber % 3 == 0) {
    console.log(`${givenNumber} Divisible by Three`);
}
else {
    console.log(`${givenNumber} is not Divisible by Three and Five `);
}
