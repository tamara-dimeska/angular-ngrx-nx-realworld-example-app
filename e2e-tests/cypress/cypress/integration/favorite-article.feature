Feature: Favorite article

    As a user,
    I want to be able to favorite the articles I like,
    so that I can easily access them from Favorited articles section.

    Scenario: Favorite an article
        Given I open an article
        When I click on the Heart button
        And go to Favorited Articles section
        Then the article is displayed there