# Test cases

## Search for a job

| # | Action | Expected |
|--:|:-------|:---------|
| 1 | Open EPAM career page | <ol><li>The page is opened</li><li>The search form is visible</li></ol> |
| 2 | <ol><li>Click on Location filter box</li><li>Select `Country` / `City`</li></ol> | The location filter box should contain `City` | 
| 3 | <ol><li>Click on Department filter box</li><li>Select `Department`</li></ol> | The department filter box should contain `Department` tile |
| 4 | Search button is clicked | <ol><li>The `PositionName` position should be visible</li><li>The department of the position should be `Department`</li><li>The location of the position should be `City`, `Country`</li><li>There should be an Apply button for the position</li></ol> |
| 5 | Click on Apply button of the position | <ol><li>The job description should contain `City`</li><li>The job description should contain `PositionName`</li></ol> |

### Test data

| # | Country | City | Department | PositionName |
|--:|:--------|:-----|:------------|:-------------|
| 1 | Hungary | Debrecen | Software Test Engineering | Test Automation Engineer |
| 2 | Belarus | Minsk | Software Architecture | Test Automation Architect |