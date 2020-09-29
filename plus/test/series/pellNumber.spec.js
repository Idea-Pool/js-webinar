const pellNumber = require("../../series/pellNumber");
const expect = require('chai').expect;

describe("In the Pell series", () => {
    it("the negative number should return error", () => {
        expect(pellNumber(0)).to.equal(0);
    });
    it("the first number should be 0", () => {
        expect(pellNumber(0)).to.equal(0);
    });
    it("the second number should be 1", () => {
        expect(pellNumber(1)).to.equal(1);
    });
    it("the 12th number should be 5741", () => {
        expect(pellNumber(11)).to.equal(5741);
    });
    it("the 14th number should be 33461", () => {
        expect(pellNumber(13)).to.equal(33461);
    });

});