'use strict';

class HomePage {
    constructor(body) {
        this.body = body;
        this.elem = {}
    }
    getHomePage() {
        return this.body;
    }

    addElement(elem){
        this.elem = elem;
    }
}
module.exports = HomePage