import paginaLogin from '@support/page/login';

Cypress.Commands.add('getTempKeyValue', (key) => {
  cy.task('getTempKeyValue', key);
});

Cypress.Commands.add('setTempKeyValue', (object) => {
  cy.task('setTempKeyValue', object);
});

Cypress.Commands.add('login', ([email,senha]) => {
  cy.session([email,senha], () => {
    paginaLogin.loginPlataforma(email,senha);
  },{
    cacheAcrossSpecs: true,
  });
});
