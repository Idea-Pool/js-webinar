/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */

 const { element } = require('../test/mock/ElementFinder');
const Layout = require('./Layout');

 class HomePage extends Layout{
        constructor(name, url, locator){
            super('Home Page', 'https://epam.com', element.by.tagName('body'));
            const header = new Element('Header', element.by.css('.__header'));
            this.addChildren(header);
            const logo = new Element('Logo', element.by.tagName('logo'));
            header.addChildren(logo);
        }
 }

 module.exports = HomePage;