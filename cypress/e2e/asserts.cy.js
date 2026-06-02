/// <reference types="cypress"/>

describe('Assets', () => {

it.only('Verificar se esta visível', () => {
            cy.visit('/')
                .get('.header-logo')
            cy.get('.fa-user')
              .click()

            cy.get('.account_form > h3')
              .should('be.visible') 
            
            cy.get('.account_form > h3')
              .should('contain', 'Login') 
              .should('have.text', 'Login')

              cy.get('.account_form > h3')
                .then((element) => {
                    console.log(element.text())
                    expect(element.text()).eq('Login')
                    expect(element).to.be.visible
                    expect(element).not.disabled
              
              })

            }) 
          })