/* - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.*/

function arraySpliceFunction(arr: number[], Ind: number, value: number) {
  arr.splice(Ind, 0, value);

  return arr;
}

let arrayVal: number[] = [1, 2, 3, 4];
console.log("Original Array :", arrayVal);
let modifiedArray: number[] = arraySpliceFunction(arrayVal, 2, 1200);
console.log("Modified Array :", modifiedArray);
