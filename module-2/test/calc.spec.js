'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).mod(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    it('should store the actual value', () => {
        const result = calc(3);
        expect(result.v).to.equal(3);
    });
    it('should add any value to the actual', () => {
        const result = calc(3).add(5);
        expect(result.v).to.equal(8);
    });
    it('should decrease the actual value by the given');
});