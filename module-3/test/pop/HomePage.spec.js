const HomePage = require('../../pop/HomePage');
const ElementFinder = require("../mock/ElementFinder");
const ElementArrayFinder = require("../mock/ElementArrayFinder");
const Element = require("../../pop/Element");
const expect = require('chai').expect;


describe('HomePage Tests', () => {
    beforeEach(() => {
        global.homePage = new HomePage();
        homePage.load();
    });

    afterEach(() => {
        delete global.homePage;
    });

    it('Page loads', () => {
        expect(homePage.load()).to.eql('http://epam.com');
    });

    it('Logo in the header', () => {
        expect(homePage.getLogo()).to.be.instanceOf(ElementFinder);
    });

    it('Menu in header', () => {
        expect(homePage.getMenuItems()).to.be.instanceOf(ElementFinder);
    });

    it('Controls in header', () => {
        expect(homePage.getHeaderControls()).to.be.instanceOf(ElementFinder);
    });

    it('Main contains 9 sections', () => {
        expect(homePage.getMainChildrenCount()).to.eql(9);
    });

    it('Text blocks in Featured section', () => {
        expect(homePage.getFeaturedTexts()).to.be.instanceOf(ElementFinder);
    });

    it('Image blocks in Featured section', () => {
        expect(homePage.getFeaturedImages()).to.be.instanceOf(ElementFinder);
    });

    it('Footer Container includes 3 blocks', () => {
        expect(homePage.getFooterContainerBlocksCount()).to.eql(3);
    });

    it('Links block in Footer', () => {
        expect(homePage.getFooterLinks()).to.be.instanceOf(ElementFinder);
    });

    it('Socials block in Footer', () => {
        expect(homePage.getFooterSocials()).to.be.instanceOf(ElementFinder);
    });

    it('Copyright in Footer', () => {
        expect(homePage.getFooterCopyright()).to.be.instanceOf(ElementFinder);
    });

});