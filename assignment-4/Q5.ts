// - Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.

function factorial(int: number) {
  let j = 1;
  if (int > 0) {
    for (let i = 1; i <= int; i++) {
      j = j * i;
    }
  } else {
    console.log("Enter Positive Number");
  }

  return j;
}
console.log("Factorial of 5 :", factorial(5));
