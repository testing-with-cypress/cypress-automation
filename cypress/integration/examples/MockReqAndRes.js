describe('HTTP requests and responses', () => {
    before(() => {
        cy.visit('/angularAppdemo')
    })
    it('Mock request and response using INTERCEPT function', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }
            ]
        }).as('bookRetrievals')
        cy.get('button.btn.btn-primary').click()
        cy.wait('@bookRetrievals');
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})