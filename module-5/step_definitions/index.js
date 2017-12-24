'use strict';
module.exports = function () {
    this.Given(/^EPAM (.+) site is opened$/, site => {
        throw new Error(site);
    });

    this.Then(/^EPAM (.+) site should be opened$/, site => {
        
    });

    this.Then(/^The (.+) should be (visible|hidden)$/, (elementName, visibility) => {
        
    });
}