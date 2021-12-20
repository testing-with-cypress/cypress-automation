import HomePage from "../pageObjects/HomePage";

describe('Shop', () => {
    let selectors = {};

    before(() => {
        cy.visit('/angularpractice/');
        selectors = new HomePage();
        selectors.getShopTab().click();
    });
    it('Add multiple items to the cart', () => {
        cy.addToCart('Blackberry');
        cy.addToCart('Nokia Edge');
    })
})