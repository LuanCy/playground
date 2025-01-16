describe('Drag and Drop', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/tasks', 'Task Board')
    })

    it('Deve finaliazr uma tarefa', () => {
        const task = "Definir resquisitos do projeto"
        const datatransfer = DataTransfer()

        cy.contains('div[draggable=true]', task)
            .trigger('dragstart', {
                datatransfer
            })

        cy.contains('h4', 'Done')
            .parent()
            .trigger('drop', {
                datatransfer
            })

            cy.contains('h4', 'Done')
            .parent()
            cy.contains('div[draggable=true]', task)
            .should('be.visible')
    })
})