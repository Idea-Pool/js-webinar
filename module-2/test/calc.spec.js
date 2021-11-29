const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    describe("Calculator foundations", () => {
        it ("Calculator function exists", () => {
            expect(calc()).to.not.be.undefined;
        });
        it ("First argument output method exists", () => {
            expect(calc().v).to.not.be.undefined;
        });
        it ("Outputs first argument", () => {
            expect(calc(3).v).to.equal(3);
        });
        it ("Handles absence of first argument", () => {
            expect(calc().v).to.be.NaN;
        });
        it ("Handles invalid first argument", () => {
            expect(calc('LOL').v).to.be.NaN;
            expect(calc(true).v).to.be.NaN;
        });
    });
    describe("Addition", () => {
        it("Addition method exists", () => {
            expect(calc().add()).to.not.be.undefined;
        });
        it ("Add two positive integers", () => {
            let ints = [Math.round(Math.random() * 102 + 2), Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).add(ints[1]).v).to.equal(ints[0] + ints[1]);
        });
        it ("Add two negative integers", () => {
            let ints = [-Math.round(Math.random() * 102 + 2), -Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).add(ints[1]).v).to.equal(ints[0] + ints[1]);
        });
        it ("Add a positive and a negative integers", () => {
            let ints = [Math.round(Math.random() * 102 + 2), -Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).add(ints[1]).v).to.equal(ints[0] + ints[1]);
        });
        it ("Add two decimal numbers", () => {
            let decs = [Math.round((Math.random() * 102 + 2) *100) / 100, Math.round((Math.random() * 102 + 2) *100) / 100];
            expect(calc(decs[0]).add(decs[1]).v).to.equal(decs[0] + decs[1]);
        });
        it ("Addition handles absence of second argument", () => {
            let int = [Math.round(Math.random() * 102 + 2)];
            expect(calc(int).add().v).to.be.NaN;
        });
        it ("Addition handles invalid second argument", () => {
            let int = [Math.round(Math.random() * 102 + 2)];
            expect(calc(int).add('Ororo').v).to.be.NaN;
        });
    });
    describe("Subtraction", () => {
        it("Subtraction method exists", () => {
            expect(calc().minus()).to.not.be.undefined;
        });
        it ("Subtract using two positive integers", () => {
            let ints = [Math.round(Math.random() * 102 + 2), Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).minus(ints[1]).v).to.equal(ints[0] - ints[1]);
        });
        it ("Subtract using two negative integers", () => {
            let ints = [-Math.round(Math.random() * 102 + 2), -Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).minus(ints[1]).v).to.equal(ints[0] - ints[1]);
        });
        it ("Subtract using a positive and a negative integers", () => {
            let ints = [Math.round(Math.random() * 102 + 2), -Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).minus(ints[1]).v).to.equal(ints[0] - ints[1]);
        });
        it ("Subtract using two decimal numbers", () => {
            let decs = [Math.round((Math.random() * 102 + 2) *100) / 100, Math.round((Math.random() * 102 + 2) *100) / 100];
            expect(calc(decs[0]).minus(decs[1]).v).to.equal(decs[0] - decs[1]);
        });
        it ("Subtraction handles absence of second argument", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).minus().v).to.be.NaN;
        });
        it ("Subtraction handles invalid second argument", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).minus('Nope').v).to.be.NaN;
            expect(calc(int).minus(true).v).to.be.NaN;
        });
    });
    describe("Multiplication", () => {
        it("Division method exists", () => {
            expect(calc().times()).to.not.be.undefined;
        });
        it ("Multiply two positive integers", () => {
            let ints = [Math.round(Math.random() * 102 + 2), Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).times(ints[1]).v).to.equal(ints[0] * ints[1]);
        });
        it ("Multiply two negative integers", () => {
            let ints = [-Math.round(Math.random() * 102 + 2), -Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).times(ints[1]).v).to.equal(ints[0] * ints[1]);
        });
        it ("Multiply a positive and a negative integers", () => {
            let ints = [Math.round(Math.random() * 102 + 2), -Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).times(ints[1]).v).to.equal(ints[0] * ints[1]);
        });
        it ("Multiply two decimal numbers", () => {
            let decs = [Math.round((Math.random() * 102 + 2) *100) / 100, Math.round((Math.random() * 102 + 2) *100) / 100];
            expect(calc(decs[0]).times(decs[1]).v).to.equal(decs[0] * decs[1]);
        });
        it ("Multiply by one", () => {
            let ints = [Math.round(Math.random() * 102 + 2), 1];
            expect(calc(ints[0]).times(ints[1]).v).to.equal(ints[0]);
        });
        it ("Multiply by zero", () => {
            let ints = [Math.round(Math.random() * 102 + 2), 0];
            expect(calc(ints[0]).times(ints[1]).v).to.equal(0);
        });
        it ("Multiplication handles absence of second argument", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).times().v).to.be.NaN;
        });
        it ("Multiplication handles invalid second argument", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).times('fg').v).to.be.NaN;
            expect(calc(int).times(true).v).to.be.NaN;
        });
    });
    describe("Division", () => {
        it("Division method exists", () => {
            expect(calc().divide()).to.not.be.undefined;
        });
        it ("Division using two positive integers", () => {
            let ints = [Math.round(Math.random() * 102 + 2), Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).divide(ints[1]).v).to.equal(ints[0] / ints[1]);
        });
        it ("Division using two negative integers", () => {
            let ints = [-Math.round(Math.random() * 102 + 2), -Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).divide(ints[1]).v).to.equal(ints[0] / ints[1]);
        });
        it ("Division using a positive and a negative integers", () => {
            let ints = [Math.round(Math.random() * 102 + 2), -Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).divide(ints[1]).v).to.equal(ints[0] / ints[1]);
        });
        it ("Division using two decimal numbers", () => {
            let decs = [Math.round((Math.random() * 102 + 2) *100) / 100, Math.round((Math.random() * 102 + 2) *100) / 100];
            expect(calc(decs[0]).divide(decs[1]).v).to.equal(decs[0] / decs[1]);
        });
        it ("Division by itself", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).divide(int).v).to.equal(1);
        });
        it ("Division handles absence of second argument", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).divide().v).to.be.NaN;
        });
        it ("Division handles invalid second argument", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).divide('asdf').v).to.be.NaN;
            expect(calc(int).divide(true).v).to.be.NaN;
        });
        it ("Handles division by zero", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(() => calc(int).divide(0)).to.throw('Division by 0 is not possible!');
        });
    });
    describe("Square root", () => {
        it("Root method exists", () => {
            expect(calc().sqrt()).to.not.be.undefined;
        });
        it ("Root of an integer", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).sqrt().v).to.equal(Math.sqrt(int));
        });
        it ("Root of a decimal number", () => {
            let dec = Math.round((Math.random() * 102 + 2) *100) / 100;
            expect(calc(dec).sqrt().v).to.equal(Math.sqrt(dec));
        });
        it ("Root of one", () => {
            let dec = 1;
            expect(calc(dec).sqrt().v).to.equal(1);
        });
        it ("Root of zero", () => {
            let dec = 0;
            expect(calc(dec).sqrt().v).to.equal(0);
        });
        it ("Root handles negative number as argument", () => {
            let int = -Math.round(Math.random() * 102 + 2);
            expect(() => calc(int).sqrt()).to.throw('Square root of negative value cannot be determined!');
        });
    });
    describe("Remainder", () => {
        it("Remainder method exists", () => {
            expect(calc().modulo()).to.not.be.undefined;
        });
        it ("Remainder for two positive integers", () => {
            let ints = [Math.round(Math.random() * 102 + 2), Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).modulo(ints[1]).v).to.equal(ints[0] % ints[1]);
        });
        it ("Remainder for two negative integers", () => {
            let ints = [-Math.round(Math.random() * 102 + 2), -Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0]).modulo(ints[1]).v).to.equal(ints[0] % ints[1]);
        });
        it ("Remainder for two equal numbers", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).modulo(int).v).to.equal(0);
        });
        it ("No remainder (complete division)", () => {
            let ints = [Math.round(Math.random() * 102 + 2), Math.round(Math.random() * 102 + 2)];
            expect(calc(ints[0] * ints[1]).modulo(ints[0]).v).to.equal(0);
        });
        it ("Remainder handles division by zero", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).modulo(0).v).to.be.NaN;
        });
        it ("Remainder handles absence of second argument", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).modulo().v).to.be.NaN;
        });
        it ("Remainder handles invalid second argument", () => {
            let int = Math.round(Math.random() * 102 + 2);
            expect(calc(int).modulo('qwe12').v).to.be.NaN;
            expect(calc(int).modulo(true).v).to.be.NaN;
        });
    });
});