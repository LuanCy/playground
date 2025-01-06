describe('Input Fields', () => {

    beforeEach(() => {
        cy.goHome()

    })

    it('Deve preencher o campo texto', () => {
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/input-fields', 'Input Fields')

        cy.get('input[name="fullname"]')
            .type('Luan Oliveira')

        cy.get('input[name="email"]')
            .type('luan.oli@gmail.com')

        cy.get('input[name="number"]')
            .type('123456')

        cy.get('input[name="date"]')
            .type('2022-01-01')
    })
})