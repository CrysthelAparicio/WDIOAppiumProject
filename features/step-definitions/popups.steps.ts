import { Given, When, Then } from '@wdio/cucumber-framework';
import PopupsPage from '../pageobjects/popups.page.js';
import popupsPage from '../pageobjects/popups.page.js';

//-------------------AC-01--------------------------------//

Then(/^the option to upgrade the account to PRO will be displayed first.$/, async () => {
    await PopupsPage.MenuOptionsDisplayed();
});
//-------------------AC-02--------------------------------//

 Then(/^the user taps on the three lines of the toolbar at the bottom of the app.$/, async () => {
     await PopupsPage.TabThreeLines();
 });
 
 Then(/^the options menu of the app appears$/, async () => {
    await PopupsPage.MenuOptionsDisplayed();
});

Then(/^the user taps on the option "Upgrade to Pro".$/, async () => {
    await PopupsPage.TabUpdatePro();
});

Then(/^another tab will be displayed with the information to upgrade the account$/, async () => {
    await PopupsPage.AssertionInformation();
    await popupsPage.TapBack();
    await popupsPage.TapDialogClose();
});
//-------------------AC-03--------------------------------//
 
Then(/^three paid packages will be displayed.$/, async () => {
    await PopupsPage.AssertionPaidOption();
});

//-------------------AC-04--------------------------------//

Then(/^the user selects any of the payment plans$/, async () => {
    await PopupsPage.TapPermanent();
});

Then(/^a popup will appear to add a payment method.$/, async () => {
    await PopupsPage.VerifyNewWindows();
    await PopupsPage.TapOK();
});

//-------------------AC-05--------------------------------//

Then(/^the user taps on the purple button "Continue".$/, async () => {
    await PopupsPage.TapContinue();
});