const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    
    // constructor
    it("should have a proper value", () => {
        const c = calc(3);
        expect(c).not.to.be.undefined;
    });

    describe("add", () => {
        // Checks If I have a calculator there is an "add" method as well?
        // If the first IT fails within a describe, the other IT test cases won't be checked
        it("should exist", () => {
            // GIVEN
            const c = calc(3);
            // WHEN
            // THEN
            expect(c.add).not.to.be.undefined;
        }); 

        it("should be able to add a number to the current value", () => {
            // GIVEN
            const c = calc(3);
            // WHEN
            const result = c.add(5).v;
            // THEN
            expect(result).to.equal(8);
        });
    });

    describe("minus", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.minus).not.to.be.undefined;
        }); 

        it("should be able to substract a number from the current value", (asd) => {
            // GIVEN
            // WHEN
            // THEN
        });
    });

    describe("square", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.sqrt).not.to.be.undefined;
        }); 

        it("should be able to get the square root of the current value");
        it("should handle square root with negative number");
    });

    describe("times", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.times).not.to.be.undefined;
        }); 

        it("should be able to multiply the current value with the given number");
    });

    describe("divide", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.divide).not.to.be.undefined;
        }); 

        it("should be able to divide the current value with the given number");
        it("should handle division by 0");
    });

    describe("modulo", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.modulo).not.to.be.undefined;
        }); 

        it("should be able to get the modulo by dividing the current number with the given number");
    });

    describe("complexExpression", () => {
        it("should be able to calculate the given more complex expression");
    });
});