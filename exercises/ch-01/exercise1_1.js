// Exercise 1.1

// Below is a sequence of statements. What is the result printed by the interpreter in response to each statement? Assume that the sequence is to be evaluated in the order in which it is presented. 

console.log(10);
console.log(5 + 3 + 4);
console.log(9 - 1);
console.log(6 / 2);
console.log(2 * 4 + (4 - 6));

const a = 3;
const b = a + 1;

console.log(a + b + a * b);
console.log(a == b);
console.log(b > a && b < a * b ? b : a);

console.log(a === 4
? 6 
: b === 4
? 6 + 7 + a
: 25);

console.log(2 + (b > a ? b : a));

console.log((a > b
    ? a
    : a < b
    ? b
    : -1)
*
(a + 1));

// Results from interpreter in response to each statement using console.log() with expressions
// 10
// 12
// 8
// 3
// 6
// 19
// false
// 4
// 16
// 6
// 16