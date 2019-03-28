'use strict';

const Element = require("./Element")

class Elements extends Element {
    constructor(name, locator) {
        super(name, locator);
        this.locator = locator;
        this.children = null;
    }

    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        throw new Error('Can not add child to Elements')
    }

    all() {
        return element.all(this.locator);
    }

    get(num) {
        return this.all().get(num);
    }
}

module.exports = Elements;    