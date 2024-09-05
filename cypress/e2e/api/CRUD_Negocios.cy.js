describe('Casos de Testes API Deals', { tags: ['regressao', 'integracao'] }, () => {

    beforeEach(function () {
        cy.fixture('deal/post').then(function (dealPost) {
            this.dealPost = dealPost
        })
        cy.fixture('deal/path').then(function (dealPath) {
            this.dealPath = dealPath
        })
    })

    it('TC001 - Cadastrar um novo Deal via API', function () {

        const dealPost  = this.dealPost.create
        
        cy.postDeals(dealPost)
            .then(response => {
                expect(response.status).to.eq(200)
                const id = response.body.value[0].Id;
                cy.setContactId(id);
            })

    })

    it('TC002 - Ler o Deal criado via API', function () {

        const dealPost  = this.dealPost.create
        cy.log(dealPost.Title)
        cy.getContactId().then((ContactId) => {
            cy.log(ContactId)
          cy.getDeals('?$filter=Id+eq+'+ContactId)
            .then(response => {
                expect(response.status).to.eq(200)
                //expect(response.body.value[0].Title).to.eq(dealPost.Title)
                
            })
        })

    })

    it('TC003 - Atualizar o Deal criado via API', function () {

        const dealBody  = this.dealPath.update
        cy.log(dealBody.Title)
        cy.getContactId().then((ContactId) => {
          cy.pathDeals(ContactId,dealBody)
            .then(response => {
                expect(response.status).to.eq(200)
                expect(response.body.value[0].Title).to.eq(dealBody.Title)
                
            })
        })

    })

    it('TC004 - Deletar o Deal criado via API', function () {

        cy.getContactId().then((ContactId) => {
          cy.deleteDeals(ContactId)
            .then(response => {
                expect(response.status).to.eq(200)
            })
        })

    })

})