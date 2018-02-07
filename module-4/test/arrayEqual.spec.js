'use strict';

const arrayEqual = require('../arrayEqual');
const expect = require('chai').expect;
const sinon = require('sinon');
const testData = require('./arrayEqual.json');

describe('Module 4 - arrayEqual', () => {
    beforeEach(() => {
        sinon.spy(console, "warn");
    });

    afterEach(() => {
        console.warn.restore();
    });

    it('should be a function', () => {
        expect(arrayEqual).to.be.instanceOf(Function);
    });

    it('should print out a message if the length of two arrays are different, with different lengths', () => {
        arrayEqual([1], []);
        expect(console.warn.called).to.be.true;
        expect(console.warn.getCall(0).args[0]).to.contain('0');
        expect(console.warn.getCall(0).args[0]).to.contain('1');
    });

    it('should print out a message if two elements are different, with the different elements', () => {
        arrayEqual([1], [2]);
        expect(console.warn.called).to.be.true;
        expect(console.warn.getCall(0).args[0]).to.contain('1');
        expect(console.warn.getCall(0).args[0]).to.contain('2');
    });

    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(arrayEqual.apply(null, data.arguments)).to.equal(data.result);
        });
    });
});