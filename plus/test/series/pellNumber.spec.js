const pellNumber = require("../../series/pellNumber");
const expect = require('chai').expect;

describe("In the Pell series", () => {
    it("the parameter should be a number", () => {
        expect(()=>pellNumber("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(()=>pellNumber(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(()=>pellNumber(-1)).to.throw()
    });
    it("the 0. number should be 0", () => {
        expect(pellNumber(0)).to.equal(0);
    });
    it("the 1. number should be 1", () => {
        expect(pellNumber(1)).to.equal(1);
    });
    it("the 2. number should be 2", () => {
        expect(pellNumber(2)).to.equal(2);
    });
    it("the 3. number should be 5", () => {
        expect(pellNumber(3)).to.equal(5);
    });
});