'use strict';
const elementFinder = require('./test/mock/ElementFinder');
class Element {
  constructor(name, locator) {
    this.locator = locator;
    this.name = name;
    this.parent = null;
    this.children = {}
  }

  setParent(parent) {
    this.parent = parent;
  }

  addChildren(child) {
    if (this.children.hasOwnProperty(child.name)) {
      throw new Error(child.name + 'is already exist');
    }
    this.children[child.name] = child;
  }

  get(name) {
    if (name) return elementFinder.element(this.children[name].locator);
    return elementFinder.element(this.locator);
  }

}
module.exports = Element;