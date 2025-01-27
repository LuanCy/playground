describe('Login', () => {

  beforeEach(()=> {
    cy.goHome()
  })

  it('Deve logar com sucesso', ()=> {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
  })

  it('Não deve logar com senha inválida', ()=> {
    cy.login('papito@cyskills.com.br', 'abc123456')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com email não cadastrado', ()=> {
    cy.login('404@cyskills.com.br', 'showtime')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com email incorreto', ()=> {
    cy.login('www.cyskills.com.br', 'showtime')
    cy.noticeHave('O formata do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })

  it('Não deve logar sem email', ()=> {
    cy.login('', 'showtime')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })

  it('Não deve logar sem senha', ()=> {
    cy.login('papito@cyskills.com.br', '')
    cy.noticeHave('Por favor, digite sua senha para continuar.')
  })

  it('Não deve logar sem email e sem senha', ()=> {
    cy.login('', '')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })

})