const catalanNumber = require("../../series/catalanNumber");
const expect = require('chai').expect;

describe("In the Catalan series", () => {
    it("the parameter should be a number", () => {
        expect(()=>catalanNumber("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(()=>catalanNumber(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(()=>catalanNumber(-1)).to.throw()
    });
    it("the 0. number should be 1", () => {
        expect(catalanNumber(0)).to.equal(1);
    });
    it("the 1. number should be 1", () => {
        expect(catalanNumber(1)).to.equal(1);
    });
    it("the 6. number should be 132", () => {
        expect(catalanNumber(6)).to.equal(132);
    });
});