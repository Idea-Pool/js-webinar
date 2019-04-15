'use strict';

const CareerPage = require('../pages/careerPage');
const JobListingsPage = require('../pages/jobListingsPage');
const careerPage = new CareerPage();
const jobListingsPage = new JobListingsPage();

var positionName = new Object;

const { Given, Then, When } = require('cucumber');
const { setDefaultTimeout } = require('cucumber');

setDefaultTimeout(GLOBAL_TIMEOUT);

Given(/^the EPAM Career site is opened$/, function () {
    return careerPage.load();
});

When(/^the "(Location|Skills)" filter box is clicked$/, function (nameOfItem) {
    careerPage.departmentSelectBox.getLocation()
        .then(function (location) {
            browser.executeScript('window.scrollTo(0, ' + Number(location.y - 100) + ');');
        });
    switch (nameOfItem) {
        case 'Location':
            return careerPage.locationFilterBox.click();
        case 'Skills':
            return careerPage.departmentSelectBox.click();
        default:
            return Promise.reject(new Error('Uknown element: ' + nameOfItem));
    }
});

When(/^(.*) in (.*) is selected in the Location filter box$/, function (city, country) {
    return careerPage.selectCountryAndCity(country, city);
});

When(/^(.*) is selected in the Skills filter box$/, function (skill) {
    return careerPage.selectSkill(skill);
});

When(/^the Find button is clicked$/, function () {
    return careerPage.findButton.click();
});

Then(/^the EPAM Career site should be visible$/, function () {
    return expect(careerPage.logo.isDisplayed()).to.eventually.be.true;
});

When(/^the first search result's Apply button is clicked$/, function () {
    careerPage.searchResultsPosition.get(0).getText().then(function (text) { return positionName = text; });
    careerPage.searchResultsApply.get(0).click();
    return jobListingsPage.load();;
});

Then(/^the "(.*)" should be visible$/, function (item) {
    switch (item) {
        case 'Keyword search field':
            return expect(careerPage.keywordSearchField.isDisplayed()).to.eventually.be.true;
            break;
        case 'Location filter box':
            return expect(careerPage.locationFilterBox.isDisplayed()).to.eventually.be.true;
            break;
        case 'Department search field':
            return expect(careerPage.departmentSelectBox.isDisplayed()).to.eventually.be.true;
            break;
        case 'Find button':
            return expect(careerPage.findButton.isDisplayed()).to.eventually.be.true;
            break;
        default:
            return Promise.reject(new Error('Uknown element: ' + item));
    }

});

Then(/^the Skills filter box should contain "(.*)"$/, function (skill) {    
    return expect(careerPage.selectedDepartment.getText()).to.eventually.equal(skill);
});

Then(/^the Location filter box should contain (.*)$/, function (location) {
    return expect(careerPage.locationFilterBox.getText()).to.eventually.equal(location);
});

Then(/^the selected (.*) should appear under the search form$/, function (skill) {
    const result = expect(careerPage.selectedSkill.getText().then(text => text.toLowerCase())).to.eventually.equal(skill.toLowerCase()); // IgnoreCase
    return result;
});

Then(/^the search results should be displayed$/, function () {
    return browser.wait(ec.visibilityOf(careerPage.searchResultSection), GLOBAL_TIMEOUT, 'searchResultSection is not visible');
});

Then(/^the results should contain (.*), (.*)$/, function (city, country) {
    const result = careerPage.searchResultsLocation.each(
        element => expect(element.getText().then(text => text.toLowerCase()))
            .to.eventually.equal(city.toLowerCase() + ', ' + country.toLowerCase()));
    return result;
});

Then(/^the Apply buttons should be displayed$/, function () {
    const result = careerPage.searchResultsApply.each(
        element => expect(element.isDisplayed()).to.eventually.be.true);
    return result;
});

Then(/^the Job listings page should contain (.*), (.*)$/, function (city, country) {
    return expect(jobListingsPage.recruitingPageLocation.getText()).to.eventually.equal(city + ', ' + country);
});

Then(/^the Job listings page should contain the selected PositionName$/, function () {              
    return expect(jobListingsPage.recruitingPageHeader.getText()).to.eventually.equal(positionName);
});


