import { chromium } from "@playwright/test";
import { SingletonBrowser } from "./singleton-browser";



export class BrowserFactory {
    public static async initializeBrowser() {
        let browser = await chromium.launch({headless: false});

        SingletonBrowser.init(browser);
        
    }
}