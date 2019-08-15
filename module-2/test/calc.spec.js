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

	it("should have proper value", 
		() => {
			const c = calc(3);
			const result = c.v;
			expect(result).to.equal(3);
		});

	describe("add",
		() => {
			it("should exist",
				() => {
					const c = calc(3);
					expect(c.add).not.to.be.undefined;
				});
			it("should be able to add number to the current value",
				() => {
					const c = calc(3);
					const result = c.add(5).v;
					expect(result).to.equal(8);

				});
		});


	describe("minus",
		() => {
			it("should exist",
				() => {
					const c = calc(3);
					expect(c.minus).not.to.be.undefined;
				});
			it("should be able to substract a number from the current value",
				() => {
					const c = calc(3);
					const result = c.minus(2).v;
					expect(result).to.equal(1);
				});
		});

	describe("sqrt",
		() => {
			it("should exist",
				() => {
					const c = calc(4);
					expect(c.sqrt).not.to.be.undefined;
				});
			it("should be able to return the square root of a number",
				() => {
					const c = calc(4);
					const result = c.sqrt().v;
					expect(result).to.equal(2);
				});
			it("should handle calculating the square root of a negative number",
				() => {
					const c = calc(-3);
					expect(() => c.sqrt()).to.throw("Square");

				});
		});

	describe("times",
		() => {
			it("should exist",
				() => {
					const c = calc(3);
					expect(c.times).not.to.be.undefined;
				});
			it("should be able to multiply the current value by a number",
				() => {
					const c = calc(3);
					const result = c.times(10).v;
					expect(result).to.equal(30);
				});
		});

	describe("divide",
		() => {
			it("should exist",
				() => {
					const c = calc(10);
					expect(c.divide).not.to.be.undefined;
				});
			it("should be able to divide the current value by a number",
				() => {
					const c = calc(10);
					const result = c.divide(2).v;
					expect(result).to.equal(5);

				});
			it("should handle division by 0",
				() => {
					const c = calc(5);
					expect(() => c.divide(0)).to.throw("Division");
				});
		});

	describe("modulo",
		() => {
			it("should exist",
				() => {
					const c = calc(10);
					expect(c.modulo).not.to.be.undefined;
				});
			it("should be able to return the remainder of a division of the current value by a number",
				() => {
					const c = calc(10);
					const result = c.modulo(5).v;
					expect(result).to.equal(0);
				});
		});

	describe("sequence",
		() => {
			it("should handle several sequential mathematical operations",
				() => {
					const c = calc(3);
					const result = c.add(4).minus(3).times(6).v;
					expect(result).to.equal(24);
				});
		});
});