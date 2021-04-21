const romanToDec = require('../romanToDec');
const expect = require('chai').expect;
const testData = require('./romanToDec.json');

describe.only('Module 4 - romanToDec', () => {
    it('should be a function', () => {
        expect(romanToDec).to.be.instanceOf(Function);
    });
    it('should throw an error in case of invalid input type', () => {
        expect(() => romanToDec(5)).to.throw("Invalid input datatype");
    });
    it('should throw an error in case of invalid character', () => {
        expect(() => romanToDec("CXT")).to.throw("Invalid character in input");
    });
    testData.forEach(data => {
        it('should return proper value for ' + JSON.stringify(data.arguments), () => {
            expect(romanToDec.apply(null, data.arguments)).to.equal(data.result);
        });
    }); 
});
