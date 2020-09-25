const lucasNumber = require("../../series/lucasNumber");
const expect = require('chai').expect;

function lucasChecker(number) {
    if (number === 0) {
        return 2;
    }
    if (number === 1) {
        return 1;
    }
    return lucasNumber(number - 1) + lucasNumber(number - 2);
}

describe("In the Lucas series", () => {
    it("the first number should be 2", () => {
        expect(lucasNumber(0)).to.equal(lucasChecker(0));
    });
    it("the second number should be 1", () => {
        expect(lucasNumber(1)).to.equal(lucasChecker(1));
    });
    it("the 16st number should be 1364", () => {
        expect(lucasNumber(15)).to.equal(lucasChecker(15));
    });
    it("the 31st number should be 1860498", () => {
        expect(lucasNumber(30)).to.equal(lucasChecker(30));
    });


});