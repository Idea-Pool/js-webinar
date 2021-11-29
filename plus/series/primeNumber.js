/**
 * Your task is to calculate the nth value of the
 * Prime number sequence.
 * Sequence starts from n = 0, not n = 1!
 * https://en.wikipedia.org/wiki/Prime_number
 * 
 * @param {number} n (n >= 0)
 * @returns {number}
 */
module.exports = function prime(n) {
    if (typeof n !== 'number') throw new TypeError('Argument is not a number!');
    if (n < 0) throw new Error('Argument should not be negative');
    if (n % 1) throw new Error('Argument should be an integer');
    let primes = [];
    let num = 2;
    while (primes.length <= n) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) isPrime = false;
        }
        if (isPrime) primes.push(num);
        num++;
    }
    return primes[n];
}