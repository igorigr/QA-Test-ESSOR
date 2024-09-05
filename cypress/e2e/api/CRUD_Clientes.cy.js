describe('Casos de Testes API Clientes', { tags: ['regressao', 'integracao'] }, () => {

    beforeEach(function () {
        cy.fixture('contact/post').then(function (contact) {
            this.contact = contact
        })
        cy.fixture('contact/put').then(function (contactPut) {
            this.contactPut = contactPut
        })
    })

    it('TC001 - Cadastrar um novo Cliente via API', function () {

        const contact  = this.contact.create
        
        cy.postContacts(contact)
            .then(response => {
                expect(response.status).to.eq(200)
                const id = response.body.value[0].Id;
                cy.setContactId(id);
            })

    })

    it('TC002 - Ler o Cliente criado via API', function () {

        const contact  = this.contact.create
        cy.log(contact.Name)
        cy.getContactId().then((ContactId) => {
            cy.log(ContactId)
          cy.getContacts('?$filter=Id+eq+'+ContactId)
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response.body.value[0].Name).to.eq(contact.Name)
                
            })
        })

    })

    it('TC003 - Atualizar o Cliente criado via API', function () {

        const contactBody  = this.contactPut.update
        cy.log(contactBody.Name)
        cy.getContactId().then((ContactId) => {
          cy.pathContacts(ContactId,contactBody)
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response.body.value[0].Name).to.eq(contactBody.Name)
                
            })
        })

    })

    it('TC004 - Deletar o Cliente criado via API', function () {

        cy.getContactId().then((ContactId) => {
          cy.deleteContacts(ContactId)
            .then(response => {
                expect(response.status).to.eq(200)
            })
        })

    })

})