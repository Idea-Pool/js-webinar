const cbcNumber = require("../../series/centralBinomialCoefficient");
const expect = require('chai').expect;

describe("In the Central binomial coefficient series", () => {
    it("the parameter should be a number", () => {
        expect(() => cbcNumber("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(() => cbcNumber(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(() => cbcNumber(-1)).to.throw()
    });
    it("the 0. number should be 1", () => {
        expect(cbcNumber(0)).to.equal(1);
    });
    it("the 6. number should be 924", () => {
        expect(cbcNumber(6)).to.equal(924);
    });
});