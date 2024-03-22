describe('Realizar test dependiendo de los puntos de la pagina',()=>{
    it('verificar que social buttons lleven al usuario a la pagina correcta',()=>{
        cy.visit('https://academybugs.com/articles/')
        cy.get('#post-86 > .sq-post-wrapper > .entry-footer > .square-share-buttons > #square-share-a1').click()
        cy.url().should('include', 'facebook'); 
    })
})