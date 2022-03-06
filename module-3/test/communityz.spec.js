// @ts-check
const { test, expect } = require("@playwright/test");
const IdeaPoolPage = require("../pages/idea-pool");



const HEADER_ITEMS = [
  "Communities",
  "Events",
  "Articles",
  "Videos",
  "About"
];

const EVENT_ITEMS = [
    "Online events",
    "All Events",
    "Speakers",
    "Calendar"
]

test.describe("Main page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://community-z.com/");
    });
      
  test("should load in", async ({ page }) => {
    await expect(page.locator(".evnt-navigation li.nav-item > a")).toHaveText([...HEADER_ITEMS]);
    await expect(page.locator("#onetrust-banner-sdk")).toBeVisible();
  });

  test("should be able to accept cookies", async ({ page }) => {
    await expect(page.locator("#onetrust-banner-sdk")).toBeVisible();
    await expect(page.locator("#onetrust-accept-btn-handler")).toBeVisible();

    page.locator("#onetrust-accept-btn-handler").click()

    await expect(page.locator("#onetrust-accept-btn-handler")).not.toBeVisible()
  });

  test("should choose event category", async ({ page }) => {
    await expect(page.locator(".evnt-navigation li.nav-item.dropdown > a")).toBeVisible();
    await expect(page.locator(".evnt-navigation li.nav-item.dropdown > .dropdown-menu")).not.toBeVisible();

    page.locator(".evnt-navigation li.nav-item.dropdown > a").hover();

    await expect(page.locator(".evnt-navigation li.nav-item.dropdown > .dropdown-menu")).toBeVisible();
    await expect(page.locator(".evnt-navigation li.nav-item.dropdown > .dropdown-menu a")).toHaveText([...EVENT_ITEMS]);

  });

  test("should navigate to communities page", async ({ page }) => {
    await expect(page.locator(".evnt-navigation li.nav-item > a[href='/communities']")).toBeVisible();

    page.locator(".evnt-navigation li.nav-item > a[href='/communities']").click();
    await page.waitForURL("https://community-z.com/communities");
  });
});

test.describe("Communities page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://community-z.com/communities");
    });

  test("should load in", async ({ page }) => {    
    await expect(page.locator(".evnt-navigation")).toBeVisible();
    await expect(page.locator(".evnt-default-filters")).toBeVisible();
    await expect(page.locator(".evnt-communities-row")).toBeVisible();
    await page.locator(".evnt-communities-column").last().waitFor({state: "visible"});
    expect(await page.locator(".evnt-communities-column").count()).toBeGreaterThan(0);
  });

  test("should filter communities by text", async ({ page }) => {      
    await expect(page.locator(".evnt-default-filters")).toBeVisible();

    await page.locator(".evnt-search-filter .evnt-text-fields").type("Idea pool");
    await expect(page.locator(".evnt-communities-column")).toHaveCount(1);
    await expect(page.locator(".evnt-communities-column").first()).toContainText("Idea Pool");
  });

  test("should filter communities by category", async({ page }) => { 
    await expect(page.locator(".evnt-default-filters")).toBeVisible();

    await page.locator("#filter_category").click()
    await page.locator("div[data-group='Engineering']").waitFor({state:"visible"});
    await page.locator("div[data-group='Engineering'] label").click();

    await expect(page.locator(".evnt-communities-column")).toHaveCount(7);
  });

  test("should navigate to community page", async({ page }) => {
    await expect(page.locator(".evnt-default-filters")).toBeVisible();

    await page.locator(".evnt-search-filter .evnt-text-fields").type("Idea pool");
    await expect(page.locator(".evnt-communities-column")).toHaveCount(1);
    await expect(page.locator(".evnt-communities-column").first()).toContainText("Idea Pool");

    await page.locator(".evnt-communities-column").first().click();

    await page.waitForURL("https://community-z.com/communities/idea-pool");
  });
});

test.describe("Community page", () => {
    let ideaPoolPage;

    test.beforeAll(async ({browser}) => {
        ideaPoolPage = new IdeaPoolPage(await browser.newPage());
    });

    test.beforeEach(async () => {
        await ideaPoolPage.goto();
    });

    test.only("should load in", async () => {
        await expect(ideaPoolPage.logo).toBeVisible();
        await expect(ideaPoolPage.title).toHaveText("Idea Pool");
        await expect(ideaPoolPage.subscribeButton).toBeVisible();
        expect(await ideaPoolPage.topicCount()).toBeGreaterThan(0);
        await expect(ideaPoolPage.members).toHaveCount(3);
    })
})
