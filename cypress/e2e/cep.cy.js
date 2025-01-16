describe('CEP', () =>{
    beforeEach(() =>{
        cy.goHome()
        cy.doLogin()
        cy.goTo('/cep', 'CEP (API dos Correios)')
    })

    it('Deve cadastrar um endereço consumindo a API dos correios', () =>{
    //==> Exemplo para interceptar API e maniupar informações    
        //cy.intercept('GET', 'https://viacep.co.br/ws/04534011/json/',{
          //  statusCode: 200
          //  body: {
               // "logradouro": "Rua Joaquim Floriano",
              //  "cidade": "São Paulo",
               // "uf": "SP"
          //  }
      //  }).as('getCep')
        
        cy.get('input[name="cep"]').type('04534011')
        cy.contains('button', 'Cadastrar').click()

        //cy.wait('@getCep')

        cy.get('input[name="logradouro"]', { timeout: 7000 })
            .should('have.value', 'Rua Joaquim Floriano')

        cy.get('input[name="cidade"]', { timeout: 7000 })
            .should('have.value', 'São Paulo')

        cy.get('input[name="estado"]', { timeout: 7000 })
            .should('have.value', 'SP')
    })
})