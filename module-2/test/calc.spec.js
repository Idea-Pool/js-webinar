'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe('Module 2 - Calculator test suite', () => {
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

    it('Should have proper initial value', () => {
        // Given
        let calculator = calc(3);

        // When + Then
        expect(calculator.v).to.equal(3);
    });

    it('Should support add opertaion', () => {
        // Given
        let calculator = calc(3);

        // When
        let result = calculator.add(5);

        // Then
        expect(result.v).to.equal(8);
    });

    it('Should support substract operation', () => {
        // Given
        let calculator = calc(3);

        // When
        let result = calculator.minus(2);

        // Then
        expect(result.v).to.equal(1);
    });

    it('Should support sqrt operation', () => {
        // Given
        let calculator = calc(4);

        // When
        let result = calculator.sqrt();

        // Then
        expect(result.v).to.equal(2);
    });

    it('Should support multiple operation', () => {
        // Given
        let calculator = calc(3);

        // When
        let result = calculator.times(10);

        // Then
        expect(result.v).to.equal(30);
    });

    it('Should support divide operation', () => {
        // Given
        let calculator = calc(10);

        // When
        let result = calculator.divide(2);

        // Then
        expect(result.v).to.equal(5);
    });

    it('Sould support modulo operation', () => {
        // Given
        let calculator = calc(10);

        // When
        let result = calculator.modulo(5);

        // Then
        expect(result.v).to.equal(0);
    });

    it('Should throw error in case of division by 0', () => {
        // Given
        let c = calc(3);

        // When + Then
        expect(() => c.divide(0)).to.throw;
    });

    it('Should throw error in case of sqrt by negative number', () => {
        // Given
        let c = calc(3);

        // When + Then
        expect(() => c.sqrt(-3)).to.throw;
    });

    it('Should support operations in chain', () => {
        // Given
        let calculator = calc(3);

        // When
        let result = calculator.add(4)
            .minus(3)
            .times(6);

        // Then
        expect(result.v).to.equal(24);
    });


});