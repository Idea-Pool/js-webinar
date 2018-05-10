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
        if(this.children.hasOwnProperty(child.name)){
            throw new Error(child.name + 'is already added');
        }
        this.children[child.name] = child;
        child.setParent(this);
    }
}
module.exports = Element;