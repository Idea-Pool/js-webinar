'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe.only('The methods of the calculator should match the requirements', () => {
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

    it("should store the initial value", () => {
        // Given
        const current = calc(3);
        // Then
        expect(current.v).to.be.equal(3);
    });

    describe(".add()", () => {
        it("should have method to add a number", () => {
            const current = calc(20);
            expect(current.add).not.to.be.undefined;
        });

        it("should add a given number to the current one", () => {
            // Given
            const current = calc(5);
            // When
            const result = current.add(5);
            // Then
            expect(current.v).to.equal(10);
        });

        it("should add a negative number ot the positive number", () => {
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

    it("should support chaining operations");
});