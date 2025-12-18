class PageUtils {

    constructor(page) {
        this.page = page;
    }

    async navigateToURL(url) {
        await this.page.goto(url);
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async fillInput(locator, value) {
        await locator.fill(value);
    }

    async clickElement(locator) {
        await locator.click();
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

}
module.exports = { PageUtils };
