import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { generateRandomString } from '../../utils/generate-random-string';

let userId;

beforeEach(() => {
  userId = generateRandomString();
});

Given('I open Register page', () => {
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

Then('my information is displayed in the header', () => {
  cy.get('a').should('contain', userId);
});

When('I input username that already exists', () => {
  cy.request('POST', 'https://conduit.productionready.io/api/users', {
    user: { email: `${userId}@example.com`, password: userId, username: userId },
  });
  cy.get("[placeholder='Username']").type(userId);
});

And('I input email that already exists', () => {
  cy.get("[placeholder='Email']").type(`${userId}@example.com`);
});

Then('an error message is displayed', () => {
  cy.get("[data-e2e-id='error']").should('contain', 'email has already been taken', 'username has already been taken');
});
