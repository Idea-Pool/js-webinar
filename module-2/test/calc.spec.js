'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {

  describe('initial value', () => {

    it('should have proper positive initial value', ()=> {
      const c = calc(3);
      expect(c.v).to.be.equal(3);
    });

    it('should have proper negative initial value', () => {
      const c = calc(-10);
      expect(c.v).to.be.equal(-10);
    });

  });

  describe('.add', () => {

    it('should have a method to add value', () => {
      const c = calc(4);
      expect(c.add).not.to.be.undefined
    })

    it('should add any value to the current one', () => {
      const c = calc(4);
      c.add(6);
      expect(c.v).to.be.equal(10);
    })

  });

  describe('.minus', () => {
    it('should have a method to subtract value', () => {
      const c = calc(4);
      expect(c.minus).not.to.be.undefined
    });

    it('should subtract any positive value from the current one', () => {
      const c = calc(11);
      c.minus(4);
      expect(c.v).to.be.equal(7);
    });

    it('should return negative value when subtract number larger than current', () => {
      const c = calc(4);
      c.minus(8);
      expect(c.v).to.be.equal(-4);
    });

    it('should subtract negative value from the negative number correctly', () => {
      const c = calc(-4);
      c.minus(-8);
      expect(c.v).to.be.equal(4);
    });

  })

  describe('.sqrt', () => {

    it('should have a method to calculate square root', () => {
      const c = calc(4);
      expect(c.sqrt).not.to.be.undefined
    });

    it('should calculate square root of non-negative value', () => {
      const c = calc(16);
      c.sqrt();
      expect(c.v).to.be.equal(4);
    });

    it('should throw an error for a negative value', () => {
      const c = calc(-4);
      expect(c.sqrt).to.throw();
    });

  })

  describe('.times', () => {

    it('should have a method for multiplying', () => {
      const c = calc(4);
      expect(c.times).not.to.be.undefined;
    });

    it('should multiply any given positive value', () => {
      const c = calc(4);
      c.times(11);
      expect(c.v).to.be.equal(44);
    });

    it('should multiply any given negative value', () => {
      const c = calc(6);
      c.times(-10);
      expect(c.v).to.be.equal(-60);
    });

  });

  describe('.divide', () => {

    it('should have a method for division', () => {
      const c = calc(18);
      expect(c.divide).not.to.be.undefined;
    });

    it('should divide any positive value', () => {
      const c = calc(12);
      c.divide(4);
      expect(c.v).to.be.equal(3);
    });

    it('should divide any negative value', () => {
      const c = calc(16);
      c.divide(-4);
      expect(c.v).to.be.equal(-4);
    });

    it('should throw an error when division by zero', () => {
      const c = calc(4);
      expect(c.v).to.throw;
    });

  });

  describe('.modulo', () => {

    it('should have a method for taking a number modulo', () => {
      const c = calc(15);
      expect(c.modulo).not.to.be.undefined;
    });

    it('should divide any positive value by modulo', () => {
      const c = calc(5);
      c.modulo(2);
      expect(c.v).to.be.equal(1);
    });

    it('should divide any negative value by modulo', () => {
      const c = calc(-5);
      c.modulo(2);
      expect(c.v).to.be.equal(-1);
    });

  });

  describe('stacked operations', () => {

    it('should calculate different operations placed in a queue', () => {
      const c = calc(3);
      c.add(4).minus(3).times(6);
      expect(c.v).to.be.equal(24);
    });

    it('should calculate different operations placed in a queue with proper priority', () => {
      const c = calc(3);
      c.add(4).times(6).minus(3);
      expect(c.v).to.be.equal(24);
    });

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
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator

});
