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

    /*
    if (n < 0) {
        nThFibonacci = 0;
    } else {
        if (n < 2) {
            nThFibonacci = n;
        } else {
            nThFibonacci = fibonacci(n-1) + fibonacci(n-2);
        }
    }
    */

    const fib = [0 , 1];
    
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
 
    }
    nThFibonacci = fib[Math.max(0 , n)];
    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;