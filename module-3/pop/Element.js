/**
 * Create Element class, which represents an element of
 * the application, and
 *
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title")
 * 2. It has a name (.name), e.g. "Document Title"
 * 3. It can have a parent Element,
 *    which is the context of the element (.parent)
 * 4. It can have children Elements (.children)
 * 5. It has a method to retrieve the protractor element
 *    by the locator (.get([name])) in it's context
 *     - if it gets a name as parameter, it tries to find
 *       in it's children (recursively) the Element with
 *       the given name or throws an Error if it cannot
 *       find the element
 */
const ElementFinder = require('../test/mock/ElementFinder');

class Element {
    constructor(name, locator) {
        this.locator = locator;
        this.name = name;
        this.parent = null;
        this.children = {};
    }

    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if (this.children.hasOwnProperty(child.name)) {
            throw new Error('Child with \'' + child.name + '\' name already exists!')
        } else {
            this.children[child.name] = child;
        }
    }

    get(name) {
        let result = [];

        function getThat(where) {
            if (name === undefined) {
                result.push(new ElementFinder(where.locator));
            } else if (where.children !== null) {
                if (Object.keys(where.children).length) {
                    if (where.children.hasOwnProperty(name)) {
                        result.push(new ElementFinder(where.children[name].locator));
                    } else {
                        for (let key in where.children) {
                            getThat(where.children[key]);
                        }
                    }
                }
            }
        }

        getThat(this);
        if (result.length === 0) {
            throw new Error(`No child with ${name} name exists!`);
        } else {
            return result[0];
        }
    }
}

module.exports = Element;