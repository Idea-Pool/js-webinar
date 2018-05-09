'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3+
     * calc(3).add(5).v // 8+
     * calc(3).minus(2).v // 1+
     * calc(4).sqrt().v // 2 +
     * calc(3).times(10).v // 30 +
     * calc(10).divide(2).v // 5 +
     * calc(10).modulo(5).v // 0+
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error +
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    it('should have proper initial value', () => {
        //Given
        //When
        const c = calc(3);
        //Then
        expect(c.v).to.be.equal(3);
    })

    describe('.add', () => {
        it('should have method to add value', () =>{
            //Given
            const c = calc(3);
            //When
            //Then
            expect(c.add).not.to.be.undefined;
        })

        it('should add any value to current one', () =>{
            //Given
            const c = calc(3);
            //When
            c.add(10);
            //Then
            expect(c.v).to.be.equal(13);
        })
    })

    describe('.minus', () => {
        it('should have method to subtract value', () =>{
            //Given
            const c = calc(3);
            //When
            //Then
            expect(c.minus).not.to.be.undefined;
        })

        it('should subtract any value to current one', () =>{
            //Given
            const c = calc(3);
            //When
            c.minus(2);
            //Then
            expect(c.v).to.be.equal(1);
        })
    })

    describe('.sqrt', () => {
        it('should have method to compute square root', () =>{
            //Given
            const c = calc(4);
            //When
            //Then
            expect(c.sqrt).not.to.be.undefined;
        })
    
        it('should compute square root for non-negative value', () =>{
            //Given
            const c = calc(4);
            //When
            c.sqrt();
            //Then
            expect(c.v).to.be.equal(2);
        })
    
        it('should throw an error for negative value', () =>{
            //Given
            const c = calc(-4);
            //When
            //Then
            expect(c.sqrt).to.throw();
        })
    })

    describe('.times', () => {
        it('should have method to multiply value', () =>{
            //Given
            const c = calc(4);
            //When
            //Then
            expect(c.times).not.to.be.undefined;
        })
    
        it('should multiply values', () =>{
            //Given
            const c = calc(4);
            //When
            c.times(3);
            //Then
            expect(c.v).to.be.equal(12);
        })
    })

    describe('.divide', () => {
        it('should have method to divide value', () =>{
            //Given
            const c = calc(3);
            //When
            //Then
            expect(c.divide).not.to.be.undefined;
        })

        it('should divide by the specified value', () =>{
            //Given
            const c = calc(12);
            //When
            c.divide(2);
            //Then
            expect(c.v).to.be.equal(6);
        })

        it('should throw an error for division on 0', () =>{
            //Given
            const c = calc(3);
            //When
            //Then
            expect(() => c.divide(0)).to.throw();
        })
    })

    describe('.modulo', () => {
        it('should have method to divide by module', () =>{
            //Given
            const c = calc(3);
            //When
            //Then
            expect(c.modulo).not.to.be.undefined;
        })

        it('should show reminder', () =>{
            //Given
            const c = calc(12);
            //When
            c.modulo(5);
            //Then
            expect(c.v).to.be.equal(2);
        })
    })

    describe('.mixed actions', () => {
        it('should properly compute the actions', () =>{
            //Given
            const c = calc(3);
            //When
            c.add(4);
            c.minus(3);
            c.times(6);
            //Then
            expect(c.v).to.be.equal(24);
        })

    })

});