import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { generateRandomString } from '../../utils/generate-random-string';

let userId = '';

Given('I open Register page', () => {
  userId = generateRandomString();
  cy.visit('#/register');
});

When('I input correct username', () => {
  cy.get("[placeholder='Username']").type(userId);
});

And('I input correct email', () => {
  cy.get("[placeholder='Email']").type(`${userId}@example.com`);
});

And('I input correct password', () => {
  cy.get("[placeholder='Password']").type(userId);
});

And('I click Sign up button', () => {
  cy.get("[data-e2e-id='sign-up']").click();
});

Then('my information is displayed in the header on the Home page', () => {
  cy.get(userId).should('be.visible');
});

When('I input username that already exists', () => {
  cy.registerUserApi(userId);
  cy.get("[placeholder='Username']").type(userId);
});

And('I input email that already exists', () => {
  cy.get("[placeholder='Email']").type(`${userId}@example.com`);
});

Then('an error message is displayed', () => {
  cy.get("[data-e2e-id='error']").should('contain', 'email has already been taken', 'username has already been taken');
});
