'use strict';

class CareerPage {
    constructor() {
        this.logo = element(by.css('a.header__logo-container'));
        this.keywordSearchField = element(by.css('[id^="new_form_job_search"][id$="copy-keyword"]'));
        this.locationFilterBox = element(by.css('.recruiting-search__location'));
        this.departmentSelectBox = element(by.css('.recruiting-search__column .job-search__departments'));
        this.selectedDepartment = element(by.css('.selected-params .selected-label'));
        this.departmentSelect = department => element(by.css('input[type="checkbox"][data-value*="' + department + '"]+span'));
        this.dataindexSkilItem = index => element(by.css('[role="tree"] [data-index="' + index + '"]'));
        this.selectedSkill = element(by.css('.selected-items .filter-tag'));
        this.findButton = element(by.css('button.recruiting-search__submit'));  
        this.getCountryOfLocation = country => element(by.css('[role="list"][aria-label*="' + country + '"]')); 
        this.countriesOpenList = element(by.css('.select2-results__options--nested.open'));
        this.getCityOfLocation = city => element(by.css('[role="option"][id*="' + city + '"]'));   
        this.searchResultSection = element(by.css('.search-result .search-result__list'));
        this.searchResultsLocation = element.all(by.css('.search-result .search-result__item .search-result__location'));
        this.searchResultsApply = element.all(by.css('.search-result__item-apply'));
        this.searchResultsPosition = element.all(by.css('.search-result__item-name'));
    }

    load() {
         browser.get('https://www.epam.com/careers');
        return browser.wait(ec.elementToBeClickable(this.logo),  GLOBAL_TIMEOUT);
    }

    selectCountryAndCity(country,  city) {
        const countryOption = this.getCountryOfLocation(country);
       
        element.all(by.css('.select2-results__options.open[role=listbox][id] [role]')).isDisplayed();
         
        const cityOption = this.getCityOfLocation(city);
        cityOption.isDisplayed().then(displayed => {
            if (!displayed) {
                countryOption.click(); 
            }
        }, e => countryOption.click());
        return cityOption.click();
    }

    selectSkill(skill) {
        const department = this.departmentSelect(skill);
        browser.wait(ec.elementToBeClickable(department), GLOBAL_TIMEOUT, 'Element not clickable')  
        return department.click();
    }
}

module.exports = CareerPage;