Feature: EPAM site
    As a webinar attendee
    I want to write test for EPAM career site
    So that I can practice Cucumber

    Scenario Outline: Search for a job - <Skill>
    Given the EPAM Career site is opened
    Then the "Keyword search field" should be visible
    And the "Location filter box" should be visible
    And the "Department search field" should be visible
    And the "Find button" should be visible

    When the "Location" filter box is clicked
    And <City> in <Country> is selected in the Location filter box
    Then the Location filter box should contain <City>

    When the "Skills" filter box is clicked
    And <Skill> is selected in the Skills filter box
    Then the Skills filter box should contain "Selected: 1"
    And the selected <Skill> should appear under the search form

    When the Find button is clicked
    Then the search results should be displayed
    And the results should contain <City>, <Country>
    And the Apply buttons should be displayed

    When the first search result's Apply button is clicked
    Then the Job listings page should contain <City>, <Country>
    And the Job listings page should contain the selected PositionName

     Examples:
      | Country | City     | Skill                     |
      | Hungary | Debrecen | Software Test Engineering |
      | Belarus | Minsk    | Software Engineering      | 

    # TODO