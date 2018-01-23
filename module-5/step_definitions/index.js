'use strict';
const expect = require('chai').expect;
module.exports = function () {
    this.Given(/^EPAM (.+) site is opened$/, site => {
        return expect(['Career', 'Home']).to.contain(site);
    });

    this.Then(/^EPAM (.+) site should be opened$/, site => {
        
    });

    this.Then(/^The (.+) should be (visible|hidden)$/, (elementName, visibility) => {
        
    });
}