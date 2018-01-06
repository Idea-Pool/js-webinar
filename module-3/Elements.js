'use strict';

const Element = require('./Element');

class Elements extends Element {
    constructor(name, locator) {
        super(name, locator);
        this.children = null;
    }

    addChildren() {
        throw new Error('Element collection must not have any child!');
    }

    all() {
        return element.all(this.locator);
    }

    get(n) {
        return this.all().get(n);
    }
}

module.exports = Elements;