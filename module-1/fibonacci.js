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
    if (n <= 0) {return 0;}
    // checking for first two (hardcoded) Fibonacci numbers
    else if ([1, 2].includes(n)) {return 1;}
    else { // n > 2 should calculate Fibonacci number...
        // ...so function can call itself
        nThFibonacci = fibonacci(n - 1) + fibonacci(n - 2)
    }
    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;