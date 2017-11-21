'use strict';

const fibonacci = require('../fibonacci');
const expect = require('chai').expect;

describe('Module 1 - Fibonacci', () => {
    it("should return a number", () => {
        return expect(fibonacci(2)).to.be.a('number');
    });

    it("should return 0 if negative value passed", () => {
        return expect(fibonacci(-2)).to.equal(0);
    });

    const values = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
    values.forEach((n, i) => {
        it(`should return ${n} for ${i + 1}`, () => {
            return expect(fibonacci(i + 1)).to.equal(n);
        });
    });
});