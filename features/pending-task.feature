Feature: Pending Task

  @pending
  Scenario: Check Task as Completed - HP
    Given a user in the "To-Do List" app
    When the user taps on the "Tasks" option in the toolbar
    And the user taps the blue button to add a new task
    And enters the name of the task
    And taps on the blue circle button
    Then the task will be entered into the dashboard
    And the user selects the first checkbox for a task to complete it
    Then the user sees the name of the underlined task and displayed in the completed list
  
  @pending
  Scenario: Checking the number of pending tasks in the user profile
    Given a user in the "To-Do List" app
    When the user taps on the "Tasks" option in the toolbar
    And the user gets quantity about pending tasks
    And a user taps on the tab Mine option in the toolbar
    Then a user sees the same quantity about pending tasks
  