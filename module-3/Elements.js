'use strict';

const ElementArrayFinder = require('./test/mock/ElementArrayFinder');

class Elements {
    constructor(name, locator) {
        this.locator = locator;
        this.name = name;
        this.parent = null;
        this.children = null;
    }

    setParent(parent){
        this.parent = parent;
    }

    all() {
        return ElementArrayFinder.all(this.locator);
    }

    get(n) {
        return n;
    }
}

module.exports = Elements;