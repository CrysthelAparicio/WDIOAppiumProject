import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/task.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import TaskPage from '../pageobjects/task.page.js';

const pages = {
    task: TaskPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
   ////
});

When(/^the user taps on the "Tasks" option in the toolbar$/, async () => {
    await TaskPage.AssertionCreateTask()
});



