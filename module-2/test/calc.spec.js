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
            const c = calc(3);
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

        it("should be able to substract a number from the current value", () => {
            const c = calc(3);
            const result = c.minus(2).v;
            expect(result).to.equal(1);
        });
    });

    describe("square", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.sqrt).not.to.be.undefined;
        }); 

        it("should be able to get the square root of the current value", () => {
            const c = calc(4);

            const result = c.sqrt(2).v;

            expect(result).to.be.equal(2);
        });
        
        it("should handle square root with negative number", () => {
            const c = calc(-4);

            expect(() => c.sqrt()).to.throw("Square root of negative value cannot be determined!");
        });
    });

    describe("times", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.times).not.to.be.undefined;
        }); 

        it("should be able to multiply the current value with the given number", () => {
            const c = calc(3);

            const result = c.times(10).v;

            expect(result).to.be.equal(30);
        });
    });

    describe("divide", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.divide).not.to.be.undefined;
        }); 

        it("should be able to divide the current value with the given number", () => {
            const c = calc(10);

            const result = c.divide(2).v;

            expect(result).to.be.equal(5);
        });

        it("should handle division by 0", () => {
            const c = calc(42);
            expect(() => c.divide(0)).to.throw("Division by 0 is not possible!");
            //expect(c.divide.bind(null, 0)).to.throw();
        });
    });

    describe("modulo", () => {
        it("should exist", () => {
            const c = calc(3);
            expect(c.modulo).not.to.be.undefined;
        }); 

        it("should be able to get the modulo by dividing the current number with the given number", () => {
            const c = calc(10);

            const result = c.modulo(5).v;

            expect(result).to.be.equal(0);
        });
    });

    describe("complexExpression", () => {
        it("should be able to calculate the given more complex expression", () => {
            const c = calc(3);

            const result = c.add(4).minus(3).times(6).v;

            expect(result).to.be.equal(24);
        });
    });
});