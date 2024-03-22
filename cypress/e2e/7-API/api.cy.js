describe('pruebas api con cypress',()=>{
    /*it('el endpoint "post"responde con 200',()=>{
        cy.api({
            method: 'GET',
            url:'https://reqres.in/api/users/2',
        }).then((respuesta)=>{
        });
    });*/
    it('El post request funciona correctamente para el endpoint',()=>{
        cy.api('POST','https://jsonplaceholder.typicode.com/posts',{
            userId:1,
            id: 101,
            title: 'Pelicula colombiana',
            body: 'Una pelicula agregada'
        }).then((respuesta)=>{
            expect(respuesta.body).to.have.property('title','Pelicula colomb8iana')
        })
    })
    it('El put request funciona',()=>{
        cy.api('PUT','https://jsonplaceholder.typicode.com/posts/2',{
            title: 'el paseo 2',
            body: 'Una pelicula agregada'
        }).then((respuesta)=>{
            expect(respuesta.body).to.have.property('title','el paseo 2')
        })
    })
});