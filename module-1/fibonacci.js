'use strict';

/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci;
    if (n < 0) {
        return nThFibonacci = 0;
    }
    else {
        if (n < 2) {
            return nThFibonacci = n;
        }
        else {
            nThFibonacci = fibonacci(n - 2) + fibonacci(n - 1);
        }
    }
    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;