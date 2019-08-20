'use strict';

const ElementFinder = require('./mock/ElementFinder');
const Browser = require('./mock/Browser');
const HomePage = require('../HomePage');
const expect = require('chai').expect;

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

    it('should have stored correct name', () => {
        const page = new HomePage();

        expect(page.name).not.to.be.undefined;
        expect(page.name).to.equal('EPAM Home Page');
    });

    it('should have stored correct URL', () => {
        const page = new HomePage();

        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal('https://www.epam.com/');
    });

    it('should have stored correct locator', () => {
        const page = new HomePage();

        expect(page.locator).not.to.be.undefined;
        expect(page.locator['css']).to.equal('body');
    });

    describe('Children', () => {
        it('should have Title as children', () => {
            const page = new HomePage();
            expect(page.children.Title.name).to.equal('Title');
        });

        it('should have Logo set as children', () => {
            const page = new HomePage();
            expect(page.children.Logo.name).to.equal('Logo');
        });

        it('should have Top Navigation Panel set as children', () => {
            const page = new HomePage();
            expect(page.children['Top Navigation Panel'].name).to.equal('Top Navigation Panel');
        });

        it('should have Main Section set as children', () => {
            const page = new HomePage();
            expect(page.children['Main Section'].name).to.equal('Main Section');
        });

        it('should have Footer section set as children', () => {
            const page = new HomePage();
            expect(page.children['Footer section'].name).to.equal('Footer section');
        });

        it('should have correct locator for Title element', () => {
            const page = new HomePage();
            const pElement = page.get('Title');

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('h2.title-slider__title');
        });

        it('should have correct locator for Top Navigation Panel', () => {
            const page = new HomePage();
            const pElement = page.get('Top Navigation Panel');

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('.top-navigation-ui');
        });

        it('should have correct locator for Logo element', () => {
            const page = new HomePage();
            const pElement = page.get('Logo');

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('.header__logo');
        });

        it('should have correct locator for Main Section', () => {
            const page = new HomePage();
            const pElement = page.get('Main Section');

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().id).to.equal('main');
        });

        it('should have correct locator for Footer section', () => {
            const page = new HomePage();
            const pElement = page.get('Footer section');

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('.footer.section');
        });
    });

    describe('Load', () => {
        it('should load the page by correct URL', () => {
            const page = new HomePage();

            expect(page.load).not.to.be.undefined;
            expect(page.load()).to.equal('https://www.epam.com/');
        });
    });

    describe('Get Title', () => {
        it('should return correct title', () => {
            const page = new HomePage();

            expect(page.getTitle).not.to.be.undefined;
            expect(page.getTitle()).to.equal('Title');
        });
    });
});
