Feature: Login

    As a user, 
    I want to be able to login to the application only when I input valid credentials,
    so that I can use the application to publish articles. 

    Background: 
        Given I open the Login page

    Scenario: Valid login
        When I input a correct username
        And I input a correct password
        And I click Login button
        Then I am navigated to the home page
        And my information is displayed in the header

    Scenario: Invalid login
        When I input a correct username
        And I input incorrect password
        And I click Login button
        Then I see an error message on the login page