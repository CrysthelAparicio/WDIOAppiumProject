Feature: The Internet Guinea Pig Website

  @login
  Scenario: AC-07 Message to add a new task - HP
    Given a user in the "To-Do List" app
    When the user taps on the "Tasks" option in the toolbar
    Then a blue button will be displayed at the top, right side of the toolbar

  @login
  Scenario: AC-07 Message to add a new task - HP
    Given a user in the "To-Do List" app
    When the user taps on the "Tasks" option in the toolbar
    Then the message "Click here to create your first task" will be displayed above the button to add tasks

  