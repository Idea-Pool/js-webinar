'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe('The methods of the calculator should match the requirements', () => {

    it("should store the initial value", () => {
        // Given
        const current = calc(3);
        // Then
        expect(current.v).to.be.equal(3);
    });

    it("should support chaining operations", () => {
        expect(calc(3)
               .add(4)
               .minus(3)
               .times(6).v).to.equal(24);
   });

    describe(".add()", () => {
        it("should have method to add a number", () => {
            const current = calc(20);
            expect(current.add).not.to.be.undefined;
        });

        it("should add the given number to the current one", () => {
            // Given
            const current = calc(5);
            // When
            const result = current.add(5);
            // Then
            expect(current.v).to.equal(10);
        });

        it("should add a negative number to a positive number", () => {
            // Given
            const current = calc(5);
            // When
            const result = current.add(-10);
            // Then
            expect(current.v).to.equal(-5);
        });
    });

    describe(".minus()", () => {
        it("should have method to subtract a number", () => {
            // Given
            const current = calc(20);
            // Then
            expect(current.minus).not.to.be.undefined;
        });

        it("should subtract the given number from the current one", () => {
            // Given
            const current = calc(15);
            // When
            const result = current.minus(10);
            // Then
            expect(current.v).to.equal(5);
        });

        it("should work if the result is a negative number", () => {
            // Given
            const current = calc(30);
            // When
            const result = current.minus(100);
            // Then
            expect(current.v).to.equal(-70);
        });
    });

    describe(".sqrt()", () => {
        it("should exist", () => {
            const current = calc(42);
            expect(current.sqrt).not.to.be.undefined;
        });

        it("should determine the square root of the current number", () => {
            // Given
            const current = calc(16);
            // When
            const result = current.sqrt();
            // Then
            expect(result.v).to.equal(4);
        });

        it("should throw error when the current number is negative", () => {
            // Given
            const current = calc(-16);
            // When
            const action = () => current.sqrt();
            // Then
            expect(action).to.throw();
        });
    });

    describe(".times()", () => {
        it("should exist", () => {
            // Given
            const current = calc(10);
            // Then
            expect(current.times).not.to.be.undefined;
        });

        it("should multiply the given numbers", () => {
            // Given
            const current = calc(10);
            // When
            const result = current.times(3);
            // Then
            expect(result.v).to.equal(30);
        });

        it("should multiply the given numbers if one of them is negative", () => {
            // Given
            const current = calc(-5);
            // When
            const result = current.times(5);
            // Then
            expect(result.v).to.equal(-25);
        });

        it("should multiply the given numbers if both of them are negative", () => {
            // Given
            const current = calc(-5);
            // When
            const result = current.times(-5);
            // Then
            expect(result.v).to.equal(25);
        });
    });

    describe(".divide()", () => {
        it("should divide the given numbers", () => {
            // Given
            const current = calc(10);
            // When
            const result = current.divide(5);
            // Then
            expect(result.v).to.equal(2);
        });

        it("should throw error when the divider is 0", () => {
            // Given
            const current = calc(10);
            // When
            const action = () => current.divide(0);
            // Then
            expect(action).to.throw();
        });
    });

    describe(".modulo()", () => {
        it("should give back the remainder", () => {
            // Given
            const current = calc(10);
            // When
            const result = current.modulo(5);
            // Then
            expect(result.v).to.equal(0);
        });
    });
});