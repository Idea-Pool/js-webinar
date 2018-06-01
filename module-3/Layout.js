
'use strict';

const Element = require('./Element.js');
const Browser = require('./test/mock/Browser');

class Layout extends Element {
    constructor(name, url, locator) {
        super(name, locator);
        this.url = url;
    }

    setParent(parent) {
        if(parent instanceof Layout) {
            throw new Error('Parent shoult not be set');
        } else {
            super.setParent(parent);
        }
    }
    addChildren(child) {
        super.addChildren(child);
    }
    load() {
       return this.url;
    }

}

module.exports = Layout;
