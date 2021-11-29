/**
 * Your task is to calculate the nth value of the
 * Jacobsthal number sequence.
 * https://en.wikipedia.org/wiki/Jacobsthal_number
 * 
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function jacobsthal(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    if (n === 0 || n === 1) return n;
    return jacobsthal(n - 1) + 2 * jacobsthal(n - 2);
}