'use strict';

const ElementFinder = require('./mock/ElementFinder');
const ElementArrayFinder = require('./mock/ElementArrayFinder');
const Elements = require('../Elements');
const Element = require('../Element');
const expect = require('chai').expect;
const HomePage = require('../HomePage');

describe('HomePage Class', () => {
  it('should be defined', () => {
    expect(Elements).to.be.instanceOf(Function);
  });

  it('should have valid url', () => {
    expect(HomePage.load()).to.equal('https://home.epam.com');
  });

  it('should have body', () => {
    // console.log(JSON.stringify(HomePage.locator.name));
    expect(HomePage.name).to.equal('Home Page');
    expect(HomePage.locator.css).to.equal('.body');
  });

  it('menu bar should be defined', () => {
    const element = new Elements('menu', { css: '.menu' });
    expect(HomePage.menuBar.name).not.to.be.undefined;
    expect(element.name).to.equal(HomePage.menuBar.name);
  });

  it('menu bar should have correct locator', () => {
    const element = new Elements('menu', { css: '.menu' });
    expect(element.locator.css).to.equal(HomePage.menuBar.locator.css);
  });

  it('menu bar should have careers child locator', () => {
    const locator = { xpath: '//a[text()="Careers"]' };
    expect(locator).to.deep.equal(HomePage.get('careers')._locator);
  });

});
