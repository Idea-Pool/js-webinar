/**
 * Your task is to calculate the nth value of the
 * Cullen sequence.
 * https://en.wikipedia.org/wiki/Cullen_number
 * 
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function cullen(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    return n * (2 ** n) + 1;
}