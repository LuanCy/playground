describe('Data Picker', () =>{
    beforeEach(() => {
        cy.goHome()

        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/date-picker', 'Date Picker')

    })

    it('Deve adicionar data de aniversário', () =>{
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Agosto')

        cy.get('input[aria-label="Year"]')
            .type('1995')

        cy.get('span[aria-label="Agosto 22, 1995"]')
            .click()
    })
})