/**
 * Your task is to calculate the nth value of the
 * Pell numbers sequence
 * https://en.wikipedia.org/wiki/Pell_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function pell(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    if (n === 0 || n === 1) return n;
    return 2 * pell(n - 1) + pell(n - 2);
}