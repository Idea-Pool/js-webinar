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

    it("should store the initial value", () => {
        //Given
        const current = calc(3);
        //When
        //Then
        expect(current.v).to.be.equal(3);
    });

    it("should support chaining operations", () => {
        //Given
        const current = calc(3);
        //When
        const result = current.add(4).minus(3).times(6);
        //Then
        expect(result.v).to.be.equal(24);
    });

    describe(".add()", () => {
        it("should exist", () => {
            //Given
            const current = calc(42);
            //When
            //Then
            expect(current.add).not.to.be.undefined;
        });

        it("should add the given number to the current one", () => {
            //Given
            const current = calc(2);
            //When
            const result = current.add(3);
            //Then
            expect(result.v).to.be.equal(5);
        });
    });

    describe(".minus()", () => {
        it("should exist", () => {
            //Given
            const current = calc(42);
            //When
            //Then
            expect(current.minus).not.to.be.undefined;
        });

        it("should subtract the given number from the current one", () => {
            //Given
            const current = calc(15);
            //When
            const result = current.minus(10);
            //Then
            expect(result.v).to.be.equal(5);
        });
    });

    describe(".sqrt()", () => {
        it("should exist", () => {
            //Given
            const current = calc(42);
            //When
            //Then
            expect(current.sqrt).not.to.be.undefined;
        });

        it("should determine the square root of the current number", () => {
            //Given 
            const current = calc(9);
            //When
            const result = current.sqrt();
            //Then
            expect(result.v).to.be.equal(3);
        });

        it("should throw error when the current number is negative", () => {
            //Given
            const current = calc(-1);
            //When
            const action = () => current.sqrt();
            //Then
            expect(action).to.throw("Square root of negative value cannot be determined!")
        });
    });

    describe(".times()", () => {
        it("should exist", () => {
            //Given
            const current = calc(42);
            //When
            //Then
            expect(current.times).not.to.be.undefined;
        });

        it("should multiply the given number by the current one", () => {
            //Given
            const current = calc(8);
            //When
            const result = current.times(9);
            //Then
            expect(result.v).to.be.equal(72);
        });
    });

    describe(".divide()", () => {
        it("should exist", () => {
            //Given
            const current = calc(42);
            //When
            //Then
            expect(current.divide).not.to.be.undefined;
        });

        it("should divide the given number by the current one", () => {
            //Given
            const current = calc(21);
            //When
            const result = current.divide(3);
            //Then
            expect(result.v).to.be.equal(7);
        });

        it("should throw an error if dividing by 0", () => {
            //Given
            const current = calc(11);
            //When
            const action = () => current.divide(0);
            //Then
            expect(action).to.throw("Division by 0 is not possible!");
        });
    });

    describe(".modulo()", () => {
        it("should exist", () => {
            //Given
            const current = calc(42);
            //When
            //Then
            expect(current.modulo).not.to.be.undefined;
        });

        it("should calculate the modulo of a given number with the current one", () => {
            //Given
            const current = calc(8);
            //When
            const result = current.modulo(3);
            //Then
            expect(result.v).to.be.equal(2);
        });
    });
});