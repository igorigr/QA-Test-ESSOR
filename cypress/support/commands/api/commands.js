import EnvHelper from '@helper/envHelper';
let contactId;
const urlApi =  EnvHelper.getValue('urlApi');

const header = {
  'User-Key': EnvHelper.getValue('usuario.chaveIntegracao'),
  'Content-Type': 'application/json'
};

Cypress.Commands.add('setContactId', (id) => {
  contactId = id;
});

Cypress.Commands.add('getContactId', () => {
  return contactId;
});


Cypress.Commands.add('postContacts', (contact) => {
  cy.api({
    url: urlApi+'/Contacts',
    method: "POST",
    headers: header,
    body: contact,
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('getContacts', (contact) => {
  cy.api({
    url: urlApi+'/Contacts'+contact,
    method: 'GET',
    headers: header,
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('pathContacts', (contactId,contactBody) => {
  cy.api({
    url: urlApi+'/Contacts'+'('+contactId+')',
    method: "PATCH",
    headers: header,
    body: contactBody,
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('deleteContacts', (contactId) => {
  cy.api({
    url: urlApi+'/Contacts'+'('+contactId+')',
    method: "DELETE",
    headers: header,
    failOnStatusCode: false
  }).then(response => { return response })
})




Cypress.Commands.add('postDeals', (dealBody) => {
  cy.api({
    url: urlApi+'/Deals',
    method: "POST",
    headers: header,
    body: dealBody,
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('getDeals', (dealId) => {
  cy.api({
    url: urlApi+'/Deals'+dealId,
    method: 'GET',
    headers: header,
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('pathDeals', (dealId,dealBody) => {
  cy.api({
    url: urlApi+'/Deals'+'('+dealId+')',
    method: "PATCH",
    headers: header,
    body: dealBody,
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('deleteDeals', (dealId) => {
  cy.api({
    url: urlApi+'/Deals'+'('+dealId+')',
    method: "DELETE",
    headers: header,
    failOnStatusCode: false
  }).then(response => { return response })
})
