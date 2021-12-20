import HomePage from "../pagesSelectors/HomePage";

describe('Shop', () => {
    before(() => {
        Cypress.config('defaultCommandTimeout', 8000);
        cy.visit('/angularpractice/');
        HomePage.getShopTab().click();
    });
    it('Add multiple items to the cart', () => {
        cy.addToCart('Blackberry');
        cy.addToCart('Nokia Edge');
    })
    it('Checkout functionality', () => {
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click();
        cy.get('#country').type('ind');
        cy.contains('India').click();
        cy.get('#checkbox2').check({force: true});
        cy.get('input[type="submit"]').click();
        // cy.get('.alert').should('include', 'Success! Thank you! Your order will be delivered in next few weeks :-).');
        cy.get('.alert').then((el) =>
            expect(el.text().includes('Success! Thank you! Your order will be delivered in next few weeks :-).'))
                .to.be.true)
    })
})