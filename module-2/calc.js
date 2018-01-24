'use strict';

class Calc {
    constructor(v) {
        this.v = +v;
    }

    add(n) {
        this.v += n;
        return this;
    }

    minus(n) {
        this.v -= n;
        return this;
    }

    times(n) {
        this.v *= n;
        return this;
    }

    sqrt() {
        if (this.v < 0) {
            throw new Error('Square root of negative value cannot be determined!');
        }
        this.v = Math.sqrt(this.v);
        return this;
    }

    divide(n) {
        if (n === 0) {
            throw new Error('Division by 0 is not possible!');
        }
        this.v /= n;
        return this;
    }

    modulo(n) {
        this.v %= n;
        return this;
    }

    toString() {
        return String(this.v);
    }
}

function calc(n) {
    return new Calc(n);
}

module.exports = calc;

/*
console.log(calc(3).v);
console.log(calc(3).add(4).v);
console.log(calc(4).minus(5).v);
console.log(calc(4).times(6).v);
console.log(calc(10).div(5).v);
console.log(calc(10).modulo(5).v);
console.log(calc(4).add(4).times(5).div(1.5).minus(2).v);
console.log(calc(5).div(0));
*/