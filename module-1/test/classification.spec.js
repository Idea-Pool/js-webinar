'use strict';

const classification = require('../classification');
const expect = require('chai').expect;

describe('Module 1 - Classification', () => {
    it("should return a number", () => {
        return expect(classification(0)).to.be.a('number');
    });

    it("should return 0 if score is negative", () => {
        return expect(classification(-1)).to.equal(0);
    });

    it("should return 0 if score is bigger than the maximum (100)", () => {
        return expect(classification(101)).to.equal(0);
    });

    const scores = [
        [0, 1], [20, 1], [59, 1],
        [60, 2], [61, 2], [69, 2],
        [70, 3], [71, 3], [79, 3],
        [80, 4], [81, 4], [89, 4],
        [90, 5], [91, 5], [100, 5]
    ];
    scores.forEach(v => {
        it(`should return ${v[1]} for ${v[0]}`, () => {
            return expect(classification(v[0])).to.equal(v[1]);
        });
    })
});