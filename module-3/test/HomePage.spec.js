'use strict';

const HomePage = require('../HomePage');
const expect = require('chai').expect;

describe('HomePage Class', () => {
    it('Should be defined', () =>{
        expect(HomePage).to.be.instanceOf(Function);
    });

    it('Should store correct page name', () => {
        const page = new HomePage();
        expect(page.name).not.to.be.undefined;
        expect(page.name).to.equal('EPAM Home Page');
    });

    it('Should store EPAM logo', () => {
        const page = new HomePage();
        expect(page.children.Logo.name).to.equal('Logo');
    });

    it('Should store correct page url', () => {
        const page = new HomePage();
        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal('https://www.epam.com/');
    });

    it('Should store valid title', () => {
        const page = new HomePage();
        expect(page.children.Title.name).to.equal('Title');
    });

});