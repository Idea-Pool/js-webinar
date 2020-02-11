const calc = require('../calc.js');
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
    it("should return number", () => {
        var result = calc(3).v;
        expect(result).equals(3);
    });

    it('should add numbers', () => {
        var result = calc(3).add(5).v;
        expect(result).equals(8);
    });

    it('should subtract numbers', () => {
        var result = calc(3).minus(2).v;
        expect(result).equal(1);
    });

    it('should calculate square root', () => {
        var result = calc(4).sqrt().v;
        expect(result).equal(2);
    });

    it('should multiply numbers', () => {
        var result = calc(3).times(10).v;
        expect(result).equal(30);
    });

    it('should divide numbers', () => {
        var result = calc(10).divide(2).v;
        expect(result).equal(5);
    });

    it('should perform modulo on numbers', () => {
        var result = calc(10).modulo(5).v;
        expect(result).equal(0);
    });

    it('should not divide by zero', () => {
        expect(() => {
            calc(5).divide(0).v
        }).to.throw('Division by 0 is not possible!');
    });

    it('should not calculate square root of negative number', () => {
        expect(() => {
            calc(-3).sqrt().v
        }).to.throw('Square root of negative value cannot be determined!');
    });

    it('should chain operations', () => {
        var result = calc(3).add(4).minus(3).times(6).v;
        expect(result).equal(24);
    });



});