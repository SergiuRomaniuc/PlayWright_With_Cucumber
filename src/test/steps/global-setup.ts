// global-setup.ts
import { type FullConfig } from '@playwright/test';
import { BrowserFactory } from '../singleton/browser-factory';

async function globalSetup(config: FullConfig) {

    console.log("hello");
    
    try {
        await BrowserFactory.initializeBrowser();
        console.log("Browser initialized successfully.");
    } catch (error) {
        console.error("Error during global setup:", error);
        throw error;  // Re-throw the error to ensure test execution stops
    }
}

export default globalSetup;
