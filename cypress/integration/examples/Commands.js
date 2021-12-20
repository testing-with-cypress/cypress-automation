import HomePage from "../../support/pagesSelectors/HomePage";

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
    it('Check cart sum functionality', () => {
        let total = 0;
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
        cy.get('.table tbody tr td:nth-child(4) strong').each((el) => {
            const price = +el.text().substring(3);
            total += price;
        }).then(() => {
            cy.get('h3 > strong').then((totalPriceEl) => expect(totalPriceEl.text().substring(3)).to.equal(`${total}`))
        });
    })
    it('Checkout functionality', () => {
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click();
        cy.get('#country').type('ind');
        cy.contains('India').click();
        cy.get('#checkbox2').check({force: true});
        cy.get('input[type="submit"]').click();
        cy.get('.alert').then((el) =>
            expect(el.text().includes('Success! Thank you! Your order will be delivered in next few weeks :-).'))
                .to.be.true)
    })
})