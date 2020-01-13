const { expect } = require("chai");
const sleep = require("../../async/sleep");

const TIMEOUT = 16e3;

describe("async / sleep", () => {
    it("should wait given seconds", async function () {
        this.timeout(TIMEOUT);
        const a = Date.now();
        await sleep(5);
        const b = Date.now();
        expect(b - a).to.be.greaterThan(4900);
        expect(b - a).to.be.lessThan(5100);
    });

    it("should wait at most 10 seconds", async function () {
        this.timeout(TIMEOUT);
        const a = Date.now();
        await sleep(15);
        const b = Date.now();
        expect(b - a).to.be.greaterThan(9900);
        expect(b - a).to.be.lessThan(10100);
    });

    it("should handle incorrect values", function (done) {
        this.timeout(TIMEOUT);
        try {
            sleep("Hello").then(() => {
                done("Did not fail!");
            }, e => {
                done();
            });
        } catch (e) {
            done("Did not reject, but throw!");
        }
    });
});