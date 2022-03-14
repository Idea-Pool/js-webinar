module.exports = class Header {
    constructor(page) {
        this.main = page.locator(".evnt-platform-header .evnt-navigation");
        this.elements = this.main.locator("li.nav-item > a");
    }
}