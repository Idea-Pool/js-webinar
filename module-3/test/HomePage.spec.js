'use strict';

const HomePage = require('../HomePage.js');
const expect = require('chai').expect;

describe('HomePage Class', () => {
    const homePage = new HomePage('HomePage', 'http://epam.com', {css: '.body'}, {name: 'careers',locator: { xpath: '//a[text()="Careers"]' }});
    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });
        
    it('should have valid url', () => {
        expect(homePage.load()).to.equal('http://epam.com');
    });
        
    it('should have name and locator', () => {
        expect(homePage.name).to.equal('HomePage');
        expect(homePage.locator.css).to.equal('.body');
    });
        
    it('menu bar should be defined', () => {
        expect(homePage.menuBar).not.to.be.undefined;
    });
});