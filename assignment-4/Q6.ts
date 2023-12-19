// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

function removeNegativeInteger(arr: number[]) {
  return arr.filter((num) => num > 0);
}
let numberArray: number[] = [1, 2, 3, -5, 4, 5, 6, 7];

let modNumberArray: number[] = removeNegativeInteger(numberArray);

console.log("Negative Number Filter List", modNumberArray);
