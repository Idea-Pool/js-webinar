'use strict';
//I'm not sure if i correctly understood Home page task
const Elements = require('./Elements');
const Element = require('./Element');
const Layout = require('./Layout');

class HomePage extends Layout {
  constructor() {
    super('Home Page', 'https://home.epam.com',
      { css: '.body' });
    super.addChildren(
      {
        name: 'careers',
        locator: { xpath: '//a[text()="Careers"]' }
      }
    );
  }
  get menuBar() {
    return new Element('menu', { css: '.menu' });
  }
}

module.exports = new HomePage();