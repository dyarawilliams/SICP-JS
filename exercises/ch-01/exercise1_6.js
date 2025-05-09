// Exercise 1.6

// Alyssa P. Hacker doesn't like the syntax of conditional expressions, involving the characters ? and :. "Why can't I just declare an ordinary conditional function whose application works just like conditional expressions?" she asks. Alyssa's friend Eva Lu Ator claims this can indeed be done, and she declares a conditional function as follows:

function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause;
}

// Eva demonstrates the program for Alyssa: 
conditional(2 === 3, 0, 5); // 5
conditional(1 === 1, 0, 5); // 0

function abs(x) {
    return x >= 0 ? x : - x;
}

function square(x) {
    return x * x;
}

function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

// Delighted, Alyssa uses conditional to rewrite the square-root program: 
function sqrt_iter(guess, x) {
    return conditional(is_good_enough(guess, x),
        guess,
        sqrt_iter(improve(guess, x),
            x));
} 
console.log(sqrt_iter(3, 25));

// What happens when Alyssa attempts to use this to compute square roots? Explain.

/****************** ANSWER: *************************************
The problem with Alyssa's implementation is that the conditional function does not short-circuit its evaluation. This means that both the then_clause and else_clause are evaluated regardless of the predicate's value. In the case of the sqrt_iter function, this leads to infinite recursion because the else_clause (the recursive call to sqrt_iter) is always evaluated, even when the predicate (is_good_enough(guess, x)) is true. As a result, the program will eventually throw a stack overflow error or run indefinitely without producing a result. */
