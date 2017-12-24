Feature: EPAM site
    As a webinar attendee
    I want to write test for EPAM career site
    So that I can practice Cucumber

    Scenario: Search for a job
    Given EPAM Career site is opened
    Then EPAM Career site should be opened
    And The search form should be visible
    And The non existing element should be hidden

    # TODO