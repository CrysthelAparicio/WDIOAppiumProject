import { Given, When, Then} from '@wdio/cucumber-framework';
import TaskPage from '../pageobjects/login.page.js';
import PendingTaskPage from '../pageobjects/pending-task.page.js';

let quantityPending = 0;

When(/^the user selects the first checkbox for a task to complete it$/, async () => {
    await PendingTaskPage.clickCheckTask();
});

Then(/^the user sees the name of the underlined task and displayed in the completed list$/, async () => {
    await PendingTaskPage.assertionCheckTaskSelected();
});

Then(/^a user taps on the tab Mine option in the toolbar$/, async () => {
    await PendingTaskPage.clickTabMine();
});

Then(/^the user gets quantity about pending tasks$/, async () => {
    quantityPending = await PendingTaskPage.getQuantityPending();
});

Then(/^a user sees the same quantity about pending tasks$/, async () => {
    await PendingTaskPage.validatePendingTask(quantityPending.toString());
});

