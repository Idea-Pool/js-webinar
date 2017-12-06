'use strict';

class Element {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }

    setParent(parent){
        this.parent = parent;
    }

    addChildren(child){
        if (this.children[child.name]) {
            throw new Error('The child has been already added: ' + child.name);
        }
        this.children[child.name] = child;
        child.setParent(this);
    }

    get(name) {
        if (!name) {
            return element(this.locator);
        }
        if (this.children[name]) {
            return this.children[name].get();
        }
        // TODO: handle case of nested children
        // TODO: create test for it
        throw new Error('There is no child like: ' + name);
    }
}

module.exports = Element;