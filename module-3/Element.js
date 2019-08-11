'use strict';

const ElementFinder = require("./test/mock/ElementFinder");

class Element {
    constructor(name, locator) {
        this.locator = locator;
        this.name = name;
        this.parent = null;
        this.children = {}
    }

    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if(this.children.hasOwnProperty(child.name)) {
            throw new Error(child.name + " is already added!")
        }
        this.children[child.name] = child;
    }

    get(name) {
        if(name === undefined) {
            return new ElementFinder(this.locator);
        }
        if (this.children[name] === null) {
            throw new Error("Undefined!");
        }
        return new ElementFinder(this.children[name].locator);
    }
}

module.exports = Element;