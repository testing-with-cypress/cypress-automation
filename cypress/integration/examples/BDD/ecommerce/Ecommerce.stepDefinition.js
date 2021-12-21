import HomePage from "../../../../support/pagesSelectors/HomePage";

Given('I open Ecommerce Page', () => {
    cy.visit('/angularpractice/');
})

When('I add items to Cart', function () {
    HomePage.getShopTab().click();
    cy.addToCart('Blackberry');
    cy.addToCart('Nokia Edge');
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
})

And('Validate the total price', () => {
    let total = 0;
    cy.get('.table tbody tr td:nth-child(4) strong').each((el) => {
        const price = +el.text().substring(3);
        total += price;
    }).then(() => {
        cy.get('h3 > strong').then((totalPriceEl) => expect(totalPriceEl.text().substring(3)).to.equal(`${total}`))
    });
})

Then('select the country submit and verify thank you message', () => {
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click();
    cy.get('#country').type('ind');
    cy.contains('India').click();
    cy.get('#checkbox2').check({force: true});
    cy.get('input[type="submit"]').click();
    cy.get('.alert').then((el) =>
        expect(el.text().includes('Success! Thank you! Your order will be delivered in next few weeks :-).'))
            .to.be.true)
})