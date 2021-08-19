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
    
nThFibonacci = 0;
let firstSum = 0;
let secondSum = 1;
if (n >= 0) {
    while (n >= 1) {
        nThFibonacci = firstSum + secondSum
        secondSum = firstSum 
        firstSum = nThFibonacci
        n--;
    }
} else {
      nThFibonacci = 0
  };

    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;