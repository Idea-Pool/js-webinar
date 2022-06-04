# Test cases

## Search for a job

| # | Action | Expected |
|--:|:-------|:---------|
| 1 | Open We are community page | <ol><li>The page should be opened</li><li>The Communities button in the header should be visible</li></ol> |
| 2 | <ol><li>Click on the `Communities` button</li><li>Type `Idea Pool` term into the search bar</li></ol> | <ol><li>The `Communities` list and the search bar should be visible</li> <li> The `Idea pool` community should be visible</li></ol> | 
| 3 | Click on the `Idea pool` community card | <ol><li>Community overview page shold be loaded</li><li>The `Idea pool` logo should be visible</li><li>The core team should be visible</li><li>The articles section should be visible</li></ol> |
| 4 | <ol><li>A random article title is saved in the memory</li><li> The same article is clicked on</li></oi> | <ol><li>The article page should be opened</li><li>The title of the article should be ok (the same as the title in the memory)</li><li>The article subtitle should be visible</li><li>The `Say "Thank you"` button should be visible</li></ol> |

### Test data

| # | Country | City | Department | PositionName |
|--:|:--------|:-----|:------------|:-------------|
| 1 | Hungary | Debrecen | Software Test Engineering | Test Automation Engineer |
| 2 | Belarus | Minsk | Software Architecture | Test Automation Architect |