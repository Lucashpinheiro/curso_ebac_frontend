/// <reference types='cypress'/>

describe('Testar as funcionalidades',() => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve incluir um contato', () => {
        cy.get('[type="text"]').type('Lucas Pinheiro')
        cy.get('[type="email"]').type('primeiro.l@bol.com.br')
        cy.get('[type="tel"]').type('(16) 997777-8888')
        cy.get('.adicionar').click()
    })
    it('Deve editar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Manoel Troca')
        cy.get('.alterar').click()
    })
    it('Deve remover um contato', () => {
        cy.get('.delete').last().click()
    })
})