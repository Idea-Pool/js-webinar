'use strict';

class Element {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }

    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if (this.children.hasOwnProperty(child.name)) {
            throw new Error('The child "${child.name}" has been already added' + child.name)
        }
        this.children[child.name] = child;
        child.setParent(this);
    }

    get(name) {
        if (!name) {
            return element(this.locator);
        }

        if (this.children == null) {
            throw new Error('The child "${name}" does not exit')
        }

        if (this.children[name]) {
            return this.children[name].get();
        }

        else {
            return Object.values(this.children).find(function (item) { return item.get(name); }).get(name);
        } 
    }
}

module.exports = Element;
