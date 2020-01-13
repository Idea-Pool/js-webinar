const Circle = require("../../oop/circle");
const expect = require('chai').expect;

describe("Circle", () => {
    test("should store radius", () => {
        const circle = new Circle(12);
        expect(circle.r).to.equal(12);
    });

    test("should handle invalid radius", () => {
        expect(() => new Circle(-2)).to.throw();
    });

    test("should calculate perimeter", () => {
        const circle = new Circle(42);
        expect(circle.getPerimeter()).to.equal(2 * 42 * Math.PI);
    });

    test("should calculate ares", () => {
        const circle = new Circle(42);
        expect(circle.getArea()).to.equal(42 * 42 * Math.PI);
    });
});