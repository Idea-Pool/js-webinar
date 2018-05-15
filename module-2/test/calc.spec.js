'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
  it('should return initial value', () => {
    const c = calc(3).v;
    expect(c).to.be.equal(3);
    //  calc(3).v // 3
  })

  describe('add', () => {
    it('should add any value to current', () => {
      //  calc(3).add(5).v // 8
      const c = calc(3);
      expect(c.add(5).v).to.be.equal(8);
    })
  });

  describe('minus', () => {
    it('should subtract any value to current', () => {
      //  calc(3).minus(2).v // 1
      const c = calc(3);
      expect(c.minus(2).v).to.be.equal(1);
    })
  });

  describe('sqrt', () => {
    it('should have method to square ', () => {
      //  calc(4).sqrt().v // 2
      const c = calc(4);
      expect(c.sqrt().v).to.be.equal(2);
    })

    it('should throw error on incorrect value', () => {
      //  calc(-3).sqrt() // throw error
      const c = calc(-3);
      expect(c.sqrt).to.throw();
    })
  });

  describe('times', () => {
    it('should multiply to any value', () => {
      //  calc(3).times(10).v // 30
      const c = calc(3);
      expect(c.times(10).v).to.be.equal(30);
    })
  });

  describe('divide', () => {
    it('should divide by value', () => {
      //  calc(10).divide(2).v // 5
      const c = calc(10);
      expect(c.divide(2).v).to.be.equal(5);
    })

    it('should divide by zero should throw an error', () => {
      //  calc(5).divide(0) // throw error
      const c = calc(5);
      expect(() => c.divide(0)).to.throws();
    })
  });

  describe('modulo', () => {
    it('should return modulo by any value', () => {
      //  calc(10).modulo(5).v // 0
      const c = calc(10);
      expect(c.modulo(5).v).to.be.equal(0);
    })
  });

  describe('chain', () => {
    it('should return support chaining', () => {
      //  calc(3).add(4)
      //      .minus(3)
      //      .times(6).v // 24
      const c = calc(3).add(4).minus(3).times(6).v;
      expect(c).to.be.equal(24);
    })
  });
});