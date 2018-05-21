'use strict';
const Element = require('./Element');
const Browser = require('./test/mock/Browser');
class Layouts extends Element {
  constructor(name, url, locator) {
    super(name, locator);
    this.url = url;
    // delete this.setParent;
  }

  setParent() {
    throw new Error('The parent is not allowedt');
  }

  load() {
    const browser = new Browser();
    return browser.get(this.url);
  }
}

module.exports = Layouts;