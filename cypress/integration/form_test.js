describe('form test that form is working properly', () => {
    it('test that form is working properly', () => {
        
        cy.visit("/")

        cy.get('button#submit')
        .should("be.disabled")

        cy.get('[for="name"] > input')
        .type("jorge")
        .should('have.value', "jorge")
        const email = 'jorge-jimenez@gmail.com'
        cy.get('[for="email"] > input')
        .type(email)
        .should("have.value", email)

        const motivation = "I want to help other in the community"
        cy.get('textarea#motivation')
        .type(motivation)
        .should("have.value", motivation)

        //make assertion that the button should be disabled

        cy.get('select#positions')
        .select('Yard Work')
        .should('have.value', 'Yard Work')

        cy.get('[data-cy="terms"]')
        .click()
        .should('have.checked', true)

        cy.get('button#submit')
        .should('not.be.disabled')

       
        

        
    
})
    it('error messages are displayed properly', () => {
        cy.get('[for="email"] > input' )
        .clear()

       
       cy.get('[for="email"] > input')
       .should('be.empty')
      
    })
})