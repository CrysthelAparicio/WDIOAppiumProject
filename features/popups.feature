Feature: Manage premium account popups

   @popups
   Scenario: AC-01 Free account upgrade option to PRO - HP
   Given a user in the "To-Do List" app
   And   the user taps on the three lines of the toolbar at the bottom of the app.
   And   the options menu of the app appears
   Then  the option to upgrade the account to PRO will be displayed first.
 
  @popups
  Scenario: AC-02 Upgrade to PRO account - HP
   Given a user in the "To-Do List" app
   And   the user taps on the three lines of the toolbar at the bottom of the app.
   And   the options menu of the app appears
   When  the user taps on the option "Upgrade to Pro".
   Then  another tab will be displayed with the information to upgrade the account

   @popups
   Scenario: AC-03 Viewing of payment packages - HP
   Given a user in the "To-Do List" app
   And   the user taps on the three lines of the toolbar at the bottom of the app.
   And   the options menu of the app appears
   When  the user taps on the option "Upgrade to Pro".
   Then  three paid packages will be displayed.
   Then  another tab will be displayed with the information to upgrade the account


   @popups
   Scenario: AC-04 Popup to add payment method when selecting payment plan - HP
   Given a user in the "To-Do List" app
   And   the user taps on the three lines of the toolbar at the bottom of the app.
   And   the options menu of the app appears
   When  the user taps on the option "Upgrade to Pro".
   Then  three paid packages will be displayed.
   When  the user selects any of the payment plans
   Then  a popup will appear to add a payment method.
   Then  another tab will be displayed with the information to upgrade the account


  @popups
   Scenario: AC-05 Popup to add payment method when tapping the "Continue" button - HP
   Given a user in the "To-Do List" app
   And   the user taps on the three lines of the toolbar at the bottom of the app.
   And   the options menu of the app appears
   When  the user taps on the option "Upgrade to Pro".
   Then  three paid packages will be displayed.
   When  the user taps on the purple button "Continue".
   Then a popup will appear to add a payment method.
   Then  another tab will be displayed with the information to upgrade the account