Feature: EPAM site
    As a webinar attendee
    I want to write test for EPAM career site
    So that I can practice Cucumber

    Scenario Outline: Search for a job
        Given the career page is opened
        And the search form should be visible

        When <City>, <Country> is selected in the location filter box
        Then <City> should be selected in the location filter box
        When <Department> is selected in the department filter box
        Then <Department> should be selected in the department filter box

        When the search button is clicked on
        Then there should be a job offer for <PositionName> position
        And the department of the <PositionName> position should be <Department>
        And the location of the <PositionName> position should be <City>, <Country>
        And the apply button of the <PositionName> position should be visible

        When the apply button of the <PositionName> position is clicked on
        Then the description of the job offer should contain "<PositionName>"
        And the description of the job offer should contain "<City>"
    Examples:
      | Country | City     | Department                | PositionName              |
      | Belarus | Minsk    | Software Architecture     | Test Automation Architect |