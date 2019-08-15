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
	
	// If 'n' is negative value than return 0
	if(n<=0){
		return 0;
	}
	// If 'n=1' return 1
	if(n==1){
		return 1;
	}
	else{
	// Using recursive function in order to count value that more than 1
		return nThFibonacci = fibonacci(n-2)+fibonacci(n-1);
	}
}
module.exports = fibonacci;