const lucasNumber = require("../../series/lucasNumber");
const expect = require('chai').expect;

describe("In the Lucas series", () => {
    it("the parameter should be a number", () => {
        expect(()=>lucasNumber("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(()=>lucasNumber(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(()=>lucasNumber(-1)).to.throw()
    });
    it("the 0. number should be 2", () => {
        expect(lucasNumber(0)).to.equal(2);
    });
    it("the 1. number should be 1", () => {
        expect(lucasNumber(1)).to.equal(1);
    });
    it("the 2. number should be 3", () => {
        expect(lucasNumber(2)).to.equal(3);
    });
    it("the 3. number should be 4", () => {
        expect(lucasNumber(3)).to.equal(4);
    });
});