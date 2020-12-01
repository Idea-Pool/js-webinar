const perrinNumber = require("../../series/perrinNumber");
const expect = require('chai').expect;

describe("In the Perrin series", () => {
    it("the parameter should be a number", () => {
        expect(() => perrinNumber("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(() => perrinNumber(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(() => perrinNumber(-1)).to.throw()
    });
    it("the 0. number should be 3", () => {
        expect(perrinNumber(0)).to.equal(3);
    });
    it("the 1. number should be 0", () => {
        expect(perrinNumber(1)).to.equal(0);
    });
    it("the 2. number should be 2", () => {
        expect(perrinNumber(2)).to.equal(2);
    });
    it("the 3. number should be 3", () => {
        expect(perrinNumber(3)).to.equal(3);
    });
    it("the 10. number should be 17", () => {
        expect(perrinNumber(10)).to.equal(17);
    });
});