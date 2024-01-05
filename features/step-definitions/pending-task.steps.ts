import { Given, When, Then } from '@wdio/cucumber-framework';
import TaskPage from '../pageobjects/login.page.js';
import PendingTaskPage from '../pageobjects/pending-task.page.js';

When(/^the user selects the first checkbox for a task to complete it$/, async () => {
    await PendingTaskPage.clickCheckTask();
});

Then(/^the user sees the name of the underlined task and displayed in the completed list$/, async () => {
    await PendingTaskPage.assertionCheckTaskSelected();
});



