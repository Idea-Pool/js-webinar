'use strict';

const Layout = require('./Layout');
const Element = require('./Element');

class HomePage extends Layout {
    constructor() {
        super('HomePage', 'https://epam.com', {css: 'body'});
        this.logo = new Element('Logo', {css: '.header__logo'});
        super.addChildren(this.logo);
    }
}

module.exports = HomePage;