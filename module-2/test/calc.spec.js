const { Then } = require('cucumber');
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

    it("should have proper value", () => {
        //Given
        const c = calc(3);
        //When
        //Then
        expect(c.v).to.equal(3);
    });

    describe("add", () => {
        it("should exist", () => {
             //Given
             const c = calc(3);
             //When
             //Then
             expect(c.add).not.to.undefined;
        });

        it("should be able to add a number to the current value", () => {
            //Given
            const c = calc(3);
            //When
            const result = calc(3).add(5);
            //Then
            expect(result.v).to.equal(8);

        });
   
    });
    describe("minus", () => {
        it("should exist", () => {
            //Given
            const c = calc(3);
            //When
            //Then
            expect(c.minus).not.to.undefined;
        });
        it("should be able to subtract a number from the current value", () => {
            //Given
            const c = calc(3);
            //When
            const result = calc(3).minus(2);
            //Then
            expect(result.v).to.equal(1);
        });
    });

    //..

    describe("divide", () => {
        it("should exist", () => {
            //Given
            const c = calc(42);
            //When
            //THen
            expect(c.divide).not.to.undefined;

        });

        it("should be able to perform a valid division", () => {

            //Given
            const c = calc(10);
            //When
            const result = c.divide(2).v;
            //Then
            expect(result).to.be.equal(5);
        });
  
        it("should handle division by 0", () => {

            //Given
            const c = calc(5);
            //When
            //Then
            expect(() => c.divide(0)).to.throw("Division");
            

        });
    });
    describe("sqrt", () => {
        it("should exist", () => {
            //Given
            const c = calc(4);
            //When
            //THen
            expect(c.sqrt).not.to.undefined;

        });
        it("should be able to square a number", () => {
            //Given
            const c = calc(4);
            //When
            const result = calc(4).sqrt().v;
            //Then
            expect(result).to.equal(2);
        });

        it ("should handle negative numbers", () => {
            //Given
            const c = calc(-3);
            //When
            //Then
            expect(() => c.sqrt()).to.throw("Square");
        });
    });
    describe("times", () => {
        it("should exist", () => {
            //Given
            const c = calc(4);
            //When
            //THen
            expect(c.times).not.to.undefined;

        });

        it("should be able to multiply numbers", () => {
            //Given
            const c = calc(3);
            //When
            const result = calc(3).times(10).v;
            //Then
            expect(result).to.equal(30);

        });

    });

    describe("modulo", () => {
        it("should exist", () => {
            //Given
            const c = calc(10);
            //When
            //THen
            expect(c.modulo).not.to.undefined;

        });

        it("should be able to perform modulo operation", () => {
            //Given
            const c = calc(10);
            //When
            const result = c.modulo(5).v;
            //Then
            expect(result).to.equal(0);
        });

    });

    describe("multiply operations", () => {
        it("should be able to perform multiply operations", () => {
            //Given
            const c = calc(3);
            //When
            const result = c.add(4).minus(3).times(6).v;
            //THen
            expect(result).to.equal(24);

        });

    });




});

