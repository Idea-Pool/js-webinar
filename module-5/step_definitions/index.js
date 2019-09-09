'use strict';

const {defineSupportCode} = require('cucumber');

const CareerPage = require('../pageObjects/careerPage');
const careerPage = new CareerPage();

defineSupportCode(({Given, When, Then, setDefaultTimeout}) => {
    setDefaultTimeout(GLOBAL_TIMEOUT);

    Given(/the career page is opened/, () => {
        return careerPage.load();
    });

    When(/(.+), (.+) is selected in the location filter box/, (city, country) => {
        return careerPage.selectCityInCountry(country, city);
    });

    When(/(.+) is selected in the department filter box/, department => {
        return careerPage.toggleDepartment(department);
    });

    When(/the search button is clicked on/, () => {
        return careerPage.search();
    });

    When(/the apply button of the (.+) position is clicked on/, position => {
        return careerPage.applyForPosition(careerPage.getResultByPosition(position));
    });

    Then(/the logo should be visible/, () => {
        return expect(careerPage.logo.isDisplayed()).to.eventually.be.true;
    });

    Then(/the search form should be visible/, () => {
        return expect(careerPage.searchForm.isDisplayed()).to.eventually.be.true;
    });

    Then(/(.+) should be selected in the location filter box/, city => {
        return expect(careerPage.selectedLocation.getText()).to.eventually.equal(city);
    });

    Then(/(.+) should be selected in the department filter box/, department => {
        return expect(careerPage.selectedDepartments.getText()).to.eventually.contain(department);
    });

    Then(/there should be a job offer for (.+) position/, position => {
        return expect(careerPage.getResultByPosition(position).isDisplayed()).to.eventually.be.true;
    });

    Then(/the (department|location) of the (.+) position should be (.+)/, (attribute, position, value) => {
        position = careerPage.getResultByPosition(position);
        switch (attribute) {
            case 'department':
                return expect(careerPage.departmentOfPosition(position).getText()).to.eventually.equal(value);
            case 'location':
                return expect(careerPage.locationOfPosition(position).getText().then(text => text.replace(/\s/g, ' '))).to.eventually.equal(value);
        }
    });

    Then(/the apply button of the (.+) position should be visible/, position => {
        position = careerPage.getResultByPosition(position);
        return expect(careerPage.applyLinkOfPosition(position).isDisplayed()).to.eventually.be.true;
    });

    Then(/the description of the job offer should contain "([^"]+)"/, value => {
        return expect(careerPage.jobDescription.getText()).to.eventually.contain(value);
    });
});