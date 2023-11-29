"use strict";
// let a = Math.abs(7.25);
// let b = Math.abs(-7.25);
// //let c = Math.abs(null);
// //let d = Math.abs("Hello");
// let e = Math.abs(2 - 3);
// let a = Math.ceil(0.6);
// let b = Math.ceil(0.4);
// let c = Math.ceil(5);
// let d = Math.ceil(5.1);
// let e = Math.ceil(-5.1);
// let f = Math.ceil(-5.9);
let a = Math.round(2.6);
let b = Math.round(2.5);
let c = Math.round(2.49);
let d = Math.round(-2.6);
let e = Math.round(-2.5);
let f = Math.round(-2.49);
let x = Math.trunc(8.76);
let y = Math.trunc(8.3);
// console.log(x);
// console.log(y);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 0, "Lemon", "Kiwi");
// console.log(fruits);
// var mytuple = [10, "Hello", "World", "typeScript"];
// console.log("Items before push " + mytuple.length); // returns the tuple size
// mytuple.push(12); // append value to the tuple
// console.log("Items after push " + mytuple.length);
// console.log("Items before pop " + mytuple.length);
// console.log(mytuple.pop() + " popped from the tuple"); // removes and returns the last item
// console.log("Items after pop " + mytuple.length);
// var mytuple = [10, "Hello", "World", "typeScript"]; //create a  tuple
// console.log("Tuple value at index 0 " + mytuple[0]);
// //update a tuple element
// mytuple[0] = 121;
// console.log("Tuple value at index 0 changed to   " + mytuple[0]);
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp("mark");
console.log("Printing names array....");
// disp(["Mark", "Tom", "Mary", "John"]);
disp("123");
//console.log("if Printing names array....");
