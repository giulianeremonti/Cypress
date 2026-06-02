// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types='cypress' />

Cypress.Commands.add('acessRegisterPage', () => {
     // acessou a aplicação 
    cy.visit('/')
        .get('.header-logo')
       
     //entrou no cadastro 
    cy.get('.fa-lock')
        .click()
    
    cy.get('#user')
        .should('be.visible')
        //ACESSANDO TELA DE CADASTRO 
})