'use strict';

const ElementFinder = require('./mock/ElementFinder');
const Browser = require('./mock/Browser');
const Layout = require('../Layout');
const expect = require('chai').expect;

describe('Layout Class', () => {
    beforeEach(() => {
        global.element = ElementFinder.element;
        global.browser = new Browser();
    });

    afterEach(() => {
        delete global.element;
        delete global.browser;
    });

    it('should be defined', () => {
        expect(Layout).to.be.instanceOf(Function);
    });

    it('should have stored locator', () => {
        const page = new Layout('Home', 'http://epam.com', {css: 'body'});

        expect(page.locator).not.to.be.undefined;
        expect(page.locator.css).to.equal('body');
    });

    it('should have stored name', () => {
        const page = new Layout('Home', 'http://epam.com', {css: 'body'});

        expect(page.name).not.to.be.undefined;
        expect(page.name).to.equal('Home');
    });

    it('should have stored URL', () => {
        const page = new Layout('Home', 'http://epam.com', {css: 'body'});

        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal('http://epam.com');
    });

    describe('Parent', () => {
        it('should not have parent by default', () => {
            const page = new Layout('Home', 'http://epam.com', {css: 'body'});

            expect(page.parent).not.to.be.undefined;
            expect(page.parent).to.be.null;
        });

        it('should throw error if parent is set', () => {
            const element = new Layout('Title', {css: 'h1'});
            const page = new Layout('Home', 'http://epam.com', {css: 'body'});

            expect(page.setParent).not.to.be.undefined;
            expect(() => page.setParent(element)).to.throw();
        });
    });

    describe('Children', () => {
        it('should not have children by default', () => {
            const page = new Layout('Home', 'http://epam.com', {css: 'body'});

            expect(page.children).not.to.be.undefined;
            expect(page.children).to.eql({});
        });

        it('should have method to add children', () => {
            const page = new Layout('Home', 'http://epam.com', {css: 'body'});
            const child = new Element('Title', {css: 'h1'});

            expect(page.addChildren).not.to.be.undefined;

            page.addChildren(child);

            expect(page.children.Title).to.eql(child);
        });

        it('should not add children twice', () => {
            const page = new Layout('Home', 'http://epam.com', {css: 'body'});
            const child = new Element('Title', {css: 'h1'});

            page.addChildren(child);
            expect(() => page.addChildren(child)).to.throw();
        });
    });

    describe('Get', () => {
        it('should have method to retrieve root element', () => {
            const page = new Layout('Home', 'http://epam.com', {css: 'body'});

            expect(page.get).not.to.be.undefined;

            const pElement = page.get();

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('body');
        });

        it('should have method to retrieve children element by name', () => {
            const page = new Layout('Home', 'http://epam.com', {css: 'body'});
            const child = new Element('Title', {css: 'h1'});
            page.addChildren(child);

            const pElement = page.get('Title');

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('h1');
        });

        it('should throw error if child element is not found', () => {
            const page = new Layout('Home', 'http://epam.com', {css: 'body'});
            const child = new Element('Title', {css: 'h1'});
            page.addChildren(child);

            expect(() => page.get('Footer')).to.throw();
        });
    });

    describe('Load', () => {
        it('should have method to load the page by URL', () => {
            const page = new Layout('Home', 'http://epam.com', {css: 'body'});

            expect(page.load).not.to.be.undefined;
            expect(page.load()).to.equal('http://epam.com');
        });
    });
});