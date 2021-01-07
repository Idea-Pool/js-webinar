const cullenNumber = require("../../series/cullenNumber");
const expect = require('chai').expect;

describe("In the Cullen series", () => {
    it("the parameter should be a number", () => {
        expect(() => cullenNumber("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(() => cullenNumber(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(() => cullenNumber(-1)).to.throw()
    });
    it("the 0. number should be 1", () => {
        expect(cullenNumber(0)).to.equal(1);
    });
    it("the 3. number should be 25", () => {
        expect(cullenNumber(3)).to.equal(25);
    });
});