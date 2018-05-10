'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {

    // calc(3).v // 3
    it('should have proper initial value', () => {
        const c = calc(3);
        expect(c.v).to.equal(3);
    });

    // calc(3).add(5).v // 8
    it('should support add operation', () => {
        let c = calc(3);
        c = c.add(5);
        expect(c.v).to.equal(8);
    });

    // calc(3).minus(2).v // 1
    it('should support subtraction operation', () => {
        let c = calc(3);
        c = c.minus(2);
        expect(c.v).to.equal(1);
    });

    // calc(4).sqrt().v // 2
    it('should compute the square root on non-negative value', () => {
        let c = calc(4);
        c = c.sqrt();
        expect(c.v).to.be.equal(2);
    })

    // calc(3).times(10).v // 30
    it('should support multiple operation', () => {
        let c = calc(3);
        c = c.times(10); 
        expect(c.v).to.be.equal(30);
    });

    // calc(10).divide(2).v // 5
    it('should support devision by any non-negative value', () => {
        let c = calc(10);
        c = c.divide(2);
        expect(c.v).to.be.equal(5);
    });

    // calc(10).modulo(5).v // 0
    it('should support modulo operation', () => {
        let c = calc(10);
        c = c.modulo(5);
        expect(c.v).to.be.equal(0);
    });

    // calc(5).divide(0) // throw error
    it('should throw error in case of division by 0', () => {
        const c = calc(5);
        expect(() => c.divide(0)).to.throw;
    });

    // calc(-3).sqrt() // throw error
    it('should throw error in case of sqrt for negative value', () => {
        const c = calc(-3);
        expect((c.sqrt)).to.throw;
    })

    // calc(3).add(4).minus(3).times(6).v //24
    it('should support multiple operation for expression', () => {
        let c = calc(3);
        c = c.add(4).minus(3).times(6);
        expect(c.v).to.be.equal(24);
    });
    









});