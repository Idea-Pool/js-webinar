const fermatNumber = require("../../series/fermatNumber");
const expect = require('chai').expect;

describe("In the Fermat number series", () => {
    it("the parameter should be a number", () => {
        expect(()=>fermatNumber("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(()=>fermatNumber(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(()=>fermatNumber(-1)).to.throw()
    });
    it("the 0. number should be 3", () => {
        expect(fermatNumber(0)).to.equal(3);
    });
    it("the 1. number should be 5", () => {
        expect(fermatNumber(1)).to.equal(5);
    });
    it("the 6. number should be 4294967297", () => {
        expect(fermatNumber(5)).to.equal(4294967297);
    });
});