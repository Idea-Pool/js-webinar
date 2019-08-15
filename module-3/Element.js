'use strict';
class Element {
    constructor(name, locator) {
        this.locator = locator;
        this.name = name;
        this.parent = null;
        this.children = {};
    }
    setParent(parent) {
        this.parent = parent;
    }
    addChildren(child) {
        if (this.children.hasOwnProperty(child.name)) {
            throw new Error(' Child has already been added.');
        }
        this.children[child.name] = child;
    }
    get(name) {
        if (!name) {
            return element(this.locator);
        } else if (this.children.hasOwnProperty(name)) {
            return element(this.children[name].locator);
        }
        throw new Error('No child with such name.')
    }
}

module.exports = Element;