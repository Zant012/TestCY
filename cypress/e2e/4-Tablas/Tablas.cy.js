describe('Ejercicios con tablas dinamicas y estaticas',()=>{
    // Navegando a la web con tablita
    it('Validamos texto en tabla estatica',()=>{
        cy.visit('https://thefreerangetester.github.io/sandbox-automation-testing/');
        // Se ubica la primera columna
        cy.get(':nth-child(8) > .col > .table > tbody > tr > td:nth-child(1) ').each(($elm,index,$list)=>{
            //Agarramos el texto de cada elemento en la columna 1
            const t = $elm.text();
            // Se le pone que estamos buscando que incluya el texto 
            if(t.includes('1')){
                //De aca vamos al elemento que le sigue en el dom 
                cy.get(':nth-child(8) > .col > .table > tbody > tr > td:nth-child(1) ').eq(index).next().then(function(p){
                    //Y tomamos el texto del elemento proximo
                    const r = p.text()
                    //Se hace una validacion de texto sobre el elemento
                    expect(r).to.contains('Messi');

                })
            }
        })
    })
    it('Validamos texto en tabla dinamica',()=>{
        cy.visit('https://thefreerangetester.github.io/sandbox-automation-testing/')
        cy.contains('td','W1')
        .next()
        
    })
})