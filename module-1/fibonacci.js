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
     * Also, take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    if (n >= 0) {
        if (n < 2 && typeof (n) === 'number') {
            nThFibonacci = n;
        } else {
            let f0 = 0;
            let f1 = 1;
            for (let i = 2; i <= n; ++i) {
                const sum = f0 + f1;
                f0 = f1;
                f1 = sum;
            }
            nThFibonacci = f1;
        }
    }
    else {
        nThFibonacci = 0;
    }
    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;