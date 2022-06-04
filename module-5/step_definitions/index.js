const { Given, When, Then } = require("@cucumber/cucumber");
const { test, expect } = require("@playwright/test");

const HEADER_ITEMS = [
  "Communities",
  "Events",
  "Articles",
  "Videos",
  "About"
];

Given("the WeAreCommunity portal opened", async () => {
  await page.goto("https://www.wearecommunity.io/");
  
});

Then("the WeAreCommunity page should be loaded", async () => {
  await expect(page.locator(".evnt-navigation li.nav-item > a")).toHaveText([...HEADER_ITEMS]);
  await expect(page.locator("#onetrust-banner-sdk")).toBeVisible();
})