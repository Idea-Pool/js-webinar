'use strict';

const ElementFinder = require('./mock/ElementFinder');
const Element = require('../Element');
const expect = require('chai').expect;
const Browser = require('./mock/Browser');
const HomePage = require('../HomePage');

describe('HomePage Class', () => {
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

    it('should have the given name', () => {
        const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});

        expect(page.name).not.to.be.undefined;
        expect(page.name).to.equal('HomePage');
    });

    it('should have the given URL', () => {
        const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});

        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal('https://epam.com');
    });

    it('should have the given locator', () => {
        const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});

        expect(page.locator.css).not.to.be.undefined;
        expect(page.locator.css).to.equal('body');
    });

    it('should have the default element', () => {
        const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});
        const element = page.get('Logo');

        expect(element).not.to.be.undefined;
        expect(element).to.be.instanceOf(ElementFinder);
        expect(element.locator().css).to.equal('.header__logo');
    });

    describe('Parent', () => {
        it('should not have parent by default', () => {
            const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});

            expect(page.parent).not.to.be.undefined;
            expect(page.parent).to.be.null;
        });

        it('should throw error if parent is set', () => {
            const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});
            const element = new Element('Title', {css: '.title'});

            expect(page.setParent).not.to.be.undefined;
            expect(() => page.setParent(element)).to.throw();
        });
    });

    describe('Children', () => {
        it('should have children by default', () => {
            const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});
            const child = new Element('Logo', {css: '.header__logo'});

            expect(page.children.Logo).to.be.eql(child);
        });

        it('should have method to add children', () => {
            const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});
            const child = new Element('Title', {css: '.title'});

            expect(page.addChildren).not.to.be.undefined;

            page.addChildren(child);

            expect(page.children.Title).to.be.eql(child);
        });

        it ('should not add children twice', () => {
            const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});
            const child = new Element('Logo', {css: '.header__logo'});

            expect(() => page.addChildren(child)).to.throw();
        });
    });

    describe('Get', () => {
        it('should have method to retrieve root element', () => {
            const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});

            expect(page.get).not.to.be.undefined;

            const pElement = page.get();

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('body');
        });

        it('should have method to retrieve children element by name', () => {
            const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});

            const pElement = page.get('Logo');

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('.header__logo');
        });

        it('should throw error if child element is not found', () => {
            const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});

            expect(() => page.get('Footer')).to.throw();
        });
    });

    describe('Load', () => {
        it('should have a load function to load the proper URL', () => {
            const page = new HomePage('HomePage', 'https://epam.com', {css: 'body'});

            expect(page.load).not.to.be.undefined;
            expect(page.load()).to.be.equal('https://epam.com');
        });
    });
});