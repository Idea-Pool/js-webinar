const padovan = require("../../series/padovan");
const expect = require('chai').expect;

describe("In the Padovan series", () => {
    it("the first number should be 2", () => {
        expect(padovan(0)).to.equal(1);
    });
    it("the second number should be 1", () => {
        expect(padovan(1)).to.equal(1);
    });
    it("the 11th number should be 12", () => {
        expect(padovan(10)).to.equal(12);
    });
    it("the 32th number should be 4410", () => {
        expect(padovan(31)).to.equal(4410);
    });

});