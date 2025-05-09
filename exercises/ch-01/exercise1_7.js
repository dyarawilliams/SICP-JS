// Exercise 1.7

// The is_good_enough test used in computing square roots will not be very effective for finding the square roots of very small numbers. Also, in real computers, arithmetic operations are almost always performed with limited precision. This makes our test inadequate for very large numbers. Explain these statements, with examples showing how the test fails for small and large numbers. An alternative strategy for implementing is_good_enough is to watch how guess changes from one iteration to the next and to stop when the change is a very small fraction of the guess. Design a square-root function that uses this kind of end test. Does this work better for small and large numbers? 

function abs(x) {
    return x >= 0 ? x : - x;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
        ? guess
        : sqrt_iter(improve(guess, x), x);
}

function sqrt(x) {
    return sqrt_iter(1, x);
}

function square(x) {
    return x * x;
}

const relative_tolerance = 0.0001;
function is_good_enough(guess, x) {
    return abs(square(guess) - x) < guess * relative_tolerance;
}

console.log((sqrt(0.0001))); // 0.03230844833048122
console.log((sqrt(4000000000000))); // 2000000

// The absolute tolerance of 0.001 is too large when computing the square root of a small value. For example, sqrt(0.0001) results in 0.03230844833048122 instead of the expected value 0.01, an error of over 200%. On the other hand, for very large values, rounding errors might make the algorithm fail to ever get close enough to the square root, in which case it will not terminate. The following program alleviates the problem by replacing an absolute tolerance with a relative tolerance. 