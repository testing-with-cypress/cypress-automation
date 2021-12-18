describe('Hooks', () => {
    let data = {};

    before(() => {
        cy.visit('/angularpractice/');
        cy.fixture('example').then((d) => data = d)
    });

    it('Form functionality', () => {
        cy.get(':nth-child(1) > .form-control').type(data.name);
        cy.get('#exampleFormControlSelect1').select(data.gender);
    })
})