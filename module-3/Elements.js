'use strict';

const Element = require("./Element");

class Elements extends Element {
    constructor(name, locator) {
        super(name, locator);
        this.children = null;
    }

    addChildren() {
        throw new Error("Elements cannot have children!");
    }

    all() {
        return element.all(this.locator);
    }

    get(name) {
        return this.all().get(name);
    }
}

module.exports = Elements;