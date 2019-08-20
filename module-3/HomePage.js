'use strict';

const Layout = require('./Layout');
const Element = require('./Element');

class HomePage extends Layout {
    constructor(){
        super('EPAM Home Page', 'https://www.epam.com/', { css: 'body' });
        this.titleLabel = new Element('Title', { css: 'h2.title-slider__title' });
        this.addChildren(this.titleLabel);
        this.logoImage = new Element('Logo', { css: '.header__logo' });
        this.addChildren(this.logoImage);
        this.topNavigationPanel = new Element('Top Navigation Panel', {css: '.top-navigation-ui'});
        this.addChildren(this.topNavigationPanel);
        this.mainSection = new Element('Main Section', { id: "main" });
        this.addChildren(this.mainSection);
        this.footerSection = new Element('Footer section', { css: ".footer.section" });
        this.addChildren(this.footerSection);

    }

    getTitle() {
        return browser.getTitle(this.titleLabel);
    }
}

module.exports = HomePage;