class Calc {
    /**
     * @constructor
     * @param {number} v 
     */
    constructor(v) {
        this.v = +v;
    }

    /**
     * @param {number} n 
     * @returns {Calc}
     */
    add(n) {
        this.v += n;
        return this;
    }

    /**
     * @param {number} n 
     * @returns {Calc}
     */
    minus(n) {
        this.v -= n;
        return this;
    }

    /**
     * @param {number} n 
     * @returns {Calc}
     */
    times(n) {
        this.v *= n;
        return this;
    }

    /**
     * @returns {Calc}
     */
    sqrt() {
        if (this.v < 0) {
            throw new Error('Square root of a negative value cannot be determined!');
        }
        this.v = Math.sqrt(this.v);
        return this;
    }

    /**
     * @param {number} n 
     * @returns {Calc}
     */
    divide(n) {
        if (n === 0) {
            throw new Error('Division by 0 is not possible!');
        }
        this.v /= n;
        return this;
    }

    /**
     * @param {number} n 
     * @returns {Calc}
     */
    modulo(n) {
        this.v %= n;
        return this;
    }

    /**
     * @returns {string}
     */
    toString() {
        return String(this.v);
    }
}

/**
 * @param {number} n 
 * @returns {Calc}
 */
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