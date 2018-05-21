'use strict';
const Element = require('./Element');
const ElementArrayFinder = require('./test/mock/ElementArrayFinder');

class Elements extends Element {
  constructor(name, locator) {
    super(name, locator);
    this.children = null;
    delete this.addChildren;
  }

  all() {
    return new ElementArrayFinder().all(this.locator)
  }

  get(number) {
    return new ElementArrayFinder().get(number);
  }
}

module.exports = Elements;