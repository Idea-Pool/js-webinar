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
        if(this.children.hasOwnProperty(child.name)) {
            throw new Error(`The child '${child.name}' has been already added!`);
        }
        this.children[child.name] = child;
        child.setParent(this);
    }

    get(name) {
        if(!name) {
            return element(this.locator);
        }
        if(this.children.hasOwnProperty(name)) {
            return this.children[name].get();
        }
        let values = Object.values(this.children);
        if(values) {
            return values.find(elem => elem.get(name)).get(name);
        }
        throw new Error(`There is no element with name '${name}'!`);
    }
}

module.exports = Element;
