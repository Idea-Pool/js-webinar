'use strict';

const arraySorted = require('../arraySorted');
const expect = require('chai').expect;
const testData = require('./arraySorted.json');

describe('Module 4 - arraySorted', () => {
    it('should be a function', () => {
        expect(arraySorted).to.be.instanceOf(Function);
    });

    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(arraySorted.apply(null, data.arguments)).to.equal(data.result);
        });
    });
});