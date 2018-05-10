'use strict';

const Element = require('./Element.js');

class Elements extends Element {

    constructor(name, locator) {
        super();
        this.name = name;
        this.locator = locator;      
        this.children = null;
    }

    all(locator) {
        return element.all(this.locator);
    }

    get(n) {
        return element(n)['_locator'];
    }


}

module.exports = Elements;