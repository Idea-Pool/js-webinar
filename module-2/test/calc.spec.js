'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8 
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2 
     * calc(3).times(10).v // 30 
     * calc(10).divide(2).v // 5 
     * calc(10).modulo(5).v // 0 
     * calc(5).divide(0) // throw error 
     * calc(-3).sqrt() // throw error 
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator

    it("should have proper value", () => {
        const c = calc(3).v;
        expect(c).be.equal(3);
    });
    describe("add", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.add).not.to.be.undefined;
        });
        it("should perform valid addition", () => {
            const c = calc(3);
            const result = c.add(5).v;
            expect(result).be.equal(8);
        });
    })
    describe("minus", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.minus).not.to.be.undefined;
        });
        it("should perform valid substraction", () => {
            const c = calc(3);
            const result = c.minus(2).v;
            expect(result).be.equal(1);
        })
    })
    describe("miltiply", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.times).not.to.be.undefined;
        })
        it("should perform valid multiplication", () => {
            const c = calc(3);
            const result = c.times(10).v;
            expect(result).be.equal(30);
        });
    });
    describe("divide", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.divide).not.to.be.undefined;
        });

        it("should perform valid division", () => {
            const c = calc(10);
            const result = c.divide(2).v;
            expect(result).be.equal(5);
        });

        it("should handle the division by 0", () => {
            const c = calc(10);
            expect(() => c.divide(0)).to.throw();
        });
    });

    describe("modulo", () => {
        it("should extist", () => {
            const c = calc(3);
            expect(c.modulo).not.to.be.undefined;
        });
        it("should perform valid modulo modulo calculation", () => {
            const c = calc(10);
            const result = c.modulo(5).v;
            expect(result).be.equal(0);
        });
    });
    describe("square root", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.sqrt).not.to.be.undefined;
        });
        it("should perform valid square root calculation", () => {
            const c = calc(4);
            const result = c.sqrt().v;
            expect(result).be.equal(2);
        });
        it("should handle square root calculation from negative numbers", () => {
            const c = calc(-3);
            expect(() => c.sqrt()).to.throw();
        });
    });
    describe("several actions expressions", () => {
        it("should perform several actions expressions calculation", () => {
            const c = calc(3);
            const result = c.add(4).minus(3).times(6).v;
            expect(result).be.equal(24);
        });
    });
});