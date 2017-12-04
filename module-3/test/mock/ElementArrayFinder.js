'use strict';

class ElementArrayFinder {
    constructor(locator) {
        this._locator = locator;
    }

    locator() {
        return this._locator;
    }

    get(n) {
        return n;
    }

    static all(locator) {
        return new ElementArrayFinder(locator);
    }

    all(locator) {
        return ElementArrayFinder.all(locator);
    }
}

module.exports = ElementArrayFinder;