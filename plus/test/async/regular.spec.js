const { expect } = require("chai");
const f = require("../../async/regular");

describe("async / regular", () => {
    it("should should return correct value", async () => {
        const result = await f();
        expect(result).to.equal(10);
    });

    it("should wait 1 seconds", async () => {
        const a = Date.now();
        await f();
        const b = Date.now();
        expect(b - a).to.be.greaterThan(999);
    });

    it("should not use async / await", () => {
        const fAsString = Function.prototype.toString.call(f);
        expect(fAsString).not.to.contain("async");
        expect(fAsString).not.to.contain("await");
    });
});