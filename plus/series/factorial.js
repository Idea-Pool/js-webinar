/**
 * Your task is to calculate the nth value of the
 * Factorial sequence.
 * https://en.wikipedia.org/wiki/Factorial
 * 
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function factorial(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    return (n === 1 || n === 0) ? 1 : n * factorial(n - 1);
}