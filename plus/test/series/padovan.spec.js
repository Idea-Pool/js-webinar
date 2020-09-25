const padovan = require("../../series/padovan");
const expect = require('chai').expect;

function padovanChecker(number) {
    // 0th ,1st and 2nd number of the series are 1
    const padovanSequence = [1, 1, 1];

    for (let i = 3; i <= number; i++) {
        padovanSequence.push(padovanSequence[i - 2] + padovanSequence[i - 3]);
    }
    return padovanSequence[number];
}

describe("In the Padovan series", () => {
    it("the first number should be 2", () => {
        expect(padovan(0)).to.equal(padovanChecker(0));
    });
    it("the second number should be 1", () => {
        expect(padovan(1)).to.equal(padovanChecker(1));
    });
    it("the 11st number should be 12", () => {
        expect(padovan(10)).to.equal(padovanChecker(10));
    });
    it("the 32st number should be 4410", () => {
        expect(padovan(31)).to.equal(padovanChecker(31));
    });

});