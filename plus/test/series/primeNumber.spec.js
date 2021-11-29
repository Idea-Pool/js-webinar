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
    it("the 16. number should be 59", () => {
        expect(primeNumber(16)).to.equal(59);
    });
    it("the 100. number should be 547", () => {
        expect(primeNumber(100)).to.equal(547);
    });
});