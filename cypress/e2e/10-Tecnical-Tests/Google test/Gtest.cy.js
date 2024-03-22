describe('Google test',()=>{
    it('navegar a google y tapear', () =>{
        cy.visit('www.google.com');
        cy.get('#APjFqb').type('Colombia');
        cy.contains('Buscar con Google').click();
        cy.contains('Ahora no').should('exist');
        cy.contains('Ahora no').click();
        cy.get('#search').should('exist');
        cy.get('#search .g', { timeout: 10000 }).each(($result) => {
            cy.wrap($result).contains('Colombia');
        })

    })
})