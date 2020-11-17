Feature: EPAM site
    As a webinar attendee
    I want to write test for EPAM career site
    So that I can practice Cucumber

    Scenario Outline: Search for a job
        Given the EPAM Careers page is opened
        Then the EPAM Careers page should be visible
        And the Search form should be visible

        When the Location filter box is clicked
        And inside the <Country> the city <City> is selected
        Then the selected location should be "City"

        When the "Department" filter box is clicked
        And <Department> is selected in the Department filter box 
        Then the "Department" filter box should contain "Selected: 1"
        And the department filter box should contain <Department> tile

        When the Search button is clicked
        Then the <PositionName> position should be visible
        And the department of the position should be <Department>
        And the location of the position should be <City>, <Country>
        And there should be an Apply button displayed for the position

        When the first search result's Apply button is clicked
        Then the job description should contain <City>, <Country>
        And the job description should contain <PositionName> PositionName

        Examples:
            | Country | City        | Department	            | PositionName              |
            | Hungary | Debrecen	| Software Test Engineering	| Test Automation Engineer  |
            | Belarus | Minsk	    | Software Architecture	    | Test Automation Architect |