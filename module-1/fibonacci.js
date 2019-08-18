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
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    let secondVal;
    if (n < 0) return 0;
    let arr = [0, 1];
    for (var i = 1; i <= n; i++) {
        secondVal = arr[i] + arr[i - 1];
        arr.push(secondVal);
    }
    nThFibonacci = arr[n];
    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;