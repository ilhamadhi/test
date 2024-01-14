describe('Login', () => {
    it('Login', () => {
        cy.viewport(1366, 768)
        cy.visit('https://dev-crm.kodegiri.com/login')
        cy.get('#email').type("qa1@kodegiri.com")
        cy.get('#password').type("Kode1giri")
        cy.get('button[type="submit"]').click()
        cy.wait(4000)
        cy.url().should('include', '/deals')

        cy.get('#navbar-actions > .inline-flex.items-center > .btn-primary').click()
        cy.get('#name-floating').type("tes2")
        cy.get('button[type="submit"]').click()
    })
})