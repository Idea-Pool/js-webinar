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
    if (a < 0 || b < 0) {
        return gcd = 0; 
     };
     while (b !== 0) {
        b = a % (a = b); 
     };   
     gcd = a;
    // ...AND THIS COMMENT LINE!
    return gcd;
}
module.exports = euclidean;