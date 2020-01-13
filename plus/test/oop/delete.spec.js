const del = require("../../oop/delete");
const expect = require('chai').expect;

describe(".delete(o)", () => {
    it("should handle if not object is passed", () => {
        expect(() => del(1)).to.throw();
    });

    it("should delete property", () => {
        const o = {a: 12, b: 23};
        const newO = del(o, "a");
        expect(newO.a).to.be.undefined;
    });

    it("should not modify original object", () => {
        const o = {a: 12, b: 23};
        const newO = del(o, "a");
        expect(o.a).to.equal(12);
        expect(o).not.to.equal(newO);
    });
});