const { Given, When, Then } = require("cucumber");
const expect = require('chai').expect;
const CareersPage = require('../pages/careerPage');

const careersPage = new CareersPage();

// TODO
Given (/the EPAM Careers page is opened/, function () {
    return careersPage.loadPage();
});

Then (/^the EPAM Careers page should be visible$/, function () {
    return expect(careersPage.title).to.be.visible;
});


When (/the country "(.+)" is selected/, function (string) {x
    return "skipped";
});

Then (/the Search form should be (visibled|hidden)/, function (visibility) {

});