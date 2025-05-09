// Exercise 1.3

// Declare a function that takes three numbers as arguments and returns the sum of the squares of the two larger numbers.

const square = x => x * x;

function f(x, y, z) {
    // This function returns the sum of the squares of the two largest numbers among x, y, and z.
    // It uses the square function to calculate the square of each number.
    // The expression (x > y ? (y > z ? z : y) : (x > z ? z : x)) finds the smallest number among x, y, and z.
    // The square of the smallest number is subtracted from the sum of the squares of x, y, and z.
    // This effectively gives the sum of the squares of the two largest numbers.
    return square(x) + square(y) + square(z) - square(x > y ? (y > z ? z : y) : (x > z ? z : x));
}

console.log(f(1, 2, 3)); // 13
console.log(f(2, 4, 6)); // 52