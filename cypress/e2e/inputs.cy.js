describe('Input Fields', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/input-fields', 'Input Fields')

    })

    it('Deve preencher o campo texto', () => {

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