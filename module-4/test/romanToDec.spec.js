const romanToDec = require('../romanToDec');
const expect = require('chai').expect;
const testData = require('./romanToDec.json');

describe('Module 4 - romanToDec', () => {
    it('should be a function', () => {
        expect(romanToDec).to.be.instanceOf(Function);
    });

    it('should throw an error if input is not a string', () => {
        expect(() => romanToDec(123)).to.throw();
    });

    it('should throw an error if input is an empty string', () => {
        expect(() => romanToDec('')).to.throw();
    });

    it('should throw an error if input is not a valid Roman numeral', () => {
        expect(() => romanToDec('MVCI')).to.throw();
        expect(() => romanToDec('ICVXLIVL')).to.throw();
        expect(() => romanToDec('XXL')).to.throw();
    });

    it('should throw an error if invalid characters in input', () => {
        expect(() => romanToDec('CVZ')).to.throw();
    });

    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(romanToDec(data.arguments)).to.equal(data.result);
        });
    });
});