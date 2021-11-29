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
    if (n > 0 && typeof n === 'number') {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        nThFibonacci = b;

        /*if (n < 2) nThFibonacci = n; // recursive solution
        else nThFibonacci = fibonacci(n-1) + fibonacci(n-2);*/

    } else nThFibonacci = 0;

    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;