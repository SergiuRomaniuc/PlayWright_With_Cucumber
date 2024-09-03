import { Given, When, Then } from '@cucumber/cucumber';
import { Page, Browser, chromium } from "@playwright/test"
import { LoginPage } from '../pages/login-page';
import { SingletonBrowser } from '../singleton/singleton-browser';
import { log } from 'util';

let browser: Browser;
let loginPage: LoginPage;

Given('User navigates to the log in page', async function () {


    browser = SingletonBrowser.getBrowser();


    let page = await browser.newPage();


    loginPage = new LoginPage(page);


    loginPage.navigateTo(loginPage.url);


});


Given('User enters the username as {string}', async function (username) {
    
    await loginPage.completeForm(loginPage.loginPath, username);

})


Given('User enters the password as {string}', async function (password) {
    
    await loginPage.completeForm(loginPage.passPath, password);
    
})


When('User click on the Login button', async function () {
    
    await loginPage.clickButton(loginPage.buttonPath)

})


Then('Secure area should be displayed', async function () {
    await loginPage.getElementText('//*[@id="content"]/div/h2') === 'Secure Area';
})

Then('Your password is invalid should be displayed', async function () {
    await loginPage.getElementText('//*[@id="flash"]') === 'Your password is invalid!';
})




