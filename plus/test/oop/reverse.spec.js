const reverse = require("../../oop/reverse");
const expect = require('chai').expect;

describe(".reverse(o)", () => {
    test("should handle if not object is passed", () => {
        expect(() => reverse(1)).to.throw();
    });

    test("should reverse object", () => {
        const o = {a: 12, b: 23};
        const newO = reverse(o);
        expect(newO).to.eql({12: "a", 23: "b"});
    });

    test("should handle duplicate", () => {
        const o = {a: 12, b: 23, c: 12};
        const newO = reverse(o);
        expect(newO).to.eql({12: "c", 23: "b"});
    });

    test("should not modify original object", () => {
        const o = {a: 12, b: 23};
        const newO = reverse(o);
        expect(newO).not.to.be.equal(o);
    });
});