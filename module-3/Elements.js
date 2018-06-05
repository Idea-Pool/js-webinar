'use strict';

const Element = require('./Element.js');

class Elements extends Element {
    constructor(name, locator){
        super(name, locator);
        this.children = null;
    }
    addChildren(child) {
        if (child instanceof Elements) {
            throw new Error("Extended class could not have children");
        } else {
            super.addChildren(child);
        }
    }
    all() {
        return element.all(this.locator);
    }
    get(name) {
        return name;
    }
}

module.exports = Elements;
