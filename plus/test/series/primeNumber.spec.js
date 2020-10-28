const primeNumber = require("../../series/primeNumber");
const expect = require('chai').expect;

describe("In the Prime series", () => {
    it("the parameter should be a number", () => {
        expect(()=>primeNumber("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(()=>primeNumber(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(()=>primeNumber(-1)).to.throw()
    });
    it("the 0. number should be 2", () => {
        expect(primeNumber(0)).to.equal(2);
    });
    it("the 12. number should be 41", () => {
        expect(primeNumber(12)).to.equal(41);
    });
});