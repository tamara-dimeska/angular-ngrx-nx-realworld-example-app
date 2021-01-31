Cypress.Commands.add('registerUserApi', (userId) => {
  cy.request('POST', 'https://conduit.productionready.io/api/users', {
    user: { email: `${userId}@example.com`, password: userId, username: userId },
  });
});

Cypress.Commands.add('login', (userId) => {
  cy.registerUserApi(userId);
  cy.visit('#/login');
  cy.get("[placeholder='Username']").type(`${userId}@example.com`);
  cy.get("[placeholder='Password']").type(userId);
  cy.get("[data-e2e-id='sign-in']").click();
});
