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

    if(a <= 0 || b <= 0){
        gcd = 0;
    } else if(a === b){
        gcd = a;
    } else {
        let max=a;
        if(a > b){
            max = a-1;
        } else {
            max = b-1;
        }
        while(max !== 0){
            if(a % max === 0 && b % max === 0){
                gcd = max;
                break;
            } else {
                max--;
            }
        }
    }

    return gcd;
}
module.exports = euclidean;