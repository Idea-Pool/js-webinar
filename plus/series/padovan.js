/**
 * Your task is to calculate the nth value of the
 * Padovan sequence
 * https://en.wikipedia.org/wiki/Padovan_sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function padovan(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    if (n === 0 || n === 1 || n === 2) return 1;
    return padovan(n - 2) + padovan(n - 3);
}