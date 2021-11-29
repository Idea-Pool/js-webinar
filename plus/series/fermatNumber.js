/**
 * Your task is to calculate the nth value of the
 * Fermat number sequence.
 * https://en.wikipedia.org/wiki/Fermat_number
 * 
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function fermat(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    return 2 ** 2 ** n + 1;
}