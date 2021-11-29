Feature: EPAM site
    As a webinar attendee
    I want to write test for EPAM career site
    So that I can practice Cucumber

    Scenario Outline: Search for a job
        # open site
        Given the EPAM Careers page is opened
        # test URL
        Then the EPAM Careers page should be opened
        And the Search form should be visible

        When the Location filter box is clicked
        And the Country "<country>" is selected
        And the City "<city>" is selected
        Then the selected Location should be "<city>"

        When the Department filter box is clicked
        And the Department "<department>" is selected
        Then the selected Department should be "<department>"

        When the Search button is clicked
        Then the PositionName "<positionName>" is visible
        And the Department of the position should be "<department>"
        And the Location of the position should be "<city>, <country>"
        And an Apply button is visible
        And an Apply button is enabled

        When an Apply button is clicked
        Then the Job description contains "<city>"
        And the Job description contains "<positionName>"

        Examples:
            | country | city | department | positionName |
            | Hungary | Debrecen | Software Test Engineering | Test Automation Engineer |
            | Belarus | Minsk | Software Architecture | Test Automation Architect |