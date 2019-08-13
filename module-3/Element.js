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
            throw new Error(child.name + ' is already added.');
        }
        this.children[child.name] = child;
    }
    get(name) {
        if (!name) {
            return this.element(this.locator);
        }
        if (this.children.hasOwnProperty(child.name)) {
            return this.children[child.name].get();
        } else {
            throw new Error('No child with such a name')
        }
    }
}

module.exports = Element;