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

    it('should have a proper initial value', () => {
        // Given
        // When
        const c = calc(3);
        // Then
        expect(c.v).to.be.equal(3);
    });

    describe('.add', () => {
        it ('should have a method to add a value', () => {
            // Given
            const c = calc();
            // When
            // Then
            expect(c.add).to.not.be.undefined;
        });

        it ('should add a value to the current one', () => {
            // Given
            const c = calc(3);
            // When
            c.add(5);
            // Then
            expect(c.v).to.be.equal(8);
        });

        it ('should add any value to the current one', () => {
            // Given
            const c = calc(3);
            let value = Math.random() * 10;
            // When
            c.add(value);
            // Then
            expect(c.v).to.not.be.equal(3)
        });

    });

    describe('.minus', () => {
        it ('should have a method to decrease a value', () => {
            // Given
            const c = calc();
            // When
            // Then
            expect(c.minus).to.not.be.undefined;
        });

        it ('should decrease the current value', () => {
            // Given
            const c = calc(3);
            // When
            c.minus(2);
            // Then
            expect(c.v).to.be.equal(1);
        });

        it ('should take away any value from the current one', () => {
            // Given
            const c = calc(3);
            let value = Math.random() * 10;
            // When
            c.minus(value);
            // Then
            expect(c.v).to.not.be.equal(3)
        });

    });

    describe('.sqrt', () => {
        it ('should have a method to compute square root', () => {
            // Given
            const c = calc();
            // When
            // Then
            expect(c.sqrt).to.not.be.undefined;

        });

        it ('should compute the square root on non-negative value', () => {
            // Given
            const c = calc(4);
            // When
            c.sqrt();
            // Then
            expect(c.v).to.be.equal(2);
        });

        it ('should throw an error for a negative value', () => {
            // Given
            const c = calc(-3);
            // When
            // Then
            expect(c.sqrt).to.throw();
        });
    });

    describe('.times', () => {
        it ('should have a method to multiply a value', () => {
            // Given
            const c = calc();
            // When
            // Then
            expect(c.times).to.not.be.undefined;

        });

        it ('should multiply the current value', () => {
            // Given
            const c = calc(3);
            // When
            c.times(10);
            // Then
            expect(c.v).to.be.equal(30);
        });

        it ('should return zero if it\'s multiplied by 0', () => {
            // Given
            const c = calc(3);
            // When
            c.times(0);
            // Then
            expect(c.v).to.be.equal(0);
        });
    });

    describe ('.divide', () => {
        it ('should have a method to divide a value', () => {
            // Given
            const c = calc();
            // When
            // Then
            expect(c.divide).to.not.be.undefined;
        });

        it ('should divide the current value', () => {
            // Given
            const c = calc(10);
            // When
            c.divide(2)
            // Then
            expect(c.v).to.be.equal(5);
        });

        it ('should throw an error for a zero', () => {
            // Given
            const c = calc(5);
            // When
            // Then
            expect(c.divide).to.throw();
        });
    });

    describe ('.modulo', () => {
        it ('should have a method to divide by module', () => {
            // Given
            const c = calc();
            // When
            // Then
            expect(c.modulo).to.not.be.undefined;
        });

        it ('should divide by module and show the remainder', () => {
            // Given
            const c = calc(12);
            // When
            c.modulo(5)
            // Then
            expect(c.v).to.be.equal(2);
        });

        it ('should allow to divide without remainder', () => {
            // Given
            const c = calc(10);
            // When
            c.modulo(5)
            // Then
            expect(c.v).to.be.equal(0);
        });

    });

    describe ('.add,.minus,.times', () => {
        it ('should perform a complex scenario and store every intermediate result', () => {
            // Given
            const c = calc(3);
            // When
            c.add(4);
            c.minus(3);
            c.times(6);
            // Then
            expect(c.v).to.be.equal(24);
        });
    });

});