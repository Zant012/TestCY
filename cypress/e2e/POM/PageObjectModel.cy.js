import FrerRangeHome from "../../pages/FreeRangeHome"
const home = new FrerRangeHome
describe('Home de www.freerangetesters.com',() =>{
    it('Prueba con pom',()=>{
        home.navigateToHome()
        home.ButtonElegirPlan().should('be.visible')


    })
})