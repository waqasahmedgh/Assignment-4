// - Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all the numbers in the array.

function sumArray(arr: number[]) {
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    a = a + arr[i];
  }
  return a;
}
let arrayNumber: number[] = [1, 2, 3, 4, 5, 6, 10];
console.log("Original Array:", arrayNumber);
console.log("Sum of Array:", sumArray(arrayNumber));
