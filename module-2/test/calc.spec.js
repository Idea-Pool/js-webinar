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
it ('should have proper initial value', () => {
    const c =  calc(3);
    expect(c.v).to.equal(3);
})

it ('Should support add operation', () => {
    const c = calc(3).add(5);
    expect(c.v).to.equal(8);
})

it ('Should support subtraction operation', () => {
    const c = calc(3).minus(2);
    expect(c.v).to.equal(1);
})

it ('Should support square root calculate operation', () => {
    const c = calc(4).sqrt();
    expect(c.v).to.equal(2);
})

it ('Should support multiplication operation', () => {
    const c = calc(3).times(10);
    expect(c.v).to.equal(30);
})

it ('Should support division operation', () => {
    const c = calc(10).divide(2);
    expect(c.v).to.equal(5);
})

it ('Should calculate modulo', () => {
    const c = calc(10).modulo(5);
    expect(c.v).to.equal(0);
})

it ('Should throw error in case of division by 0', () => {
    let c = calc(3);
    expect( () => c.divide(0)).to.throw;
})

it ('Should throw error in case of calculation square roof of a negative number', () => {
    let c = calc(-3);
    expect( () => c.sqrt()).to.throw;
})

it ('Should perform a set of operations', () => {
    const c = calc(3).add(4).minus(3).times(6);
    expect(c.v).to.equal(24);
})

it ('Should have method to calculate square root', () => {
    const c = calc(3);
    expect(c.sqrt).not.to.be.undefined;
})

it ('Should have method to calculate sum', () => {
    const c = calc(3);
    expect(c.add(2)).not.to.be.undefined;
})

it ('Should have method to calculate subrtaction operation', () => {
    const c = calc(3);
    expect(c.minus(1)).not.to.be.undefined;
})

it ('Should have method to calculate multiplication operation', () => {
    const c = calc(3);
    expect(c.times(2)).not.to.be.undefined;
})

it ('Should have method to calculate division operation', () => {
    const c = calc(3);
    expect(c.divide(1)).not.to.be.undefined;
})

it ('Should have method to calculate modulo', () => {
    const c = calc(3);
    expect(c.modulo(3)).not.to.be.undefined;
})
});