'use strict';

const Layout = require('./Layout');
const Element = require('./Element');

class HomePage extends Layout {
    constructor() {
        super('Home', 'https://epam.com', by.tagName('body'));
    }
}

module.exports = new HomePage();