'use strict';

const arraySum = require('../arraySum');
const expect = require('chai').expect;
const testData = require('./arraySum.json');

describe('Module 4 - arraySum', () => {
    it('should be a function', () => {
        expect(arraySum).to.be.instanceOf(Function);
    });

    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(arraySum.apply(null, data.arguments)).to.equal(data.result);
        });
    });
});