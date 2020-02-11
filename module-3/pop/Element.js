'use strict';

const ElementFinder = require("../test/mock/ElementFinder.js");

class Element {
    constructor(name, locator) {
        this.locator = locator;
        this.name = name;

        this.parent = null;
        this.children = {};
        this.element = null;
    }

    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if (this.children.hasOwnProperty(child.name)) {
            throw new Error(child.name = " is already added!");
        }
        this.children[child.name] = child;
    }

    get() {
        this.element = new ElementFinder(this.locator);
        return this.element;
    }

    get(name) {
        this.element = new ElementFinder(this.locator);
        return this.element;
    }
}

module.exports = Element;