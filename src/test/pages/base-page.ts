import { Page } from "@playwright/test";


export class BasePage {
    readonly page: Page;
    protected baseUrl: string = 'http://the-internet.herokuapp.com';

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto((this.baseUrl + url));
    }

    async getElementText(locator: string) {
        return await this.page.innerText(locator);
    }

    async completeForm(locator: string, value: string) {
        await this.page.fill(locator, value);
    }

    async clickButton(locator: string) {
        await this.page.click(locator, {button: "left"});
    }
}

