const { expect } = require("chai");
const { fake } = require("sinon");
const loadJson = require("../../async/loadJson");

describe("async / .loadJson", () => {
    it("should handle successfull request", async () => {
        const json = fake.resolves("Hello");
        global.fetch = fake.resolves({ json, status: 200 });
        const result = await loadJson("URL");
        expect(result).to.equal("Hello");
        expect(global.fetch.calledWith("URL")).to.be.true;
        expect(json.called).to.be.true;
    });

    it("should handle failed request", done => {
        global.fetch = fake.resolves({ status: 500 });
        loadJson("URL").then(() => {
            done("Did not fail!");
        }, e => {
            expect(String(e)).to.contain("500");
            done();
        });
    });

    it("should use await and not then", () => {
        const loadJsonAsString = Function.prototype.toString.call(loadJson);
        expect(loadJsonAsString).to.contain("async");
        expect(loadJsonAsString).to.contain("await");
        expect(loadJsonAsString).not.to.match(/then\s*\(/);
        expect(loadJsonAsString).not.to.match(/catch\s*\(/);
    });
});