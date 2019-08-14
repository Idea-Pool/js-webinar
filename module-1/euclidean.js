'use strict';

/**
 * The function determines the greatest common divisor or
 * the given two numbers.
 *
 * @param {number} a (a > 0)
 * @param {number} b (b > 0)
 * @returns {number} GCD or 0 if any arguments are not proper
 */
function euclidean(a, b) {
    let gcd;
    /*
     * Your task is to compute the greatest common divisor of
     * the numbers given in a and b variables, using the
     * Euclidean algorithm (https://en.wikipedia.org/wiki/Euclidean_algorithm).
     * If you have the result, assign it to the variable, called gcd.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
	
	//Checking that we cannot devide by '0'
	if(b==0){
		return a;
	}
	// Checking that the value should be more then '0'
	if(a < 0 || b < 0){
		return 0;
	}
	
	// Using recursive function in order to get greatest common divisor
	gcd = euclidean(b, a%b);
	
    // return a result
	return gcd;
}
module.exports = euclidean;