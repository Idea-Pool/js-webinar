'use strict';

const HomePage = require('../HomePage');
const ElementFinder = require('./mock/ElementFinder');
const Browser = require('./mock/Browser');
const expect = require('chai').expect;

describe('HomePage Class', () => {
    // TODO: write tests

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

    it('should have the right url', () => {
        const page = new HomePage();
        expect(page.load()).to.equal('https://epam.com');
    });

    it('should have method to load the page by URL', () => {
        const page = new HomePage();

        expect(page.load).not.to.be.undefined;
        expect(page.load()).to.equal('https://epam.com');
    });

    it('should have name and locator', () => {
        const page = new HomePage();
        expect(page.name).to.equal('Home');
        expect(page.locator.css).to.equal('.body');
    });

    it('title should be defined', () => {
        const page = new HomePage();
        expect(page.title).not.to.be.undefined;
    });

    it('title should have appropiate locator', () => {
        const page = new HomePage();
        const pElement = page.get('Title');

        expect(pElement).to.be.instanceOf(ElementFinder);
        expect(pElement.locator().css).to.equal('.title');
    });

    it('title should have the right text', () => {
        const page = new HomePage();
        expect(page.getTitle()).to.equal('title text')
    });

    it('menu bar should be defined', () => {
        const page = new HomePage();
        expect(page.menuBar).not.to.be.undefined;
    });

    it('menu bar should have appropiate locator', () => {
        const page = new HomePage();
        const pElement = page.get('MenuBar');

        expect(pElement).to.be.instanceOf(ElementFinder);
        expect(pElement.locator().css).to.equal('.menuBar');
    });
});