import HomePage from "../pagesSelectors/HomePage";

describe('Shop', () => {
    before(() => {
        cy.visit('/angularpractice/');
        HomePage.getShopTab().click();
    });
    it('Add multiple items to the cart', () => {
        cy.addToCart('Blackberry');
        cy.addToCart('Nokia Edge');
    })
})