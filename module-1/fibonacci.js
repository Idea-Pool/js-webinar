'use strict';

/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also take into consideration the documentation of the function!
     */

    if(n <= 0){
        nThFibonacci = 0;
    } else {
        let sequence = [0, 1];
        for(let i=1; i < n; i++){
            let sequenceLastIndex = sequence.length - 1;
            sequence.push(sequence[sequenceLastIndex] + sequence[sequenceLastIndex-1]);
        }
        nThFibonacci = sequence[sequence.length -1];
    }

    return nThFibonacci;
}
module.exports = fibonacci;