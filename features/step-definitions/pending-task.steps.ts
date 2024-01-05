import { When, Then } from '@wdio/cucumber-framework';
import PendingTaskPage from '../pageobjects/pending-task.page.js';


When(/^The user selects the first checkbox for a task to complete it$/, async () => {
    await PendingTaskPage.clickCheckTask();
});

Then(/^The user sees the name of the underlined task and displayed in the completed list$/, async () => {
    await PendingTaskPage.assertionCheckTaskSelected();
});



