'use strict';

const euclidean = require('../euclidean');
const expect = require('chai').expect;

describe('Module 1 - Euclidean algorithm', () => {
    it("should return a number", () => {
        return expect(euclidean(2, 2)).to.be.a('number');
    });

    it("should return 0 if negative value passed", () => {
        return expect(euclidean(-2, 2)).to.equal(0);
    });

    const values = [
        [1, 1, 1],
        [1, 7, 1],
        [128, 16, 16],
        [7, 9, 1],
        [6, 9, 3],
        [683, 997, 1]
    ];
    values.forEach(v => {
        it(`should return ${v[2]} for (${v[0]},${v[1]})`, () => {
            return expect(euclidean(v[0], v[1])).to.equal(v[2]);
        });
    });
});