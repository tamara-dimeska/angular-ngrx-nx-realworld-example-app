Feature: Add comments

    As a user,
    I want to be able to add a comment to an article,
    so that I can share my opinion about it with other users.

    Scenario: Add a comment in an article
        Given I open an article
        When I input a text in the Comment field
        And I press Comment button
        Then a comment is posted
