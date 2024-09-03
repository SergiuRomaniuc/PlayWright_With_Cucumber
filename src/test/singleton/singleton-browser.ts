import { Browser } from "@playwright/test";


export class SingletonBrowser {
    private static browser: Browser;


    private constructor() {}


    public static async init(browser: Browser) {
        if (!this.browser) {

            this.browser = browser;

        }
    }


    public static getBrowser(): Browser {
        if (!this.browser) {

            throw new Error("browser-ul nu a fost creat inca!!!");            

        }

        return this.browser;
    }

    public static async closeBrowser() {

        await this.browser.close();
        
    }
}