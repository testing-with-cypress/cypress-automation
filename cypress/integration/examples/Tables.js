describe('Tables test', () => {
    it('Python course has correct price', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#product').as('productsTable');
        cy.get('@productsTable').find('tr td:nth-of-type(2)').each((el, i) => {
            const courseTitle = el.text();

            if (courseTitle.includes('Python')) {
                cy.get('@productsTable').find('tr td:nth-of-type(2)').eq(i).next().then((priceCol) => {
                    const price = priceCol.text();
                    expect(price).to.equal('25');
                })
            }
        });
    })
})