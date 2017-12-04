'use strict';

const ElementArrayFinder = require('./ElementArrayFinder');

class ElementFinder extends ElementArrayFinder {
    constructor(locator) {
        super(locator);
    }

    static element(locator) {
        return new ElementFinder(locator);
    }

    element(locator) {
        return ElementFinder.element(locator);
    }
}

module.exports = ElementFinder;