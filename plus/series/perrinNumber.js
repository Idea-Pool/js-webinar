/**
 * Your task is to calculate the nth value of the
 * Perrin sequence.
 * https://en.wikipedia.org/wiki/Perrin_number
 * 
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function perrin(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    if (n === 0) return 3;
    if (n === 1) return 0;
    if (n === 2) return 2;
    return perrin(n - 2) + perrin(n - 3);
}