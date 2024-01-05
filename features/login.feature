Feature: WDIO APPIUM

  # Scenario: AC-06 Add new task button - HP
  #   Given a user in the "To-Do List" app
  #   When the user taps on the "Tasks" option in the toolbar
  #   Then a blue button will be displayed at the top, right side of the toolbar

  # Scenario: AC-07 Message to add a new task - HP
  #   Given a user in the "To-Do List" app
  #   When the user taps on the "Tasks" option in the toolbar
  #   Then the message "Click here to create your first task" will be displayed above the button to add tasks

 Scenario: AC-09 Entering characters in the popup - HP
    Given a user in the "To-Do List" app
    And the user taps on the "Tasks" option in the toolbar
    And the user taps the blue button to add a new task
    And the popup to enter the task name is displayed
    When the user taps on the space to add the task name
    Then the mobile keyboard will be activated to enter a name
    Then click Button send