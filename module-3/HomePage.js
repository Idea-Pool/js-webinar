'use strict';

const Element = require('./Element');
const Layout = require('./Layout');

class HomePage extends Layout {
    constructor() {
        super('EPAM Home Page','https://www.epam.com/',{css: 'body'});
        this.headerLogo = new Element('Logo', {css: '.header__logo'});
        this.addChildren(this.headerLogo);
        this.titleLabel = new Element('Title', { css: 'h2.title-slider__title' });
        this.addChildren(this.titleLabel);
    };
};

module.exports = HomePage;