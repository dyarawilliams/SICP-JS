// Exercise 1.4

/* Observe that our model of evaluation allows for applications whose function expressions are compound expressions. Use this observation to describe the behavior of a_plus_abs_b: 
*/

// The plus function takes two arguments a and b and returns their sum.
function plus(a, b) { return a + b; }

// The minus function takes two arguments a and b and returns their difference.
function minus(a, b) { return a - b; }

// The a_plus_abs_b function takes two arguments a and b and returns the result of applying the plus or minus function to a and b, depending on whether b is greater than or equal to 0 or not.
// If b is greater than or equal to 0, it applies the plus function; otherwise, it applies the minus function.
// This is a higher-order function that uses conditional evaluation to determine which function to apply based on the value of b.
function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
} 

console.log(a_plus_abs_b(8, -4)); // 12

/********************************************************************************************
    According to section 1.1.4, evaluation of an function application proceeds as follows:
        1. Evaluate the subexpressions of the application in an arbitrary order.
        2. Apply the function to the arguments.
    *****************************************************************************************
    In the case of a_plus_abs_b(8, -4), the function is applied to the arguments a = 8 and b = -4. The function expression (-4 >= 0 ? plus : minus) is evaluated first, which results in either the plus or minus function being selected based on the value of b --> -4. By that -4 is less than 0, the minus function is applied, and the result is 8 - (-4). This means that a_plus_abs_b behaves like 8 + |-4|, where |-4| is the absolute value of -4. The result of this application is 12.
*/