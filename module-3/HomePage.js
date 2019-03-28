'use strict';

const Layout = require('./Layout');
const Element = require('./Element');

class HomePage extends Layout {
    constructor() {
        super('Home', 'https://epam.com', { css: '.body' });
        this.title = new Element('Title', { css: '.title' });
        super.addChildren(this.title);
        this.title.setParent(this);
        this.menuBar = new Element('MenuBar', { css: '.menuBar' });
        super.addChildren(this.menuBar);
        this.menuBar.setParent(this);
    }

    getTitle() {
        return 'title text';
    };
}

module.exports = HomePage;