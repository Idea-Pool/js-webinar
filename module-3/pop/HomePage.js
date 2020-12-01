/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */
const Layout = require("./Layout");
const Element = require("./Element");

class HomePage extends Layout{
    constructor(){
        super('EPAM Home Page', 'https://www.epam.com/', { css: 'body' });

        this.logoElement = new Element('Logo', { css: '.header__logo' });
        this.addChildren(this.logoElement);

        this.contactUs = new Element("Contact Us", {css: '.cta-button__text'});
        this.addChildren(this.contactUs);
        
        this.titleElement = new Element('Title', { css: 'span.title-slider__slide-row' });
        this.addChildren(this.titleElement);

        this.footerOurBrands = new Element('Our Brands', { css: ".footer__brands-title" });
        this.addChildren(this.footerOurBrands);
    }
}

module.exports = HomePage;