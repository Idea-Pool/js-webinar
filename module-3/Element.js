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
        if (Object.keys(this.children).length) {
            for (let key in this.children) {
                if (this.children[key] instanceof Element) {
                    return this.children[key].get(name);
                }
            }
        }
        throw new Error('There is no child like: ' + name);
    }
}

module.exports = Element;