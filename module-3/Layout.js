'use strict';

const Element = require("./Element");

class Layout extends Element {

    constructor(name, url, locator) {
        super(name, locator)
        this.url = url;
        this.parent = null;
        this.children = {};
    }

    setParent(element) {
        throw Error("Undefined");
    }
    
    load() {
        return this.url;
    }
}

module.exports = Layout