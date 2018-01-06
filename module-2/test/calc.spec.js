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
    it('should decrease the actual value by the given', () => {
        const result = calc(3).minus(2);
        expect(result.v).to.equal(1);
    });
    it('should determine square root of the current value', () => {
        const result = calc(4).sqrt();
        expect(result.v).to.equal(2);
    });
    it('should multiply the value by the given', () => {
        const result = calc(3).times(10);
        expect(result.v).to.equal(30);
    });
    it('should divide the value by the given', () => {
        const result = calc(10).divide(2);
        expect(result.v).to.equal(5);
    });
    it('should compute module by the given divider', () => {
        const result = calc(10).modulo(5);
        expect(result.v).to.equal(0);
    });
    it('should throw error if 0 is the divider', () => {
        expect(() => calc(5).divide(0)).to.throw;
    });
    it('should process complex operations', () => {
        const result = calc(3).add(4).minus(3).times(6);
        expect(result.v).to.equal(24);
    });
});