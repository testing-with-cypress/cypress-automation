describe('My First Test Suite', () => {
    it('Test search functionality', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);
        //aliases
        cy.get('.products').as('productsWrapper');
        cy.get('.brand').as('logo');

        //log logo text
        cy.get('@logo').then((el) =>  cy.log(el.text()));
        //check if the logo text is correct
        cy.get('@logo').should('have.text', 'GREENKART');
        //check products' length after searching
        cy.get('@productsWrapper').find('.product').should('have.length', 4);

        //add the second product to cart
        cy.get('@productsWrapper').find('.product').eq(1).contains('ADD TO CART').click();
        //loop through products and add cashews to cart
        cy.get('@productsWrapper').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();

            if(textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click();
            }
        });

        //check if the card has the correct number of added items
        cy.get('.cart-icon > img').click();
        cy.get('ul.cart-items:visible').find('li.cart-item').should('have.length', 2);

        //click on "PROCEED TO CHECKOUT"
        cy.get('.cart-preview >  .action-block > button').click();
        cy.contains('Place Order').click();
    })
})
