const Circle = require("../../oop/circle");
const expect = require('chai').expect;

describe("Circle", () => {
    it("should store radius", () => {
        const circle = new Circle(12);
        expect(circle.r).to.equal(12);
    });

    it("should handle invalid radius", () => {
        expect(() => new Circle(-2)).to.throw();
    });

    it("should calculate perimeter", () => {
        const circle = new Circle(42);
        expect(circle.perimeter()).to.equal(2 * 42 * Math.PI);
    });

    it("should calculate areas", () => {
        const circle = new Circle(42);
        expect(circle.area()).to.equal(42 * 42 * Math.PI);
    });
});