'use strict';

/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 1)
 * @returns {number}
 * @throws {Error} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nthFibonacci = 1;
    let preNthFibonacci = 1;
    let prePreNthFibonacci = 1;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    if (typeof n !== "number" || isNaN(n) || n < 1) {
        return 0;
    }

    for (let i = 3; i <= n; i++) {
        nthFibonacci = preNthFibonacci + prePreNthFibonacci;
        prePreNthFibonacci = preNthFibonacci;
        preNthFibonacci = nthFibonacci;
        
    }
    // ...AND THIS COMMENT LINE!
    return nthFibonacci;
}
module.exports = fibonacci;