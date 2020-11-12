const ElementFinder = require('../mock/ElementFinder');
const Browser = require('../mock/Browser');
const HomePage = require('../../pop/HomePage');
const Layout = require('../../pop/Layout');
const Element = require('../../pop/Element');
const expect = require('chai').expect;

describe('HomePage Class', () => {
    // TODO: write tests
    const homePage = new HomePage();

    beforeEach(() => {
        global.element = ElementFinder.element;
        global.browser = new Browser();
    });

    afterEach(() => {
        delete global.element;
        delete global.browser;
    });

    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });

    it('should have stored name', () => {
        expect(homePage.name).not.to.be.undefined;
        expect(homePage.name).to.equal('EPAM Home Page');
    });

    it('should have stored URL', () => {
        expect(homePage.url).not.to.be.undefined;
        expect(homePage.url).to.equal('https://www.epam.com/');
    });

    it('should have stored locator', () => {
        expect(homePage.locator).not.to.be.undefined;
        expect(homePage.locator.css).to.equal('body');
    });

    describe('Parent', () => {
        it('should not have parent by default', () => {
            expect(homePage.parent).not.to.be.undefined;
            expect(homePage.parent).to.be.null;
        });

        it('should throw error if parent is set', () => {
            const element = new HomePage();

            expect(homePage.setParent).not.to.be.undefined;
            expect(() => homePage.setParent(element)).to.throw();
        });
    });

    describe('Predefined childrens', () => {
        it('should have Logo set as children', () => {
            expect(homePage.children.Logo.name).to.equal('Logo');
        });

        it('should have Contact Us set as children', () => {
            expect(homePage.children['Contact Us'].name).to.equal("Contact Us");
        });

        it('should have Title set as children', () => {
            expect(homePage.children.Title.name).to.equal("Title");
        });

        it('should have Footer Brands set as children', () => {
            expect(homePage.children['Our Brands'].name).to.equal('Our Brands');
        });
    });

    describe('Add new childrens', () => {
        it('should have method to add children', () => {
            const child = new Element('Main Section', { id: "main"});

            expect(homePage.addChildren).not.to.be.undefined;
            homePage.addChildren(child);

            expect(homePage.children["Main Section"]).to.equal(child);
        });

        it('should not add a children twice', () => {
            const child = new Element('Main Section', { id: "main"});
            expect(() => homePage.addChildren(child)).to.throw();
        });
    });

    describe('Load Page', () => {
        it('should load the page', () => {
            expect(homePage.load).not.to.be.undefined;
            expect(homePage.load()).to.equal('https://www.epam.com/');
        });
    });
});