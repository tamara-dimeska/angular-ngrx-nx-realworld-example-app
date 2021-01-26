Feature: Register

    As a user,
    I want to be able to create a new account,
    so that I can use the application for publishing articles.

    Background: 
        Given I open Register page

    Scenario: Successfull registration
        When I input correct username
        And I input correct password
        And I input correct email
        And I click Register button
        Then I am navigated to the Home page
        And my information is displayed in the header

    Scenario: Invalid registration
        When I input username that already exists
        And I input password
        And I input email that already exists
        And I click Register button
        Then an error message is displayed