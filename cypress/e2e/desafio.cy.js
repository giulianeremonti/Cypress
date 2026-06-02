/// <reference types='cypress' />
import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio_valid_data.json')

describe('Cadastro de usuário', () => {

beforeEach('Acessando página de cadastro', () => {

    //ACESSANDO TELA DE CADASTRO 
    cy.acessRegisterPage() 
})

it('Validar campo nome vazio', () => {

    cy.saveRegister()
    cy.checkMessage('O campo nome deve ser prenchido')
})


it('Validar campo e-mail vazio', () => {

    // VERIFICA SE ESTA NA PÁGINA DE CADASTRO
    cy.fillName(user_data.name)
    // clicou no registrar 
    cy.saveRegister()

   cy.checkMessage('O campo e-mail deve ser prenchido corretamente')

})

it('Validar campo e-mail inválido', () => {

    cy.fillName(user_data.name)
    cy.fillEmail('emailinvalido') 
    cy.saveRegister()

    cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
    
})

it('Validar campo senha vazio', () => {

        //cy.get('#user')
        //.type(user_data.name)
    cy.fillName(user_data.name)

        //cy.get('#email')
        //.should('be.visible')
        //.type(user_data.email)
    cy.fillEmail(user_data.email) 

    cy.saveRegister()

        //cy.get('.errorLabel')
        //.should('have.text','O campo senha deve ter pelo menos 6 dígitos')
    cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
})

it('Validar senha invalida', () => {

    cy.fillName(user_data.name)
    cy.fillEmail(user_data.email) 
    cy.fillPassword('12345')
    cy.saveRegister()

    cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')

})

it('Cadastro realizado com sucesso', () => {

    const name = faker.person.fullName()
    
    cy.fillName(user_data.name)
    cy.fillEmail(user_data.email) 
    cy.fillPassword(user_data.password)
    cy.saveRegister()
   
        //cy.get('#swal2-title')
        //.should('have.text','Cadastro realizado!')
    cy.checkRegisterSuccess(name)
})

})