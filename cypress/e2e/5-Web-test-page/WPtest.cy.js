describe('Conjunto de scenarios de prueba para probar pagina',()=>{
    beforeEach (( )=>{
        cy.visit('https://automationexercise.com/')
    })

    it('Register user',()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.css', 'color', 'rgb(255, 165, 0)');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('.login-form > h2').should('be.visible');
        cy.get('.signup-form > h2').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Santiago');
        cy.get('[data-qa="signup-email"]').type('santiagollanos94@gmail.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.get(':nth-child(1) > b').should('be.visible');
        cy.get('#id_gender1').click();
        cy.get('[data-qa="name"]').type('Santiago');
        cy.get('[data-qa="password"]').type('Testing123');
        cy.get('[data-qa="days"]').select('12');
        cy.get('[data-qa="months"]').select('July');
        cy.get('[data-qa="years"]').select('1994');
        cy.get('#newsletter').click();
        cy.get(':nth-child(8) > label').click();
        cy.get('[data-qa="first_name"]').type('Santiago');
        cy.get('[data-qa="last_name"]').type('Llanos');
        cy.get('[data-qa="company"]').type('Buscando');
        cy.get('[data-qa="address"]').type('Calle 3b tv 3b 105');
        cy.get('[data-qa="address2"]').type('Conjunto plazuela 2 T7/601');
        cy.get('[data-qa="country"]').select('Australia');
        cy.get('[data-qa="state"]').type('Atlantico');
        cy.get('[data-qa="city"]').type('Barranquilla');
        cy.get('[data-qa="zipcode"]').type('00000')
        cy.get('[data-qa="mobile_number"]').type('3015485780');
        cy.get('[data-qa="create-account"]').click();
        cy.get('b').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.get(':nth-child(10) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        cy.get('b').should('be.visible');   
    })
    it(' Login User with correct email and password',()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.css', 'color', 'rgb(255, 165, 0)');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('.login-form > h2').should('be.visible');
        cy.get('.signup-form > h2').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Santiago');
        cy.get('[data-qa="signup-email"]').type('santiagollanos94@gmail.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.get(':nth-child(1) > b').should('be.visible');
        cy.get('#id_gender1').click();
        cy.get('[data-qa="name"]').type('Santiago');
        cy.get('[data-qa="password"]').type('Testing123');
        cy.get('[data-qa="days"]').select('12');
        cy.get('[data-qa="months"]').select('July');
        cy.get('[data-qa="years"]').select('1994');
        cy.get('#newsletter').click();
        cy.get(':nth-child(8) > label').click();
        cy.get('[data-qa="first_name"]').type('Santiago');
        cy.get('[data-qa="last_name"]').type('Llanos');
        cy.get('[data-qa="company"]').type('Buscando');
        cy.get('[data-qa="address"]').type('Calle 3b tv 3b 105');
        cy.get('[data-qa="address2"]').type('Conjunto plazuela 2 T7/601');
        cy.get('[data-qa="country"]').select('Australia');
        cy.get('[data-qa="state"]').type('Atlantico');
        cy.get('[data-qa="city"]').type('Barranquilla');
        cy.get('[data-qa="zipcode"]').type('00000')
        cy.get('[data-qa="mobile_number"]').type('3015485780');
        cy.get('[data-qa="create-account"]').click();
        cy.get('b').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.get(':nth-child(10) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('.login-form > h2').should('be.visible');
        cy.get('[data-qa="login-email"]').type('santiagollanos94@gmail.com');
        cy.get('[data-qa="login-password"]').type('Testing123');
        cy.get('[data-qa="login-button"]').click();
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        cy.get('b').should('be.visible');
    })
    it('Login User with incorrect email and password',()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.css', 'color', 'rgb(255, 165, 0)');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type('santiagollanos94@gmail.com');
        cy.get('[data-qa="login-password"]').type('Testing123');
        cy.get('[data-qa="login-button"]').click();
        cy.get('.login-form > form > p').should('be.visible');
    })
    it('Register User with existing email',()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.css', 'color', 'rgb(255, 165, 0)');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="signup-name"]').type('Santiago2');
        cy.get('[data-qa="signup-email"]').type('santiagollanos94+1@gmail.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.get('.signup-form > form > p').should('be.visible');
    })
    it('Contact Us Form',()=>{
        const textfile= 'PREGUNTAS-ENTREVISTA.txt';
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.css', 'color', 'rgb(255, 165, 0)');
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
        cy.get('div.contact-form > .title').should('be.visible');
        cy.get('[data-qa="name"]').type('Santiago Llanos');
        cy.get('[data-qa="email"]').type('santiagollanos94@gmail.com');
        cy.get('[data-qa="subject"]').type('questions');
        cy.get('[data-qa="message"]').type('hope everything comes together for tomorrow');
        cy.get(':nth-child(6) > .form-control').attachFile(textfile);
        cy.get('[data-qa="submit-button"]').click();
        cy.get('.status').should('be.visible');
        cy.get('#form-section > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.css', 'color', 'rgb(255, 165, 0)');
    })
    it('Verify All Products and product detail page',()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.css', 'color', 'rgb(255, 165, 0)');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.title').should('be.visible');
        cy.get('.features_items').should('be.visible');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.url().should('include', '/product_details/1');
        cy.get('.product-information > h2').should('be.visible');
        cy.get('.product-information > :nth-child(3)').should('be.visible');
        cy.get(':nth-child(5) > span').should('be.visible');
        cy.get('.product-information > :nth-child(6)').should('be.visible');
        cy.get('.product-information > :nth-child(6)').should('include.text', 'In Stock');
        cy.get('.product-information > :nth-child(7)').should('be.visible');
        cy.get('.product-information > :nth-child(7)').should('be.visible');
    })
    it('Search Product',()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.css', 'color', 'rgb(255, 165, 0)');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.title').should('be.visible');
        cy.get('.features_items').should('be.visible');
        cy.get('#search_product').type('blue');
        cy.get('#submit_search').click();
        cy.get('.title').should('be.visible');
        cy.get('.features_items > :nth-child(n)').should('be.visible');
        cy.get('.features_items > :nth-child(n)').should('include.text', 'Blue');
    })
    it ('Verify Subscription in home page',()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.css', 'color', 'rgb(255, 165, 0)');
        cy.scrollTo('bottom');
        cy.get('.single-widget > h2').should('be.visible');
        cy.get('#susbscribe_email').type('santiagollanos94+2@gmail.com');
        cy.get('#subscribe').click();
        cy.get('.alert-success').should('be.visible')
    })
    it ('Verify Subscription in Cart page',()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.css', 'color', 'rgb(255, 165, 0)');
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.single-widget > h2').should('be.visible');
        cy.get('#susbscribe_email').type('santiagollanos94+2@gmail.com');
        cy.get('#subscribe').click();
        cy.get('.alert-success').should('be.visible')
    })
    it(' Add Products in Cart',()=>{
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('have.css', 'color', 'rgb(255, 165, 0)');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3) > i:nth-child(1)').click({force:true});
        
    })

})
