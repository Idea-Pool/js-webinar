'use strict';

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
    describe("add", () => {
        it("should have proper value", () => {
            // Given
            const initialNumber = calc(3);
            // When
            // Then
            expect(initialNumber.v).to.equal(3);
        });

        it("should be able to add a number to the current value", () => {
            // Given
            const initialNumber = calc(3);
            // When
            const result = initialNumber.add(5).v;
            // Then
            expect(result).to.equal(8);
        });
    });
    
    describe("minus", () => {
        it("should be able to add a number to the current value", () => {
            // Given
            const initialNumber = calc(3);
            // When
            const result = initialNumber.minus(2).v;
            // Then
            expect(result).to.equal(1);
        });
    });

    describe("sqrt", () => {
        it("should be able to calculate square root correctly", () => {
            // Given
            const initialNumber = calc(4);
            // When
            const result = initialNumber.sqrt().v;
            // Then
            expect(result).to.equal(2);
        });
    
        it("should handle Square root of negative value", () => {
            // Given
            const initialNumber = calc(-3);
            // When
            // Then
            expect(() => initialNumber.sqrt()).to.throw("Square root of negative value cannot be determined!");
        });
    });

    describe("times", () => {
        it("should be able to times correctly", () => {
            // Given
            const initialNumber = calc(3);
            // When
            const result = initialNumber.times(10).v;
            // Then
            expect(result).to.equal(30);
        });
    });

    describe("divide", () => {
        it("should be able to divide correctly", () => {

            // Given
            const initialNumber = calc(10);
            // When
            const result = initialNumber.divide(2).v;
            // Then
            expect(result).to.equal(5);
        });
    
        it("should handle division by '0'", () => {
    
            // Given
            const initialNumber = calc(10);
            // When
            // Then
            expect(() => initialNumber.divide(0)).to.throw("Division by 0 is not possible!");
        });
    });

    describe("modulo", () => {
        it("should be able to modulo correctly", () => {
            // Given
            const initialNumber = calc(10);
            // When
            const result = initialNumber.modulo(5).v;
            // Then
            expect(result).to.equal(0);
        });
    });

    describe("several functions", () => {
        it("should be able to count correctly", () => {
            // Given
            const initialNumber = calc(3);
            // When
            const result = initialNumber.add(4).minus(3).times(6).v;
            // Then
            expect(result).to.equal(24);
        });
    });
});