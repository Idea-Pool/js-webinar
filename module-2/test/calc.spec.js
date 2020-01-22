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


    it ("Should have proper value", () => {
         const c=calc(3).v;
         expect(c).equal(3);
        
    })
    describe("add", () => {

        it("Should exist", () =>{
            const c=calc(3).v;
            expect(c).not.to.be.undefined;

        })
        it("Should be able to add a number to the current value", () =>{
            const c=calc(3);
            const result=c.add(5).v;
            expect(result).equal(8);

        })

    })

    describe("minus", () => {

        it("Should exist", () =>{
            const c=calc(3).v;
            expect(c).not.to.be.undefined;

        })
        it("Should be able to subtract a number from the current value", () =>{
            const c=calc(3);
            const result=c.minus(2).v;
            expect(result).equal(1);

        })

    })

    describe("sqrt", () => {


        it("Should exist", () =>{
            const c=calc(4).v;
            expect(c).not.to.be.undefined;

        })
        it("Should be able to calculate the square root of the current value", () =>{
            const c=calc(4);
            const result=c.sqrt(4).v;
            expect(result).equal(2);

        })
        it("Should handle square root of negative value", () => {
            const c = calc(-3);
            expect(() => c.sqrt(-3)).throw();
        });

    })

    describe("times", () => {

        it("Should exist", () =>{
            const c=calc(3).v;
            expect(c).not.to.be.undefined;

        })
        it("Should be able to multiply a number to the current value", () =>{
            const c=calc(3);
            const result=c.times(10).v;
            expect(result).equal(30);

        })

    })


    describe("divide", () => {

        it("Should exist", () =>{
            const c=calc(10).v;
            expect(c).not.to.be.undefined;

        })
        it("Should be able to divide a number by the current value", () =>{
            const c=calc(10);
            const result=c.divide(2).v;
            expect(result).equal(5);

        })

        it("Should handle tge divition by zero", () =>{
            const c = calc(0);
            expect(() => c.divide(0)).throw();

        })

    })

    describe("modulo", () => {

        it("Should exist", () =>{
            const c=calc(10).v;
            expect(c).not.to.be.undefined;

        })
        it("Should be able to return the remainder of dividing a number by the current value", () =>{
            const c=calc(10);
            const result=c.modulo(5).v;
            expect(result).equal(0);

        })

    })    

    describe("add, minus, times", () => {

        it("Should exist", () =>{
            const c=calc(3).v;
            expect(c).not.to.be.undefined;

        })
        it("Should be able to return result of few operations", () =>{
            const c=calc(3);
            const result=c.add(4).minus(3).times(6).v;
            expect(result).equal(24);

        })

    })





});