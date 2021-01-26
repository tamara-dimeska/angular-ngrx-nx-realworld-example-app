Feature: Delete article

    As a user,
    I want to be able to delete an article,
    so that other user cannot read my article any more.

    Background: 
        Given I open my published article
        When I click Delete button
    
    Scenario: Remove an article from My Articles section
        Then the article is not displayed in My Articles section
    
    Scenario: Remove an article from Global Feed
        Then the article is not displayed in Global Feed
