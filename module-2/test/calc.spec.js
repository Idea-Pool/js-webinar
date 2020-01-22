const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3 +
     * calc(3).add(5).v // 8 +
     * calc(3).minus(2).v // 1 +
     * calc(4).sqrt().v // 2 +
     * calc(3).times(10).v // 30 +
     * calc(10).divide(2).v // 5 +
     * calc(10).modulo(5).v // 0 +
     * calc(5).divide(0) // throw error +
     * calc(-3).sqrt() // throw error +
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24 +
     */
    // TODO: write test cases to test calculator
    it("should have proper value", () => {
        const c = calc(3).v;
        expect(c).not.to.be.undefined;
    });

    describe("add", () => {

        it("should exist", () => {
            const c = calc(3).v;
            expect(c).not.to.be.undefined;
        });

        it("should be able to add a number to the current value", () => {
            //Given
            const c = calc(3);
            //When
            const result = c.add(5).v;
            //Then
            expect(result).to.be.equal(8);
        });
    });

    describe("minus", () => {

        it("should exist", () => {
            const c = calc(3).v;
            expect(c).not.to.be.undefined;
        });

        it("should be able to substract a number from the current value", () => {
            //Given
            const c = calc(3);
            //When
            const result = c.minus(2).v;
            //Then
            expect(result).to.be.equal(1);
        });
    });

    describe("divide", () => {

        it("should exist", () => {
            const c = calc(3).v;
            expect(c).not.to.be.undefined;
        });

        it("should be able to perform a valid division", () => {
            //Given
            const c = calc(10);
            //When
            const result = c.divide(5).v;
            //Then
            expect(result).to.be.equal(2);
        });

        it("should handle the division by zero", () => {
            //Given
            const c = calc(10);
            //When
            //const result = c.divide(0).v;
            //Then
            expect(() => c.divide(0)).throw(); //"Division by 0 is not possible!"
        });

        describe("sqrt", () => {

            it("should exist", () => {
                const c = calc(3).v;
                expect(c).not.to.be.undefined;
            });

            it("should be able to extract the square root of the value", () => {
                //Given
                const c = calc(4);
                //When
                const result = c.sqrt().v;
                //Then
                expect(result).to.be.equal(2);
            });

            it("should handle square root of negative value", () => {
                //Given
                const c = calc(-3);
                //When
                //Then
                expect(() => c.sqrt(-3)).throw(); //"Square root of negative value cannot be determined!"
            });

            describe("times", () => {

                it("should exist", () => {
                    const c = calc(3).v;
                    expect(c).not.to.be.undefined;
                });

                it("should be able to multiply values", () => {
                    //Given
                    const c = calc(3);
                    //When
                    const result = c.times(10).v;
                    //Then
                    expect(result).to.be.equal(30);
                });
            })
            describe("modulo", () => {

                it("should exist", () => {
                    const c = calc(3).v;
                    expect(c).not.to.be.undefined;
                });

                it("should be able to calculte a remainder by module values", () => {
                    //Given
                    const c = calc(10);
                    //When
                    const result = c.modulo(5).v;
                    //Then
                    expect(result).to.be.equal(0);
                });
            })
            describe("multi-operation", () => {

                it("should exist", () => {
                    const c = calc(3).v;
                    expect(c).not.to.be.undefined;
                });

                it("should be able to calculate result for multi-operations example value", () => {
                    //Given
                    const c = calc(3);
                    //When
                    const result = c.add(4)
                    .minus(3)
                    .times(6).v;
                    //Then
                    expect(result).to.be.equal(24);
                });
                
            })
        })
    })
})