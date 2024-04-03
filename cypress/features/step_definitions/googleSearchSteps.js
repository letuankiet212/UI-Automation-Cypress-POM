const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Given('I am on the Google search page', async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.google.com');
});

When('I enter {string} into the search bar', async function (searchTerm) {
  const searchBar = await driver.findElement(By.name('q'));
  await searchBar.sendKeys(searchTerm);
});

When('I click the search button', async function () {
  const searchBar = await driver.findElement(By.name('q'));
  await searchBar.sendKeys(Key.RETURN);
});

Then('I should see results related to {string}', async function (searchTerm) {
  await driver.wait(until.elementLocated(By.id('search')), 10000);
  const results = await driver.findElements(By.css('.g'));
  assert(results.length > 0, 'No results found');
  const firstResult = await results[0].getText();
  assert(firstResult.toLowerCase().includes(searchTerm.toLowerCase()), `First result does not contain search term: ${firstResult}`);
  await driver.quit();
});
