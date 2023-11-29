var msg = "hello Eric , would you like to learn some Python Today?";
var msg1 =
  'Albert Eintein once said , "A person who never made a mistake never tried anything new"';
var famous_person =
  'Albert Eintein once said , "A person who never made a mistake never tried anything new"';
var message = famous_person;
let fav_num = 786;
let name_array = ["Waqas", "Asim", "Zahid"];
//let name_array = Array["Waqas", "Asim" , "Zahid"];
//let favTransport: Array[Transport :string, brand: string] = [];
//var favTransport[Array];
let whitemsg = "     Waqas     ";

//let words: string[] = PersonName.split(" ");
let titlecaseName = "";

// original msg
console.log("Original msg:" + msg);
// Lower Case
console.log("lower case: " + msg.toLowerCase());
// Upper Case
console.log("Upper case: " + msg.toUpperCase());
// Title Case
console.log(
  "Title Case: " + msg.charAt(0).toUpperCase() + msg.substring(1).toLowerCase()
);

//console.log('Title length: '+msg.length);
// for (let l = 0; l < msg.length; l++) {

//    console.log('length: '+msg.length);
//     console.log('Title Case: '+msg.charAt(0).toUpperCase() + msg.substring(1).toLowerCase())

// }

// for (let i = 0; i < msg.length; i++) {
//     titlecaseName += msg[i].charAt(0).toUpperCase() + msg[i].slice(1).toLowerCase() + " ";
// }

// console.log(titlecaseName);

// Famous Quote
console.log("Famous Quote:" + msg1);
// Famous Message
console.log("Famous msg:" + message);

// console.log('local lower  case: '+msg.toLocaleLowerCase());

console.log("Namw with white Space :" + whitemsg);
console.log("Namw without white Space :" + whitemsg.trim());

console.log("+".repeat(80));
console.log("Addition : " + (4 + 4));
console.log("-".repeat(80));
console.log("Subtraction : " + (12 - 4));
console.log("*".repeat(80));
console.log("Multiplication : " + 2 * 4);
console.log("/".repeat(80));
console.log("Division : " + 32 / 4);

console.log("+".repeat(80));

//print favorite number with string msg
console.log(`favourite number : ${fav_num}`);
// Current date with name
console.log("Waqas Ahmed  and Current Date:" + Date());

console.log("Array Value 1 : " + name_array[0]);
console.log("Array Value 2 : " + name_array[1]);
console.log("Array Value 3 : " + name_array[2]);

//favTransport.push(["Motorcyle","Honda"]);
