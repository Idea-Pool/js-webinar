'use strict';

const longestString = require('../longestString');
const expect = require('chai').expect;
const testData = require('./longestString.json');

describe('Module 4 - longestString', () => {
    it('should be a function', () => {
        expect(longestString).to.be.instanceOf(Function);
    });

    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(longestString.apply(null, data.arguments)).to.equal(data.result);
        });
    });
});