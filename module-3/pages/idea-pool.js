const Header = require("../components/header");

module.exports = class IdeaPoolPage {

    constructor(page) {
        this.page = page;
        this.url = "https://community-z.com/communities/idea-pool";
        this.logo = page.locator(".evnt-community-photo img");
        this.title = page.locator(".evnt-desktop-info h1");
        this.subscribeButton = page.locator(".subscription");
        this.topics = page.locator(".evnt-community-topic");
        this.members = page.locator(".evnt-team-column");
        this.header = new Header(page);
    }

    goto() {
        return this.page.goto(this.url);
    }

    async topicCount() {
        return this.topics.count();
    }
}