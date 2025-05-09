// Exercise 1.5

// Ben Bitdiddle has invented a test to determine whether the interpreter he is faced with is using applicative-order evaluation or normal-order evaluation. He declares the following two functions: 

function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
} 

// Then he evaluates the statement
console.log(test(0, p()));

// What behavior will Ben observe with an interpreter that uses applicative-order evaluation? What behavior will he observe with an interpreter that uses normal-order evaluation? Explain your answer. (Assume that the evaluation rule for conditional expressions is the same whether the interpreter is using normal or applicative order: The predicate expression is evaluated first, and the result determines whether to evaluate the consequent or the alternative expression.)


/* 
    The behavior Ben will observe with an interpreter that uses applicative-order evaluation of 
    test(0, p()) is:
    - We neeed to evaluate the argument expression before applying the function.
    - The first argument is 0, so the second argument p() will be evaluated.
    - The function p() is defined as p() { return p(); }, which means it will call itself indefinitely.
    - This will result in an infinite loop or stack overflow error, as the function keeps calling itself without a base case to stop.

    The behavior Ben will observe with an interpreter that uses normal-order evaluation of
    test(0, p()) is:
    - We need to evaluate the predicate expression first, which is 0 in this case.
    - Since the predicate is 0, the consequent expression (p()) will not be evaluated.
    - The function test will return 0 immediately without evaluating the second argument.
    - This is because the conditional expression only evaluates the consequent if the predicate is true (non-zero).

*/