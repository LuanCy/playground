describe('Iframe', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')
        })

        it('Deve preencher o nome em uma página que tem iframe', () =>{
            cy.get('[data-cy="iframe-inputs"]')
            .then(($iframe)=>{
               const $body = $iframe.contents().find('body')

               cy.wrao($body)
               .find('#fullname')
               .type('teste')
            })
        })
    })