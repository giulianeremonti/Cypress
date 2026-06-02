//<reference types='cypress'/>

describe('Cadastro de usuário', () => {

    it('Cadastro de usuario', () => {
        cy.visit('https://automationpratice.com.br/index.html')
        .get('#top_header')
            .contains('Cadastro') 
            .click()

        .get('#user')
            .type('Giuliane Inacio Remonti')

        .get('#email')
            .type('giulianeremonte@hotmail.com')

        .get('#password')
            .type('Giu123456')

        .get('#btnRegister')
            .click ()

    })
    

})

//it('Validar campo nome vazio', () => {


//})

//it('Validar campo e-mail vazio', () => {


//})

//it('Validar campo e-mail inválido', () => {


//})
//})