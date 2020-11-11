/**
 * Create Layout class, which represents a page of
 * the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("body")
 * 2. It has a URL (.url), e.g. "/home" or "https://epam.com"
 * 3. It has a name (.name), e.g. "Document Page"
 * 4. It cannot have a parent element
 * 5. It can have children Elements (.children)
 * 6. It has a method to retrieve the root protractor element
 *    by the locator (.get([name])) or a child element
 *    by name in any depth
 * 7. It has a method to load the page, i.e. Navigates to
 *    the URL of it (.load())
 */

const ElementFinder = require("../test/mock/ElementFinder");

const Browser = require("../test/mock/Browser");
const Elements = require("./Elements");
const browser = new Browser;

class Layout extends Elements {
    constructor(name, url, locator) {
        super(name, locator);
        this.url = url;
        this.parent = null;
        this.children = {};
    }

    addChildren(addChildren) {
        if(this.children.hasOwnProperty(addChildren.name)){
            throw new Error(addChildren.name + " is already a child element, duplicates are not allowed!");
        }
        this.children[addChildren.name] = addChildren;
    }

    get(name) {
        if(!name) {
            return ElementFinder.element(this.locator);
        }
        if(this.children.hasOwnProperty(name)) {
            return this.children[name].get();
        } else {
            throw new Error(`${name} Element is not found!`);
        }
    }

    setParent() {
        throw new Error("It cannot have a parent element!");
    }
    
    load() {
        return browser.get(this.url);
    }
}

module.exports = Layout;