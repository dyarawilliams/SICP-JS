// Exercise 1.8

// Newton's method for cube roots is based on the fact that if y is an approximation to the cube root of x, then a better approximation is given by the value

//     (x / y^2 + 2y) / 3

// Use this formula to implement a cube-root function analogous to the square-root function. (In section 1.3.4 we will see how to implement Newton's method in general as an abstraction of these square-root and cube-root functions.)

const relative_tolerance = 0.001;

function abs(x) {
    return x >= 0 ? x : -x;
}

function divide3(x, y) {
    return (x + y) / 3;
}

function cube(x) {
    return x * x * x;
}

function improve(guess, x) {
    return divide3(x / (guess * guess), 2 * guess);
}

function is_good_enough(guess, x) {
    return abs(cube(guess) - x) < guess * relative_tolerance;
}

function cube_root(guess, x) {
    return is_good_enough(guess, x)
        ? guess
        : cube_root(improve(guess, x), x);
}

console.log(cube_root(1, 0.0001)); // 0.046415888340504576
console.log(cube_root(1, 4000000000000)); // 1581.1388300841897     