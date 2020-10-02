const sylvesterSequence = require("../../series/sylvesterSequence");
const expect = require('chai').expect;

describe("In the Sylvester series", () => {
    it("the parameter should be a number", () => {
        expect(()=>sylvesterSequence("Test")).to.throw(TypeError)
    });
    it("the -2. number should return error", () => {
        expect(()=>sylvesterSequence(-2)).to.throw()
    });
    it("the -1. number should return error", () => {
        expect(()=>sylvesterSequence(-1)).to.throw()
    });
    it("the 0. number should be 2", () => {
        expect(sylvesterSequence(0)).to.equal(2);
    });
    it("the 4. number should be 1807 ", () => {
        expect(sylvesterSequence(4)).to.equal(1807);
    });
});