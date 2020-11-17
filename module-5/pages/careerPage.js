const Browser = require('../../module-3/test/mock/Browser.js');
const { element } = require('../../module-3/test/mock/ElementFinder.js');
const browser = new Browser();

class CareersPage {
    constructor() {
        this.title = element(".title");
        this.keywordSearchBox = element('[id="new_form_job_search_1445745853_copy-keyword"]');
        this.locationSearchBox = element(".recruiting-search__location");
        this.skillsSearchBox = element(".recruiting-search__column");
        this.selectedLocation;
        this.selectedSkill;
        this.findButton;

    }

    loadPage() {
        return browser.get("https://www.epam.com/careers");
    }
}

module.exports = CareersPage;