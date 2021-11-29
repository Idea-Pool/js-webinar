/**
 * Your task is to calculate the nth value of the
 * Tribonacci sequence
 * https://en.wikipedia.org/wiki/Tribonacci_number
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function tribonacci(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    if (n === 0 || n === 1) return 0;
    if (n === 2) return 1;
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}