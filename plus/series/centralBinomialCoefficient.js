/**
 * Your task is to calculate the nth value of the
 * Central binomial coefficient sequence.
 * https://en.wikipedia.org/wiki/Central_binomial_coefficient
 * 
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function centralBinomial(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    return factorial(2 * n) / (factorial(n) ** 2);

    function factorial(n) {
        return (n === 1 || n === 0) ? 1 : n * factorial(n - 1);
    }
}