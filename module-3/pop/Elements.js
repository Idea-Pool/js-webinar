/**
 * Create Elements class, which represents a collection of
 * elements of the application, and
 *
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title")
 * 2. It has a name (.name), e.g. "Document Title"
 * 3. It can have a parent Element,
 *    which is the context of the element (.parent)
 * 4. It cannot have children elements
 * 5. It has a method to retrieve all protractor elements
 *    in the collection by the locator (.all()) in it's context
 * 6. It has a method to retrieve one element from the collection
 *    by the locator (.get(n)) in it's context
 */
const ElementArrayFinder = require('../test/mock/ElementArrayFinder');

const Element = require('./Element');
module.exports = class Elements extends Element {
    constructor(name, locator) {
        super(name, locator);
        this.children = null;
        this.parent = null;
    }

    addChildren() {
        throw new Error("Elements collection cannot have kids, bro!");
    }

    all() {
        let element = ElementArrayFinder.all(this.locator);
        return element;
    }
    get(name) {
        let element = new ElementArrayFinder(this.locator);
        return element.get(name);
    }
}