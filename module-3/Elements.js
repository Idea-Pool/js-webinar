'use strict';

const Element = require("./Element");
class Elements extends Element {
    constructor(name, locator) {
        super(name, locator);
        this.children = null;
    }

    addChildren() {
        throw new Error("Elements can not have children!");
    }

    get(n) {
        return element.all(this.locator).get(n);
    }

    all() {
        return element.all(this.locator);
    }
}

module.exports = Elements;
