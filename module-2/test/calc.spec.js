'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
  it('should return intital value', () => {
    const initValue = calc(3).v;
    expect(3).to.equal(initValue, `Initial value should be 3, but equal ${initValue}`);
  });

  it('should support add operation', () => {
    const additionResult = calc(3).add(5).v;
    expect(8).to.equal(additionResult, `Result of addition should be 8, but equal ${additionResult}`);
  });

  it('should support substraction operation', () => {
    const substractionResult = calc(3).minus(2).v;
    expect(1).to.equal(substractionResult, `Result of substraction should be 1, but equal ${substractionResult}`);
  });

  it('should support square root operation', () => {
    const sqrtResult = calc(4).sqrt().v;
    expect(2).to.equal(sqrtResult, `Square root of 4 should be 2, but equal ${sqrtResult}`);
  });

  it('should support times operation', () => {
    const timesResult = calc(3).times(10).v;
    expect(30).to.equal(timesResult, `3 times of 10 should be 30, but equal ${timesResult}`);
  });

  it('should support division operation', () => {
    const divisionResult = calc(10).divide(2).v;
    expect(5).to.equal(divisionResult, `Result of division should be 5 , but equal ${divisionResult}`);
  });

  it('should support modulo operation', () => {
    const moduloResult = calc(10).modulo(5).v;
    expect(0).to.equal(moduloResult, `10 modulo 5 should be 0, but equal ${moduloResult}`);
  });

  it('should support modulo operation', () => {
    const moduloResult = calc(10).modulo(5).v;
    expect(0).to.equal(moduloResult, `10 modulo 5 should be 0, but equal ${moduloResult}`);
  });

  it('should throw error for division by zero operation', () => {
    const calculator = calc(5);
    expect(() => calculator.divide(0)).to.throw;
  });

  it('should throw error for square root of negative number operation', () => {
    const calculator = calc(-3);
    expect(() => calculator.sqrt()).to.throw;
  });

  it('should support substraction of greater number operation', () => {
    const subsrGreaterResult = calc(1).minus(3).v;
    expect(-2).to.equal(subsrGreaterResult, `Substraction 1 of 3 should be -2, but equal ${subsrGreaterResult}`);
  });

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
   * calc(1).minus(3) //-2
   */
  // TODO: write test cases to test calculator

});