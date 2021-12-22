describe('HTTP requests and responses', () => {
    beforeEach(() => {
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
        cy.wait('@bookRetrievals').should(({request, response}) => {
            cy.get('tbody tr').should('have.length', response.body.length);
        });
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
    it('Intercepting HTTP request to test security', () => {
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
            //modify the url of the request
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=adam';
            //send the request
            req.continue((res) => {
                //test security
                // expect(res.statusCode).to.equal(403);
            });
        }).as('dummyUrl');
        cy.get('button.btn.btn-primary').click();
        cy.wait('@dummyUrl');
    })
})