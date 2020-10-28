const factorial = require("../../series/factorial");
const expect = require('chai').expect;

describe("In the Factorial series", () => {
    it("the parameter should be a number", () => {
        expect(()=>factorial("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(()=>factorial(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(()=>factorial(-1)).to.throw()
    });
    it("the 0. number should be 1", () => {
        expect(factorial(0)).to.equal(1);
    });
    it("the 1. number should be 1", () => {
        expect(factorial(1)).to.equal(1);
    });
    it("the 5. number should be 120", () => {
        expect(factorial(5)).to.equal(120);
    });
});