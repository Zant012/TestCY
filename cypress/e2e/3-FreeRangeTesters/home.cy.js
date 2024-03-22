

describe('Home de www.freerangetesters.com',() =>{
    beforeEach (( )=>{
        cy.visit('www.freerangetesters.com')
    })

    it('should have a title', () =>{
        cy.title().should('include', 'Free Range Testers');
    })

    it('Deben haber 6 botones con el texto ver cursos',()=>{
        cy.xpath('//*[@id="page_header"]/div/section/div/header/nav/ul/li[1]/a').click();
        cy.get(':nth-child(n) > .sc-sax5mz-0 > .sc-sax5mz-1 > .sc-1r94qgf-0 > .sc-1r94qgf-1 > .sc-6mk5l4-1').should('have.length',6);
    })

    it ('Debe haber un link llamado blog en la barra de navegacion',()=>{
        cy.get('[data-testid="header-container"] > .sc-lu2zd-0 > .sc-1krisvw-8 > :nth-child(3) > .sc-1krisvw-6').should('have.text','Blog');
    })

    it ('Debe existir un boton llamado elegir plan',()=>{
        cy.get('.sc-su7fuq-0 > .sc-1r94qgf-0 > .sc-1r94qgf-1 > .sc-6mk5l4-1').should('be.visible');

    })

    

})

