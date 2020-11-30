const ElementFinder = require('../mock/ElementFinder');
const HomePage = require('../../pop/HomePage');
const Element =  require('../../pop/Element');
const expect = require('chai').expect;



describe('HomePage Class', () => {
   
    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });

    it('should have stored locator', () => {
        const page = new HomePage('Home', 'http://epam.com', {css: 'body'});

        expect(page.locator).not.to.be.undefined;
        expect(page.locator.css).to.equal('body');
    });
 
    it('should have stored name', () => {
        const page = new HomePage('Home', 'http://epam.com', {css: 'body'});

        expect(page.name).not.to.be.undefined;
        expect(page.name).to.equal('Home');
    });

    it('should have stored URL', () => {
        const page = new HomePage('Home', 'http://epam.com', {css: 'body'});

        expect(page.url).not.to.be.undefined;
        expect(page.url).to.equal('http://epam.com');
    });

    describe('Load', () => {
        it('should have method to load the page by URL', () => {
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});

            expect(page.load).not.to.be.undefined;
            expect(page.load()).to.equal('http://epam.com');
        });
    });

    describe('Parent', () => {
        it('should not have parent by default', () => {
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});

            expect(page.parent).not.to.be.undefined;
            expect(page.parent).to.be.null;
        });

        it('should throw error if parent is set', () => {
            const element = new HomePage('Title', {css: 'h1'});
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});

            expect(page.setParent).not.to.be.undefined;
            expect(() => page.setParent(element)).to.throw();
        });
    });

    describe('Children', () => {
        it('should not have children by default', () => {
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});

            expect(page.children).not.to.be.undefined;
            expect(page.children).to.eql({});
        });

        it('should have method to add children', () => {
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});
            const child = new Element('Title', {css: 'h1'});

            expect(page.addChildren).not.to.be.undefined;

            page.addChildren(child);

            expect(page.children.Title).to.eql(child);
        });

        it('should not add children twice', () => {
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});
            const child = new Element('Title', {css: 'h1'});

            page.addChildren(child);
            expect(() => page.addChildren(child)).to.throw();
        });
    });

    describe('Header', () => {

        it('GetHeader method should return error if Header root element does not exist', () => {
            
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});
            const childMain = new Element('Main', {css: '#main'});
       
            expect(page.getHeader).not.to.be.undefined;
            expect(() => page.getHeader(childMain)).to.throw();
        });
 
       
        it('GetHeader method should return Header element if it was added to HomePage', () => {
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});
            const childHeader = new Element('Header', {css: '.header__content'});
            const childMain = new Element('Main', {css: '#main'});
            const childFooter = new Element('Footer', {css: '.footer_section'});

            page.addChildren(childFooter);
            page.addChildren(childMain);
            page.addChildren(childHeader);
           

            const pElement = page.getHeader();

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('.header__content');
        });
    });
   
    describe('Main', () => {

        it('GetMain method should return error if Main root element does not exist', () => {
            
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});
            const childHeader = new Element('Header', {css: '.header__content'});
            

            expect(page.getHeader).not.to.be.undefined;
            expect(() => page.getHeader(childHeader)).to.throw();
        });
 
       
        it('GetMain method should return Main element if it was added to HomePage', () => {
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});
            const childHeader = new Element('Header', {css: '.header__content'});
            const childMain = new Element('Main', {css: '#main'});
            const childFooter = new Element('Footer', {css: '.footer_section'});

            page.addChildren(childFooter);
            page.addChildren(childMain);
            page.addChildren(childHeader);
           

            const pElement = page.getMain();

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('#main');
        });
    });

    describe('Footer', () => {

        it('GetFooter method should return error if Main root element does not exist', () => {
            
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});
            const childHeader = new Element('Header', {css: '.header__content'});
            

            expect(page.getHeader).not.to.be.undefined;
            expect(() => page.getHeader(childHeader)).to.throw();
        });
 
       
        it('GetFooter method should return Footer element if it was added to HomePage', () => {
            const page = new HomePage('Home', 'http://epam.com', {css: 'body'});
            const childHeader = new Element('Header', {css: '.header__content'});
            const childMain = new Element('Main', {css: '#main'});
            const childFooter = new Element('Footer', {css: '.footer_section'});

            page.addChildren(childFooter);
            page.addChildren(childMain);
            page.addChildren(childHeader);
           

            const pElement = page.getFooter();

            expect(pElement).to.be.instanceOf(ElementFinder);
            expect(pElement.locator().css).to.equal('.footer_section');
        });
    });

    



});