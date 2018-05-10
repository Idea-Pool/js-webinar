'use strict';

const Element = require('./Element.js');

class Layout extends Element{
    constructor(name, url, locator) {
        super();
        this.name = 'Home';
        this.url = 'http://epam.com';
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }    

    load() {
        return this.url;
    }

}

module.exports = Layout;