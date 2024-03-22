describe('Realizar prueba de automation con mercadolibre',()=>{
    it('validar que el nombre de la categoria accedida y la cantidad de items se muestre',()=>{
        cy.visit('https://www.mercadolibre.com.co/')
        cy.get('.nav-menu-list > :nth-child(1)').trigger('mouseover');
        cy.contains('Electrodo').click()
        cy.url().should('include','electrodomesticos')
        cy.get(':nth-child(4) > .Grid > .hub__boxed-width > .content > .splinter-row > :nth-child(3)').click()
        cy.url().should('include','climati')
        cy.get(':nth-child(2) > .hub__boxed-width > .content > .splinter-row > :nth-child(2)').click()
        cy.url().should('include','aire')
        cy.get('.ui-search-sidebar').should('include','aire')

        

        
    })
})