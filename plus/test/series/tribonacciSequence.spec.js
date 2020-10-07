const tribonacciSequence = require("../../series/tribonacciSequence");
const expect = require('chai').expect;

describe("In the Tribonacci series", () => {
    it("the parameter should be a number", () => {
        expect(()=>tribonacciSequence("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(()=>tribonacciSequence(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(()=>tribonacciSequence(-1)).to.throw()
    });
    it("the 0. number should be 0", () => {
        expect(tribonacciSequence(0)).to.equal(0);
    });
    it("the 1. number should be 0", () => {
        expect(tribonacciSequence(1)).to.equal(0);
    });
    it("the 2. number should be 1", () => {
        expect(tribonacciSequence(2)).to.equal(1);
    });
    it("the 9. number should be 44", () => {
        expect(tribonacciSequence(9)).to.equal(44);
    });
});