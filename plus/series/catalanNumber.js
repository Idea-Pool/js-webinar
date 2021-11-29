/**
 * Your task is to calculate the nth value of the
 * Catalan number sequence.
 * https://en.wikipedia.org/wiki/Catalan_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function catalan(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    return factorial(2 * n) / (factorial(n + 1) * factorial(n));

    function factorial(n) {
        return (n === 1 || n === 0) ? 1 : n * factorial(n - 1);
    }
}