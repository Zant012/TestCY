describe('As a customer when I search for alexa. I want to see if the third option on the second page is available for purchase and can be added to the cart',()=>{
    it('Item can be added to the cart',()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type('Alexa{enter}')
        cy.xpath("//a[@aria-label='Go to page 2']").click()
        cy.get('[data-index="4"] > .sg-col-inner').should('be.visible')
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[4]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/a[1]/div[1]/img[1]").click()
        cy.get('#add-to-cart-button').should('be.enabled')
    })
})
