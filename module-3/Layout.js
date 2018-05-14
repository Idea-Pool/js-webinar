'use strict';

const Element = require('./Element.js');

class Layout extends Element {
    constructor(name, url, locator) {
        super();
        this.name = 'Home';
        this.url = 'http://epam.com';
        this.locator = locator;
        this.parent = null;
        this.children = {};

    }

    setParent(parent) {
        if (parent) {
            throw new Error('There is no child like: ' + name);
        }
        return this.parent = parent;
    }

    load() {
        return this.url;
    }

    addChildren(child) {

    }

    get(name) {

    }


}

module.exports = Layout;