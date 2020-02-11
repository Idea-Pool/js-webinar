'use strict';

const Element = require("./Element.js");
const ElementArrayFinder = require("../test/mock/ElementArrayFinder.js");

class Elements extends Element {
    constructor(name, locator) {
        super(name, locator);

        this.children = null;
        this.elements = null;
    }

    addChildren() {
        if (this.children.hasOwnProperty(child.name)) {
            throw new Error(child.name = " is already added!");
        }
        this.children[child.name] = child;
    }

    all() {
        this.elements = new ElementArrayFinder(this.locator);
        return this.elements.all(this.locator);
    }

    get(name) {
        this.element = new ElementArrayFinder(this.locator);
        return this.element.get(name);
    }

}

module.exports = Elements;