const woodallNumber = require("../../series/woodallNumber");
const expect = require('chai').expect;

describe("In the Woodall series", () => {
    it("the parameter should be a number", () => {
        expect(() => woodallNumber("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(() => woodallNumber(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(() => woodallNumber(-1)).to.throw()
    });
    it("the 0. number should be 1", () => {
        expect(woodallNumber(0)).to.equal(1);
    });  
    it("the 10. number should be 22527", () => {
        expect(woodallNumber(10)).to.equal(22527);
    });
});