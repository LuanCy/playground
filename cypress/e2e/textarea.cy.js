describe('Textarea', () => {
    beforeEach(() => {
        cy.goHome()
    })

    it('Deve preencher o campo de área de texto', () => {
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/textarea', 'Textarea')

        cy.get('textarea[name="message"]')
            .type('Texto teste para usuário.')
    })
})