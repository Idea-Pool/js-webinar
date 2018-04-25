'use strict';

/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
  let nThFibonacci = 1;
  /*
   * Your task is to calculate the nth value of the
   * Fibonacci sequence.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * Store the value in the nThFibonacci variable.
   * Also take into consideration the documentation of the function!
   */
  // PLACE YOUR CODE BETWEEN THIS...
  if (n <= 0) {
    nThFibonacci = 0;
  } else if (n > 2) {
    let index = 2;
    let current = 1;
    let previous = 1;
    while (index !== n) {
      nThFibonacci = current + previous;
      previous = current;
      current = nThFibonacci;
      index++;
    }
  }
  // ...AND THIS COMMENT LINE!
  return nThFibonacci;
}
module.exports = fibonacci;