'use strict';

const Element = require('./Element');

class Layout {
    constructor(name, url, locator) {
        this.name = name;
        this.locator = locator;
        this.url = url;
        this.children = {};
        this.parent = null;
    }
    
    setParent(parent) {
            throw new Error('The parent can not be set!');
    }

    addChildren(child) {
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

    load() {
        return this.url;
    }
}

module.exports = Layout;