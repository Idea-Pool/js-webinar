'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(-4).sqrt().v // throw error
     * calc(3).times(10).v // 30
     * calc(10).div(2).v // 5
     * calc(5).div(0) // throw error
     * calc(10).modulo(5).v // 0
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
    it('should decrease the actual value by the given value', () => {
        const result = calc(3).minus(4);
        expect(result.v).to.equal(-1);
    });
    it('should find the square root of the actual positive value', () => {
        const result = calc(4).sqrt();
        expect(result.v).to.equal(2);
    });
    it('should throw Error when finding square root of the actual negative value', () => {
        expect(() => { calc(-4).sqrt() }).to.throw(Error, 'Square root of negative values is not possible!');
    });
    it('should multiply the actual value by the given value', () => {
        const result = calc(3).times(10);
        expect(result.v).to.equal(30);
    });
    it('should divide the actual value by the given value', () => {
        const result = calc(10).div(2);
        expect(result.v).to.equal(5);
    });
    it('should throw Error when dividing the actual value by zero given value', () => {
        expect(() => { calc(5).div(0) }).to.throw(Error, 'Division by 0 is not possible!');
    });
    it('should find the modulo of the actual value by the given value', () => {
        const result = calc(10).modulo(5);
        expect(result.v).to.equal(0);
    });
    it('should provide chaining to all opeations', () => {
        const result = calc(1).add(4)
            .minus(4)
            .times(42)
            .div(42)
            .sqrt()
            .modulo(2);
        expect(result.v).to.equal(1);
    });
    it('should return the String representation of the actual value', () => {
        const result = calc(42).toString();
        expect(result).to.equal('42')
    });
});