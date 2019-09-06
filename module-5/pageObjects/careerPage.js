'use strict';

class CareerPage {
    constructor() {
        this.logo = element(by.css('a.logo'));
        this.searchForm = element(by.css('.job-search-form-ui'));
        this.searchButton = this.searchForm.element(by.css('.career-apply-box-desktop button[type="Submit"].job-search-button'));

        this.locationFilterBox = this.searchForm.element(by.css('.career-location-box'));
        this.selectedLocation = this.locationFilterBox.element(by.id('select-box-location-select-container'));
        this.getCountryOfLocation = country => this.locationFilterBox.element(by.cssContainingText('.option > strong', country));
        this.getCityOfLocation = city => this.locationFilterBox.element(by.cssContainingText('.option .option', city));

        this.departmentSelect = this.searchForm.element(by.css('.multi-select-department'));
        this.getDepartmentCheckbox = department => this.departmentSelect.element(by.cssContainingText('ul li span.blue-checkbox-label', department));
        this.selectedDepartments = this.departmentSelect.all(by.css('.selected-items .filter-tag'));

        const SEARCH_RESULT_ITEM_SELECTOR = '.search-result-list .search-result-item';
        this.searchResultItems = element.all(by.css(SEARCH_RESULT_ITEM_SELECTOR));
        this.nameOfPosition = position => position.element(by.css('.position-name'));
        this.departmentOfPosition = position => position.element(by.css('.department'));
        this.locationOfPosition = position => position.element(by.css('.location'));
        this.applyLinkOfPosition = position => position.element(by.css('.button-apply a'));

        this.getResultByPosition = name => this.searchResultItems.filter(item => {
            return this.nameOfPosition(item).getText().then(position => position.trim() === name);
        }).first();

        this.jobDescription = element(by.css('.recruiting-details-description-header'));
    }

    load() {
        browser.get('https://epam.com/careers');
        return browser.wait(ec.elementToBeClickable(this.logo), GLOBAL_TIMEOUT);
    }

    selectCityInCountry(country, city) {
        const countryOption = this.getCountryOfLocation(country);
        countryOption.isDisplayed().then(displayed => {
            if (!displayed) {
                this.locationFilterBox.click();
            }
        }, e => this.locationFilterBox.click());
        const cityOption = this.getCityOfLocation(city);
        cityOption.isDisplayed().then(displayed => {
            if (!displayed) {
                countryOption.click();
            }
        }, e => countryOption.click());
        return cityOption.click();
    }

    toggleDepartment(department) {
        const departmentCheckbox = this.getDepartmentCheckbox(department);
        departmentCheckbox.isDisplayed().then(displayed => {
            if (!displayed) {
                this.departmentSelect.click();
            }
        }, e => this.departmentSelect.click());
        browser.wait(ec.visibilityOf(departmentCheckbox), GLOBAL_TIMEOUT);
        return departmentCheckbox.click();
    }

    getSelectedCity() {
        return this.selectedLocation.getText();
    }

    search() {
        this.searchButton.click();
        return browser.wait(() => {
            return this.searchResultItems.count().then(n => n > 0);
        }, GLOBAL_TIMEOUT);
    }

    applyForPosition(position) {
        this.applyLinkOfPosition(position).click();
        return browser.wait(ec.visibilityOf(this.jobDescription), GLOBAL_TIMEOUT);
    }
}

module.exports = CareerPage;