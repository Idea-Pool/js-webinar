'use strict';

class Browser {
    get(url) {
        return url;
    }
    getTitle(title) {
        return title.name;
    }
}

module.exports = Browser;