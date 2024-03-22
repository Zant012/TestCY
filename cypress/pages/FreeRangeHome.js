class FrerRangeHome{
    navigateToHome(){
        cy.visit('www.freerangetesters.com')
    }

    ButtonElegirPlan(){
       return cy.contains('Elegir Plan')   
    }
    
}
export default FrerRangeHome