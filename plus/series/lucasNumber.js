/**
 * Your task is to calculate the nth value of the
 * Lucas sequence.
 * https://en.wikipedia.org/wiki/Lucas_number
 * 
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function lucas(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    if (n === 0) return 2;
    if (n === 1) return 1;
    return lucas(n - 1) + lucas(n - 2);
}