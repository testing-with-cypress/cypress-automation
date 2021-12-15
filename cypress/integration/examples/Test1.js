describe('My First Test Suite', () => {
    it('Test search functionality', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);
        //create alias for products
        cy.get('.products').as('productsWrapper');
        //parent child selector
        cy.get('@productsWrapper').find('.product').should('have.length', 4);
        cy.get('@productsWrapper').find('.product').eq(1).contains('ADD TO CART').click();
        cy.get('@productsWrapper').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();

            if(textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click();
            }
        });
        cy.get('.brand').then((el) =>  cy.log(el.text()));
    })
})
