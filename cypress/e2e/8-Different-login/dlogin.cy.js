describe('logear-basic auth y auth con forms',function(){
    it('sin logear',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text','Congratulations')
    })

    it('logueando usando auth de cypress',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            auth:{
                username:'admin',
                password:'admin'
            }
        })
        cy.get('p').should('include.text','Congratulations')
    })
    it('Hacer login mediante request en un post',()=>{
        cy.visit('https://the-internet.herokuapp.com')
        cy.api({
            method:'POST',
            url:'/authenticate',
            form:true,
            body:{
                username:'tomsmith',
                password:'SuperSecretPassword!'
            } 
        })
        cy.getCookie('rack.session').should('exist')
        cy.visit('https://the-internet.herokuapp.com/secure')
        cy.get('.subheader').should('include.text','Welcome to the Secure Area')
    })
})