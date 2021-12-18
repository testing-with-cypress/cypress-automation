describe('Hooks', () => {
    before(() => {
        cy.visit('/angularpractice/');
    });

    it('Form functionality', () => {
        cy.get(':nth-child(1) > .form-control').type('Adam');
        cy.get('#exampleFormControlSelect1').select('Female');
    })
})