'use strict';

class JobListingsPage {
    constructor() {
        this.logo = element(by.css('a.header__logo-container'));
        this.recruitingPageHeader = element(by.css('.recruiting-page__header h1'));
        this.recruitingPageLocation = element(by.css('.recruiting-page__header .recruiting-page__location'));
    }

    load() {
        return browser.wait(ec.or(
            ec.elementToBeClickable(this.logo)
            , ec.visibilityOf(this.recruitingPageHeader)
            , ec.visibilityOf(this.recruitingPageLocation))
            , GLOBAL_TIMEOUT);
    }

    }

module.exports = JobListingsPage;