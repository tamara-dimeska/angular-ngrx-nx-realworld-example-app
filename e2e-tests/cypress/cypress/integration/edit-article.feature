Feature: Edit article

    As a user,
    I want to be able to edit my published article,
    so that I can fix any typos.

    Scenario: Edit an article
        Given I open my published article
        When I edit the title
        And I click Save button
        Then the article is displayed with the new title 