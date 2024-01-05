import { Given, When, Then } from '@wdio/cucumber-framework';
import TaskPage from '../pageobjects/task.page.js';

//-------------------AC-06--------------------------------//
Given(/^a user in the "To-Do List" app$/, async () => {
   await TaskPage.home();
});
When(/^the user taps on the "Tasks" option in the toolbar$/, async () => {
    await TaskPage.TabTask();
});
Then(/^a blue button will be displayed at the top, right side of the toolbar$/, async () => {
    await TaskPage.blueButtonDisplayed();
});


//-------------------AC-07--------------------------------//

Then(/^the message "Click here to create your first task" will be displayed above the button to add tasks$/, async () => {
    await TaskPage.AssertionMessageDisplayed();
});

//------------------AC-09-------------------------------//

Then(/^the user taps the blue button to add a new task$/, async () => {
    await TaskPage.userTapsBlueNewTask();
});
Then(/^the popup to enter the task name is displayed$/, async () => {
    await TaskPage.inputTaskNameDisplayed();
});
Then(/^the user taps on the space to add the task name$/, async () => {
    await TaskPage.tapsOnTaskName();
});
Then(/^the mobile keyboard will be activated to enter a name$/, async () => {
    await TaskPage.enterNewName();
});
Then(/^click Button send$/, async () => {
    await TaskPage.clickButtonSend();
});

