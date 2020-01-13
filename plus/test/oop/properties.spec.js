const properties = require("../../oop/properties");
const expect = require('chai').expect;

describe(".properties", () => {
    test("should handle if parameter is not object", () => {
        expect(properties(42)).to.have.lengthOf(0);
    });

    test("should return properties of the object", () => {
        expect(properties({
            a: 11,
            c: "Hello",
            hello: "world",
        })).to.have.members(["a", "c", "hello"]);
    });
});