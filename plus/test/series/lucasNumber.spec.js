const lucasNumber = require("../../series/lucasNumber");
const expect = require('chai').expect;

describe("In the Lucas series", () => {
    it("the negative number should return error", () => {
        expect(lucasNumber(-5)).to.throw();
    });
    it("the first number should be 2", () => {
        expect(lucasNumber(0)).to.equal(2);
    });
    it("the second number should be 1", () => {
        expect(lucasNumber(1)).to.equal(1);
    });
    it("the 16th number should be 1364", () => {
        expect(lucasNumber(15)).to.equal(1364);
    });
    it("the 31th number should be 1860498", () => {
        expect(lucasNumber(30)).to.equal(1860498);
    });


});