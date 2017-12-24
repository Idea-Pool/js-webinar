'use strict';

const toCamelCase = require('../toCamelCase');
const expect = require('chai').expect;
const testData = require('./toCamelCase.json');

describe.only('Module 4 - toCamelCase', () => {
    it('should be a function', () => {
        expect(toCamelCase).to.be.instanceOf(Function);
    });

    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(toCamelCase.apply(null, data.arguments)).to.equal(data.result);
        });
    });
});