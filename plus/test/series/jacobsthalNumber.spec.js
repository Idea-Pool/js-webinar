const jacobsthalNumber = require("../../series/jacobsthalNumber");
const expect = require('chai').expect;

describe("In the Jacobsthal series", () => {
    it("the parameter should be a number", () => {
        expect(() => jacobsthalNumber("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(() => jacobsthalNumber(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(() => jacobsthalNumber(-1)).to.throw()
    });
    it("the 0. number should be 0", () => {
        expect(jacobsthalNumber(0)).to.equal(0);
    });
    it("the 1. number should be 1", () => {
        expect(jacobsthalNumber(1)).to.equal(1);
    });
    it("the 2. number should be 1", () => {
        expect(jacobsthalNumber(2)).to.equal(1);
    });
    it("the 10. number should be 341", () => {
        expect(jacobsthalNumber(10)).to.equal(341);
    });
});