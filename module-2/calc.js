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