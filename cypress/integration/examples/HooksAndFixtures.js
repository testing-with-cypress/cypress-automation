import HomePage from '../pageObjects/HomePage';

describe('Hooks', () => {
    let data = {};

    before(() => {
        cy.visit('/angularpractice/');
        cy.fixture('example').then((d) => data = d);
    });

    it('Form functionality', () => {
        HomePage.getNameInput().type(data.name);
        HomePage.getGender().select(data.gender);
    })
    it('Two way binding is working', () => {
        HomePage.getTwoWayDataBinding().should('have.value', data.name);
    })
    it('Validate input min length attr', () => {
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2');
    })
    it('Disabled radio button', () => {
        HomePage.getEntrepreneur().should('be.disabled');
    })
})