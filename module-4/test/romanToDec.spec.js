const romanToDec = require('../romanToDec');
const expect = require('chai').expect;
const testData = require('./romanToDec.json');

describe('Module 4 - romanToDec', () => {
    it('should be a function', () => {
        expect(romanToDec).to.be.instanceOf(Function);
    });

    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(romanToDec(...data.arguments)).to.equal(data.result);
        });
    });

    it('should throw an error when incorrect type of input ' + 'integer', () => {
        return expect(romanToDec.bind(null, 0)).to.throw();
    });
    it('should throw an error when incorrect type of input ' + 'boolean', () => {
        return expect(romanToDec.bind(null, true)).to.throw();
    });
    it('should throw an error when incorrect type of input ' + 'object', () => {
        return expect(romanToDec.bind(null, [])).to.throw();
    });
    it('should throw an error when input contains not Roman symbol ', () => {
        return expect(romanToDec.bind(null, "ABC")).to.throw();
    });
});