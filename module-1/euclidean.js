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

    gcd = 0;
    if (a > 0 && b > 0) {
        while (a !== b) {
            if (a > b) {
                a -= b;
            } else {
                b -= a;
            }
        }
        gcd = a;
    }

    // ...AND THIS COMMENT LINE!
    return gcd;
}
module.exports = euclidean;