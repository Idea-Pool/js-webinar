const narayana = require("../../series/narayana");
const expect = require('chai').expect;

describe("In the Narayana series", () => {
    it("the parameters should be a number", () => {
        expect(() => narayana("Test", 9)).to.throw(TypeError)
    });
    it("the negative parameters should return error", () => {
        expect(() => narayana(-2, 6)).to.throw()
    });
    it("the negative parameters should return error", () => {
        expect(() => narayana(3, -1)).to.throw()
    });
    it("n should be greather then k", () => {
        expect(() => narayana(2, 6)).to.throw()
    });
    it("the N(6, 3) number should be 50", () => {
        expect(narayana(6, 3)).to.equal(50);
    });
    it("the N(7, 4) number should be 175", () => {
        expect(narayana(7, 4)).to.equal(175);
    });
    it("the equivalent parameters should return 1", () => {
        expect(narayana(2, 2)).to.equal(1);
    });
});