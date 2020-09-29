const sylvesterSequence = require("../../series/sylvesterSequence");
const expect = require('chai').expect;

describe("In the Sylvester series", () => {
    it("the negative number should return error", () => {
        try {
            sylvesterSequence(-5)
            throw new Error();
          } catch (e) {
            expect(e).to.be.instanceOf(Error);
          }
    });
    it("the first number should be 2", () => {
        expect(sylvesterSequence(0)).to.equal(2);
    });
    it("the second number should be 3", () => {
        expect(sylvesterSequence(1)).to.equal(3);
    });
    it("the 13th number should be 700822610", () => {
        expect(sylvesterSequence(12)).to.equal(700822610);
    });
    it("the 14th number should be 548323223", () => {
        expect(sylvesterSequence(13)).to.equal(548323223);
    });

});