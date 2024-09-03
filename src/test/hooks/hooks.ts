import { After, AfterAll, BeforeAll } from "@cucumber/cucumber";
import { BrowserFactory } from "../singleton/browser-factory";
import { SingletonBrowser } from "../singleton/singleton-browser";


BeforeAll(async () => {
    await BrowserFactory.initializeBrowser();
})


AfterAll(async () => {
    SingletonBrowser.closeBrowser();
})