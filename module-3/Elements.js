'use strict';

const Element = require("./Element");
const ElementArrayFinder = require("./test/mock/ElementArrayFinder");

class Elements extends Element {
    constructor(name, locator) {
        super(name, locator);
        this.children = null;
    }    
    addChildren() {
        throw Error("Error!");
    }
    all() {
        return new ElementArrayFinder(this.locator)
    }
    get(element) {
        return element;
    }
}

module.exports = Elements;