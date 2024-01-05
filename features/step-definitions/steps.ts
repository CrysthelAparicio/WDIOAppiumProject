import { Given, When, Then } from '@wdio/cucumber-framework';
import TaskPage from '../pageobjects/task.page.js';


Given(/^a user in the "To-Do List" app$/, async () => {
   await TaskPage.home();
});
When(/^the user taps on the "Tasks" option in the toolbar$/, async () => {
    await TaskPage.TabTask();
});
Then(/^the message "Click here to create your first task" will be displayed above the button to add tasks$/, async () => {
    await TaskPage.AssertionMessageDisplayed();
});

Then(/^a blue button will be displayed at the top, right side of the toolbar$/, async () => {
    await TaskPage.blueButtonDisplayed();
});



