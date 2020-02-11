'use strict';

const ElementFinder = require("../test/mock/ElementFinder.js");

class Layout {
    constructor(name, url, locator) {
        this.name = name;
        this.locator = locator;
        this.url = url;

        this.parent = null;
        this.children = {};
        this.element = null;
    }

    addChildren(child) {
        if (this.children.hasOwnProperty(child.name)) {
            throw new Error(child.name = " is already added!");
        }
        this.children[child.name] = child;
    }

    setParent(element) {
        throw new Error();
    }

    load() {
        return this.url;
    }

    get() {
        this.element = new ElementFinder(this.locator);
        return this.element;
    }

    get(name) {
        this.element = new ElementFinder(this.locator);
        if (this.element == null) {
            throw new Error();
        }
        return this.element;
    }
}

module.exports = Layout;