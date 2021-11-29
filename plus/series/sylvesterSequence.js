/**
 * Your task is to calculate the nth value of the
 * Sylvester's sequence
 * Since numbers can be very big, use %10^9 + 7.
 * https://en.wikipedia.org/wiki/Sylvester%27s_sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function sylvester(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    if (n === 0) return 2;
    return (sylvester(n - 1)
        * (sylvester(n - 1) - 1)  + 1) % (10 ** 9 + 7);
}