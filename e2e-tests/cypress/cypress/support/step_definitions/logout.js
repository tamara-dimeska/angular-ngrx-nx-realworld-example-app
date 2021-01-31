import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { generateRandomString } from '../../utils/generate-random-string';

let userId;

Given('I am logged in to the system', () => {
  userId = generateRandomString();
  cy.login(userId);
});

And('I open the Settings page', () => {
  cy.contains('Settings').click();
});

When('I press on Logout button', () => {
  cy.contains('Or click here to logout.').click();
});

Then('my credentials are not displayed in the header anymore', () => {
  cy.get('a').should('not.contain', userId);
});
