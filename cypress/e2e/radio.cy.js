describe('Radio buttons', () =>{
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/radio', 'Radio Buttons')
    })

    it('Deve marcar o framework usado no curso cypress skills ', ()=> { 
        cy.contains('label', 'Cypress')
            .click()
    })
})