const romanToDec = require('../romanToDec');
const expect = require('chai').expect;
const testData = require('./romanToDec.json');
const sinon = require('sinon');

describe('Module 4 - romanToDec', () => {

    beforeEach(() => {
        sinon.spy(console, "warn");
    });

    afterEach(() => {
        console.warn.restore();
    });

    it('should be a function', () => {
        expect(romanToDec).to.be.instanceOf(Function);
    });

    it('should print out a message if the argument is not string', () => {
        romanToDec(123);
        expect(console.warn.called).to.be.true;
        expect(console.warn.getCall(0).args[0]).to.contain("Not a string");
    });

    it('should print out a message if the argument is not a valid roman number', () => {
        romanToDec("mmq");
        expect(console.warn.called).to.be.true;
        expect(console.warn.getCall(0).args[0]).to.contain("Not a valid roman number");
    });

    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(romanToDec(data.arguments)).to.equal(data.result);
        });
    });
});
