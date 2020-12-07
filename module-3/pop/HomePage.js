/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */

const Layout = require("./Layout");
const ElementFinder = require("../test/mock/ElementFinder");

class HomePage extends Layout {

    constructor(name, url, locator) {
        super(name, url, locator);

    }

    getHeader() {

        const header = "Header";

        if (this.children.hasOwnProperty(header)) {

            const selectedName = Object.values(this.children[header].locator)[0];

            const selector = Object.keys(this.children[header].locator)[0];

            let selectedElement = new ElementFinder;

            selectedElement._locator = { [selector]: selectedName };

            return selectedElement;


        } else {

            throw new Error("Header is not set");
        }


    }
    
    getFooter() {

        const footer = "Footer";

        if (this.children.hasOwnProperty(footer)) {

            const selectedName = Object.values(this.children[footer].locator)[0];

            const selector = Object.keys(this.children[footer].locator)[0];

            let selectedElement = new ElementFinder;

            selectedElement._locator = { [selector]: selectedName };

            return selectedElement;
        }
            else {

                throw new Error("Footer is not set");
            

        }
    }


    getMain() {

        const main = "Main";

        if (this.children.hasOwnProperty(main)) {

            const selectedName = Object.values(this.children[main].locator)[0];

            const selector = Object.keys(this.children[main].locator)[0];

            let selectedElement = new ElementFinder;

            selectedElement._locator = { [selector]: selectedName };

            return selectedElement;
        }
            else {

                throw new Error("Main is not set");
            

        }
    }

    }


module.exports = HomePage;
