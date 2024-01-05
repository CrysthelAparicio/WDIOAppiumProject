Feature: WDIO APPIUM

  @login
  Scenario: AC-06 Add new task button - HP
    Given a user in the "To-Do List" app first
    When the user taps on the "Tasks" option in the toolbar
    Then a blue button will be displayed at the top, right side of the toolbar

  @login
  Scenario: AC-07 Message to add a new task - HP
    Given a user in the "To-Do List" app
    When the user taps on the "Tasks" option in the toolbar
    Then the message "Click here to create your first task" will be displayed above the button to add tasks

  @login
  Scenario: AC-08 Popup to enter task name - HP
    Given a user in the "To-Do List" app
    And the user taps on the "Tasks" option in the toolbar
    When the user taps the blue button to add a new task
    Then a popup will appear to enter the task name

  @login
  Scenario: AC-09 Entering characters in the popup - HP
    Given a user in the "To-Do List" app
    And the user taps on the "Tasks" option in the toolbar
    And the user taps the blue button to add a new task
    And the popup to enter the task name is displayed
    When the user taps on the space to add the task name
    Then the mobile keyboard will be activated to enter a name

  @login @newTask
  Scenario: AC-10 Enter new task - HP
    Given a user in the "To-Do List" app
    And the user taps on the "Tasks" option in the toolbar
    When the user taps the blue button to add a new task
    And enters the name of the task
    And taps on the blue circle button
    And user go back after indications
    Then the task will be entered into the dashboard

  @login
  Scenario: AC-11 Add a new category from the main menu - HP
      Given a user in the "To-Do List" app
      And he is in the main menu of the app
      And the user taps on the option "Category"
      When the user taps on "Create new" option
      And the user enters the category name
      And the user taps on "Save"
      Then the new category will be saved and added

  @login
  Scenario: AC-12 Add the created category to a task - HP
    Given a user in the "To-Do List" app
      And the user taps on the "Tasks" option in the toolbar
      When the user taps the blue button to add a new task
      And enters the name of the task
      And taps on the blue circle button
      And user go back after task created
      Then the task will be entered into the dashboard
      And the user selects one of the created tasks
      When the user taps on the "No category" dropdown at the top of the page
      And the user selects the category created before
      Then the category will be added to the task

