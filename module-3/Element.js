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
            throw new error(child.name + "is aleady added!");
        }
        this.children[child.name] = child;
        child.setParent(this);
    }

    get(name) {
        if (!name) {
            return element(this.locator);
        }

        if (this.children.hasOwnProperty(name)) {
            return this.children[name].get();
        }

        let values = Object.values(this.children);
        if (values) {
            return values.find(elem => elem.get(name)).get(name);
        }

        throw new error(`No element with name '${name}'!`);
    }
}

module.exports = Element;