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
    describe('v', () => {
        it('should return positive value when positive number', () => expect(calc(3).v).equal(3))
        it('should return negative value when negative number', () => expect(calc(-3).v).equal(-3))
    })
    describe('add', () => {
        it('should return 8 when adding 3 and 5', () => expect(calc(3).add(5).v).equal(8))
        it('should return -2 when adding 3 and -5', () => expect(calc(3).add(-5).v).equal(-2))
        it('should return -8 when adding -3 and -5', () => expect(calc(-3).add(-5).v).equal(-8))
    })
    describe('minus', () => {
        it('should return 1 when subtracting 3 and 2', () => expect(calc(3).minus(2).v).equal(1))
        it('should return 5 when subtracting 3 and -2', () => expect(calc(3).minus(-2).v).equal(5))
        it('should return -1 when subtracting -3 and -2', () => expect(calc(-3).minus(-2).v).equal(-1))
    })
    describe('sqrt', () => {
        it('should preform sqrt', () => expect(calc(4).sqrt().v).equal(2))
        it('should throw error for negative squared root', () => expect(() => calc(-3).sqrt()).throw('Square root of negative value cannot be determined!'))
    })
    describe('times', () => {
        it('should return 30 when multiplying 3 and 10', () => expect(calc(3).times(10).v).equal(30))
        it('should return -30 when multiplying 3 and -10', () => expect(calc(3).times(-10).v).equal(-30))
        it('should return 30 when multiplying -3 and -10', () => expect(calc(-3).times(-10).v).equal(30))
    })
    describe('divide', () => {
        it('should return 5 when dividing 10 and 2', () => expect(calc(10).divide(2).v).equal(5))
        it('should return -5 when dividing 10 and -2', () => expect(calc(10).divide(-2).v).equal(-5))
        it('should return 5 when dividing -10 and -2', () => expect(calc(-10).divide(-2).v).equal(5))
        it('should throw error when dividing by zero', () => expect(() => calc(5).divide(0)).throw('Division by 0 is not possible!'))
    })
    describe('modulo', () => {
        it('should return the remainder', () => expect(calc(10).modulo(5).v).equal(0))
    })
    it('should perform chained operations', () => expect(calc(3).add(4).minus(3).times(6).v).equal(24))
});