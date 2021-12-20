import HomePage from '../pageObjects/HomePage';

describe('Hooks', () => {
    let data = {},
        selectors = {};

    before(() => {
        cy.visit('/angularpractice/');
        cy.fixture('example').then((d) => data = d);
        selectors = new HomePage();
    });

    it('Form functionality', () => {
        selectors.getNameInput().type(data.name);
        selectors.getGender().select(data.gender);
    })
    it('Two way binding is working', () => {
        selectors.getTwoWayDataBinding().should('have.value', data.name);
    })
    it('Validate input min length attr', () => {
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2');
    })
    it('Disabled radio button', () => {
        selectors.getEntrepreneur().should('be.disabled');
    })
})