'use strict';

const Elements = require('./Elements');
const Element = require('./Element');
const Layout = require('./Layout');

class HomePage extends Layout {
    constructor(name, url, locator, items) {
        super(name, url, locator);
        super.addChildren({
            name: items.name,
            locator: items.locator
        })
    }

    menuBar() {
        return new Element(items.name, items.locator);
    }
}

module.exports = HomePage;