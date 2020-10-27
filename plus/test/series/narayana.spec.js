const narayana = require("../../series/narayana");
const expect = require('chai').expect;

describe("In the Narayana's cows series", () => {
    it("the parameter should be a number", () => {
        expect(()=>narayana("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(()=>narayana(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(()=>narayana(-1)).to.throw()
    });
    it("the 0. number should be 1", () => {
        expect(narayana(0)).to.equal(1);
    });
    it("the 1. number should be 1", () => {
        expect(narayana(1)).to.equal(1);
    });
    it("the 2. number should be 1", () => {
        expect(narayana(2)).to.equal(1);
    });
    it("the 4. number should be 3", () => {
        expect(narayana(4)).to.equal(3);
    });
    it("the 10. number should be 28", () => {
        expect(narayana(10)).to.equal(28);
    });
});