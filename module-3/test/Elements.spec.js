'use strict';

const ElementFinder = require('./mock/ElementFinder');
const ElementArrayFinder = require('./mock/ElementArrayFinder');
const Elements = require('../Elements');
const expect = require('chai').expect;

describe('Elements Class', () => {
    beforeEach(() => {
        global.element = ElementFinder.element;
        global.element.all = ElementArrayFinder.all;
    });

    afterEach(() => {
        delete global.element;
    });

    it('should be defined', () => {
        expect(Elements).to.be.instanceOf(Function);
    });

    it('should have stored locator', () => {
        const element = new Elements('Body', {css: 'body'});

        expect(element.locator).not.to.be.undefined;
        expect(element.locator.css).to.equal('body');
    });

    it('should have stored name', () => {
        const element = new Elements('Body', {css: 'body'});

        expect(element.name).not.to.be.undefined;
        expect(element.name).to.equal('Body');
    });

    describe('Parent', () => {
        it('should not have parent by default', () => {
            const element = new Elements('Body', {css: 'body'});

            expect(element.parent).not.to.be.undefined;
            expect(element.parent).to.be.null;
        });

        it('should have method to set parent', () => {
            const element = new Elements('Title', {css: 'h1'});
            const parent = new Elements('Body', {css: 'body'});

            expect(element.setParent).not.to.be.undefined;

            element.setParent(parent);

            expect(element.parent).to.eql(parent);
        });
    });

    describe('Children', () => {
        it('should not have children by default', () => {
            const element = new Elements('Body', {css: 'body'});

            expect(element.children).to.be.null;
        });

        it('could not have children', () => {
            const element = new Elements('Body', {css: 'body'});
            const child = new Elements('Title', {css: 'h1'});

            expect(() => element.addChildren(child)).to.throw();
        });
    });

    describe('All', () => {
        it('should have method to retrieve root elements', () => {
            const element = new Elements('Body', {css: 'body'});

            expect(element.all).not.to.be.undefined;

            const pElements = element.all();

            expect(pElements).to.be.instanceOf(ElementArrayFinder);
            expect(pElements.locator().css).to.equal('body');
        });
    });

    describe('Get', () => {
        it('should have method to retrieve given elements', () => {
            const element = new Elements('Body', {css: 'body'});

            expect(element.get).not.to.be.undefined;

            const pElement = element.get(42);

            expect(pElement).to.equal(42);
        });
    });
});