Feature: Pending Task

  @pending
  Scenario Outline: Check Task as Completed - HP
    Given a user in the "To-Do List" app
    When The user selects the first checkbox for a task to complete it
    Then The user sees the name of the underlined task and displayed in the completed list
