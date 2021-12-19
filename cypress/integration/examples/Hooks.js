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
    it('Two way binding is working', () => {
        cy.get('h4 input[name="name"]').should('have.value', data.name);
    })
    it('Validate input min length attr', () => {
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2');
    })
    it('Disabled radio button', () => {
        cy.get('#inlineRadio3').should('be.disabled');
    })
})