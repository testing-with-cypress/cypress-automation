describe('Shop', () => {
    before(() => {
        cy.visit('/angularpractice/');
        cy.get(':nth-child(2) > .nav-link').click();
    });
    it('Add multiple items to the cart', () => {
        cy.addToCart('Blackberry');
    })
})