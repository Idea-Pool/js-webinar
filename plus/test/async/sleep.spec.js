const { expect } = require("chai");
const sleep = require("../../async/sleep");

describe("async / sleep", () => {
    it("should wait given seconds", async () => {
        const a = Date.now();
        await sleep(5);
        const b = Date.now();
        expect(b - a).to.be.greaterThan(4999);
    });

    it("should wait at most 10 seconds", async () => {
        const a = Date.now();
        await sleep(15);
        const b = Date.now();
        expect(b - a).to.be.greaterThan(9999);
    });

    it("should handle incorrect values", done => {
        sleep("Hello").then(() => {
            done("Did not fail!");
        }, e => {
            done();
        });
    });
});