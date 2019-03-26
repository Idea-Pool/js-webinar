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

    /**
     * 
     * @param {Element} children 
     */
    addChildren(children) {
        if (!children) {
            throw new Error("There is no children!");
        }
        if (this.children.hasOwnProperty(children.name)) {
            throw new Error(`The children ${children.name} is already defined!`)
        }
        this.children[children.name] = children;
    }
}

module.exports = Element;