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

    addChildren(children) {
        if (!children) {
            throw new Error("There is no children!");
        }

        if (this.children.hasOwnProperty(children.name)) {
            throw new Error(`The children ${children.name} is already defined!`);
        }

        this.children[children.name] = children;
    }

    get(name) {
        if (!name) {
            return element(this.locator);
        }
        
        if (this.children === null) {
            throw new Error(`The "${name}" child element is not found!`);
        }

        if (this.children.hasOwnProperty(name)) {
            return this.children[name].get();
        }

        throw new Error('There is no matching element!');
    }
}

module.exports = Element;