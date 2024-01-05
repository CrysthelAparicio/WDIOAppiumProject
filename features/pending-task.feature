Feature: Pending Task

  @pending
  Scenario: Check Task as Completed - HP
    Given a user in the "To-Do List" app
    And the user taps on the "Tasks" option in the toolbar
    When the user taps the blue button to add a new task
    And enters the name of the task
    And taps on the blue circle button
    Then the task will be entered into the dashboard
    And the user selects the first checkbox for a task to complete it
    Then the user sees the name of the underlined task and displayed in the completed list
  
  
