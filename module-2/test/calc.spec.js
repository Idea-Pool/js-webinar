'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
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
    describe("add", () => {
        it("should not to be undefined", () => {
            const c = calc(randomNumber);
            return expect(c.add).not.to.be.undefined;
        });
        const testData = [
            [0, 1000], [20, 40], [59, 1],
            [60000, 50000], [0, 0], [-1, 43]
        ];
        testData.forEach(v => {
            it(`add function should work correctly for ${v[0]} + ${v[1]}`, () => {
                const calcClass = calc(v[0]);
                const result = v[0] + v[1]
                return expect(calcClass.add(v[1]).v).to.equal(result);
            });
        })
    })

    describe("minus", () => {
        it("should not to be undefined", () => {
            const c = calc(randomNumber);
            return expect(c.minus).not.to.be.undefined;
        });
        const testData = [
            [1000, 0], [50, 50], [20, 30],
            [0, 0], [-1, 43], [-1, -2]
        ];
        testData.forEach(v => {
            it(`minus function should work correctly for ${v[0]} - ${v[1]}`, () => {
                const calcClass = calc(v[0]);
                const result = v[0] - v[1]
                return expect(calcClass.minus(v[1]).v).to.equal(result);
            });
        })
    })

    describe("sqrt", () => {
        it("should not to be undefined", () => {
            const c = calc(randomNumber);
            return expect(c.sqrt).not.to.be.undefined;
        });
        const testData = [
            1000, 50, 30,
            0, 222222
        ];
        testData.forEach(n => {
            it(`sqrt function should work correctly for ${n}`, () => {
                const calcClass = calc(n);
                const result = Math.sqrt(n)
                return expect(calcClass.sqrt(n).v).to.equal(result);
            });
        });
        it("should throw error if value is negative", () => {
            const c = calc(-1);
            return expect(() => c.sqrt()).to.throw(Error, /Square root of negative value cannot be determined!/);
        });
    })

    describe("times", () => {
        it("should not to be undefined", () => {
            const c = calc(randomNumber);
            return expect(c.times).not.to.be.undefined;
        });
        const testData = [
            [1000, 0], [50, 50], [20, 30],
            [0, 0], [-1, 43], [-1, -2]
        ];
        testData.forEach(v => {
            it(`times function should work correctly: take ${v[0]} for ${v[1]} times`, () => {
                const calcClass = calc(v[0]);
                const result = v[0] * v[1]
                return expect(calcClass.times(v[1]).v).to.equal(result);
            });
        })
    })
    
    describe("divide", () => {
        it("should not to be undefined", () => {
            const c = calc(randomNumber);
            return expect(c.divide).not.to.be.undefined;
        });
        const testData = [
            [1000, 10], [50, 50], [20, 30],
            [5, 30], [-1, 43], [-1, -2]
        ];
        testData.forEach(v => {
            it(`divide function should work correctly: ${v[0]} divide ${v[1]}`, () => {
                const calcClass = calc(v[0]);
                const result = v[0] / v[1]
                return expect(calcClass.divide(v[1]).v).to.equal(result);
            });
        })
        it("should throw error if value is negative", () => {
            const c = calc(randomNumber);
            return expect(() => c.divide(0)).to.throw(Error, /Division by 0 is not possible!/);
        });
    })

    describe("modulo", () => {
        it("should not to be undefined", () => {
            const c = calc(randomNumber);
            return expect(c.modulo).not.to.be.undefined;
        });
        const testData = [
            [1000, 10], [50, 50], [20, 30],
            [0, 2], [-1, 43], [-1, -2]
        ];
        testData.forEach(v => {
            it(`modulo function should work correctly for ${v[0]} by modulo ${v[1]}`, () => {
                const calcClass = calc(v[0]);
                const result = v[0] % v[1]
                return expect(calcClass.modulo(v[1]).v).to.equal(result);
            });
        })
    })

    describe("multi functional", () => {
        it("should not to be undefined", () => {
            const c = calc(randomNumber);
            return expect(c.times).not.to.be.undefined;
        });
        const testData = [
            [1000, 0, 4], [50, 50, 50], [20, 30, -1],
            [0, 0, 3], [-1, 43, 3333333], [111111, 11, 11]
        ];
        testData.forEach(v => {
            it(`multi function should work correctly: ${v[0]} * ${v[1]} / ${v[2]}`, () => {
                const calcClass = calc(v[0]);
                const result = v[0] * v[1] / v[2]
                return expect(calcClass.times(v[1]).divide(v[2]).v).to.equal(result);
            });
        })
    })
});