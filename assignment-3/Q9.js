"use strict";
// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
let dayNumber = 1;
if (dayNumber == 1) {
    console.log(`${dayNumber} is Monday`);
}
else if (dayNumber == 2) {
    console.log(`${dayNumber} is Tuesday`);
}
else if (dayNumber == 3) {
    console.log(`${dayNumber} is Wednesday`);
}
else if (dayNumber == 4) {
    console.log(`${dayNumber} is Thursday`);
}
else if (dayNumber == 5) {
    console.log(`${dayNumber} is Friday`);
}
else if (dayNumber == 6) {
    console.log(`${dayNumber} is Saturday`);
}
else if (dayNumber == 7) {
    console.log(`${dayNumber} is Sunday`);
}
else {
    console.log(`${dayNumber} is mot a Valid Number, Enter between 1 to 7`);
}
