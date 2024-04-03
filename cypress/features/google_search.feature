Feature: Google Search

  Scenario: Search for a term on Google
    Given I am on the Google search page
    When I enter "OpenAI" into the search bar
    And I click the search button
    Then I should see results related to "OpenAI"
