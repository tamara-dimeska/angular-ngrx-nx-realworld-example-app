import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { generateRandomString } from '../../utils/generate-random-string';

let userId;

Given('I am registered user', () => {
  userId = generateRandomString();
  cy.registerUserApi(userId);
});

And('I open the Login page', () => {
  cy.visit('#/login');
});

When('I input a correct username', () => {
  cy.get("[placeholder='Username']").clear().type(`${userId}@example.com`);
});

And('I input a correct password', () => {
  cy.get("[placeholder='Password']").clear().type(userId);
});

And('I click Login button', () => {
  cy.get("[data-e2e-id='sign-in']").click();
});

Then('my information is displayed in the header', () => {
  cy.get('a').should('contain', userId);
});

And('I input incorrect password', () => {
  cy.get("[placeholder='Password']").clear().type('111111111');
});

Then('I see an error message on the login page', () => {
  cy.get("[data-e2e-id='error']").should('contain', 'email or password is invalid');
});
