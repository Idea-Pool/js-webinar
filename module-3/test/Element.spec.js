'use strict';

const ElementFinder = require('./mock/ElementFinder');
const Element = require('../Element');
const expect = require('chai').expect;

describe('Element Class', () => {
    beforeEach(() => {
        global.element = ElementFinder.element;
    });

    afterEach(() => {
        delete global.element;
    });

    it('should be defined', () => {
        expect(Element).to.be.instanceOf(Function);
    });

    it('should have stored locator', () => {
        const element = new Element('Body', {css: 'body'});

        expect(element.locator).not.to.be.undefined;
        expect(element.locator.css).to.equal('body');
    });

    it('should have stored name', () => {
        const element = new Element('Body', {css: 'body'});

        expect(element.name).not.to.be.undefined;
        expect(element.name).to.equal('Body');
    });

    describe('Parent', () => {
        it('should not have parent by default', () => {
            const element = new Element('Body', {css: 'body'});

            expect(element.parent).not.to.be.undefined;
            expect(element.parent).to.be.null;
        });

        it('should have method to set parent', () => {
            const element = new Element('Title', {css: 'h1'});
            const parent = new Element('Body', {css: 'body'});

            expect(element.setParent).not.to.be.undefined;

            element.setParent(parent);

            expect(element.parent).to.eql(parent);
        });
    });

    describe('Children', () => {
        it('should not have children by default', () => {
            const element = new Element('Body', {css: 'body'});

            expect(element.children).not.to.be.undefined;
            expect(element.children).to.eql({});
        });

        it('should have method to add children', () => {
            const element = new Element('Body', {css: 'body'});
            const child = new Element('Title', {css: 'h1'});

            expect(element.addChildren).not.to.be.undefined;

            element.addChildren(child);

            expect(element.children.Title).to.eql(child);
        });

        it('should not add children twice', () => {
            const element = new Element('Body', {css: 'body'});
            const child = new Element('Title', {css: 'h1'});

            element.addChildren(child);
            expect(() => element.addChildren(child)).to.throw();
        });
    });

    describe('Get', () => {
        it('should have method to retrieve root element', () => {
            const element = new Element('Body', {css: 'body'});

            expect(element.get).not.to.be.undefined;

            const pElement = element.get();

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('body');
        });

        it('should have method to retrieve children element by name', () => {
            const element = new Element('Body', {css: 'body'});
            const child = new Element('Title', {css: 'h1'});
            element.addChildren(child);

            const pElement = element.get('Title');

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('h1');
        });

        it('should throw error if child element is not found', () => {
            const element = new Element('Body', {css: 'body'});
            const child = new Element('Title', {css: 'h1'});
            element.addChildren(child);

            expect(() => element.get('Footer')).to.throw();
        });
    });
});