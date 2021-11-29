/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */
const Layout = require('./Layout');
const Element = require('./Element');
const Elements = require('./Elements');

class HomePage extends Layout {
    constructor() {
        super('Home', 'http://epam.com', {css: 'body'});

        this.header = new Element('Header', {css: 'header'});
        this.header.addChildren(new Element("Logo", {css: '.header__logo'}));
        this.menuItems = new Elements("Menu Items", {css: '.top-navigation__item-link'});
        this.header.addChildren(this.menuItems);
        this.headerControls = new Element("Header Controls", {css: '.header__controls'});
        this.header.addChildren(this.headerControls);

        this.main = new Element('Main', {css: '#main'});
        this.main.addChildren(new Element("Background Video Section", {css: '.background-video'}));
        this.main.addChildren(new Elements("Sliders", {css: '.owl-stage'}));
        this.main.addChildren(new Elements("Rollover Tiles", {css: '.rollover-tiles__link'}));
        this.featured = new Element("Featured Content", {css: '.featured-content-grid'});
        this.featured.addChildren(new Elements("Featured Texts", {css: '.featured-content-card__content'}));
        this.featured.addChildren(new Elements("Featured Images", {css: '.featured-content-card__image'}));
        this.main.addChildren(this.featured);
        this.main.addChildren(new Element("Our Results Section", {css: '.colctrl--tablet'}));
        this.main.addChildren(new Element("Join Our Team Image", {css: '.section--padding-extra-large'}));
        this.main.addChildren(new Element("Join Our Team Text", {css: '.section--padding-large'}));
        this.main.addChildren(new Element("Contact Section", {css: '#main > div.content-container.parsys > div:nth-child(8) > section > div.section__wrapper.section--padding-normal'}));
        this.main.addChildren(new Element("Our Offices Title", {css: '#main > div.content-container.parsys > div:nth-child(10) > section > div.section__wrapper.section--padding-normal > div.title > h2'}));

        this.footer = new Element('Footer', {css: '.footer'});
        this.footer.addChildren(new Element('Footer Brand List', {css: '.footer__brands-list-wrapper'}));
        this.footerContainer = new Element('Footer Container', {css: '.footer__container'});
        this.footerContainer.addChildren(new Elements('Footer Links', {css: '.footer__links-container'}));
        this.footerContainer.addChildren(new Elements('Footer Socials', {css: '.footer__social-item'}));
        this.footerContainer.addChildren(new Element('Footer Copyright', {css: '.footer__copyright'}));
        this.footer.addChildren(this.footerContainer);
    }

    getLogo() {
        return this.header.get('Logo');
    }

    getMenuItems() {
        return this.header.get('Menu Items');
    }

    getHeaderControls() {
        return this.header.get('Header Controls');
    }

    getMainChildrenCount() {
        return Object.keys(this.main.children).length;
    }

    getFeaturedTexts() {
        return this.main.get('Featured Texts');
    }

    getFeaturedImages() {
        return this.main.get('Featured Images');
    }

    getFooterContainerBlocksCount() {
        return Object.keys(this.footerContainer.children).length;
    }

    getFooterLinks() {
        return this.footer.get('Footer Links');
    }

    getFooterSocials() {
        return this.footer.get('Footer Socials');
    }

    getFooterCopyright() {
        return this.footer.get('Footer Copyright');
    }

}

module.exports = HomePage;