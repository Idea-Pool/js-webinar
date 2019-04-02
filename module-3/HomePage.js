'use strict';

const Layout = require('./Layout');
const Element = require('./Element');

class HomePage extends Layout {
    constructor() {
        super('Home', 'https://epam.com', { css: '.body' });
        this.title = new Element('Title', { css: '.title' });
        this.addChildren(this.title);
        this.menuBar = new Element('MenuBar', { css: '.menuBar' });
        this.addChildren(this.menuBar);
    }

    getTitle() {
        return 'title text';
    };
}

module.exports = HomePage;