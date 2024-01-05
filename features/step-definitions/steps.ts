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
    await TaskPage.enterNewName2();
});


//------------------AC-10-------------------------------//
Then(/^enters the name of the task$/, async () => {
    await TaskPage.enterNewName();
});
Then(/^taps on the blue circle button$/, async () => {
    await TaskPage.clickButtonSend();
});
Then(/^the task will be entered into the dashboard$/, async () => {
    await TaskPage.displayedIntoDashboard();
});
//------------------AC-11-------------------------------//
Then(/^he is in the main menu of the app$/, async () => {
    await TaskPage.clickMainMenu();
});
Then(/^the user taps on the option "Category"$/, async () => {
    await TaskPage.tapsCategory();
});
Then(/^the user taps on "Create new" option$/, async () => {
    await TaskPage.categoryTapsCreateNew();
});
Then(/^the user enters the category name$/, async () => {
    await TaskPage.enterCategoryName();
});
Then(/^the user taps on "Save"$/, async () => {
    await TaskPage.categoryTapsOnSaveButton();
});
Then(/^the new category will be saved and added$/, async () => {
    await TaskPage.newCategoryDisplayed();
});

//------------------AC-12-------------------------------//
Then(/^the user selects one of the created tasks$/, async () => {
    await TaskPage.clickTaskCreated();
});
Then(/^the user taps on the "No category" dropdown at the top of the page$/, async () => {
    await TaskPage.tapsNoCategory();
});
Then(/^the user selects the category created before$/, async () => {
    await TaskPage.selectCategoryBefore();
});
Then(/^the category will be added to the task$/, async () => {
    await TaskPage.verifyCategoryAdded();
});
//------------------AC-13-------------------------------//
Then(/^the user taps on the "Due Date" option$/, async () => {
    await TaskPage.tapsCalendarDueDate();
});
Then(/^the user selects a date later than the current date$/, async () => {
    await TaskPage.selectDateLater();
});
Then(/^tap on "Done"$/, async () => {
    await TaskPage.clickDoneCalendar();
});
Then(/^the new date will be added to the task$/, async () => {
    await TaskPage.verifyAddedCalendar();
});

//------------------AC-14-------------------------------//
Then(/^presses the template task icon button$/, async () => {
    await TaskPage.pressesTemplate();
});
Then(/^chooses a free template$/, async () => {
    await TaskPage.choosesTemplate();
});
Then(/^select "Add to my List"$/, async () => {
    await TaskPage.addMyList();
});
Then(/^The task will be entered in the control panel$/, async () => {
    await TaskPage.enteredControlPanel();
});

//------------------AC-15-------------------------------//
Then(/^the section to edit task is displayed select the bullet point menu$/, async () => {
    await TaskPage.clickPointMenu();
});
Then(/^select the "Delete" option$/, async () => {
    await TaskPage.clickDelete();
});
Then(/^Then the task will no longer be displayed in the list of existing tasks$/, async () => {
    await TaskPage.noLongerDisplayed();
});