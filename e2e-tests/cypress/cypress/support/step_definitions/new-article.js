import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { generateRandomString } from '../../utils/generate-random-string';

let userId;
Given('I am logged in to the system', () => {
  userId = generateRandomString();
  cy.login(userId);
});
