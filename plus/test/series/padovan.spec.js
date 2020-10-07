const padovan = require("../../series/padovan");
const expect = require('chai').expect;

describe("In the Padovan series", () => {
    it("the parameter should be a number", () => {
        expect(()=>padovan("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(()=>padovan(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(()=>padovan(-1)).to.throw()
    });
    it("the 0. number should be 1", () => {
        expect(padovan(0)).to.equal(1);
    });
    it("the 1. number should be 1", () => {
        expect(padovan(1)).to.equal(1);
    });
    it("the 2. number should be 1", () => {
        expect(padovan(2)).to.equal(1);
    });
    it("the 4. number should be 2", () => {
        expect(padovan(4)).to.equal(2);
    });
    it("the 12. number should be 21", () => {
        expect(padovan(12)).to.equal(21);
    });
});