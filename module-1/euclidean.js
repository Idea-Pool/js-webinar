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
    if(a >= b && a > 0 && b > 0){
        gcd = gcdFinder(a,b);
     } else if (b >= a && a > 0 && b > 0){
        gcd = gcdFinder(b,a);
     }else {
         gcd = 0;
     }
      
    // ...AND THIS COMMENT LINE!
    return gcd;
}

function gcdFinder(a,b){
    while (a%b!==0){
        let temp = a
        a = b;
        b = temp%b;
      }

      return b;
}
module.exports = euclidean;