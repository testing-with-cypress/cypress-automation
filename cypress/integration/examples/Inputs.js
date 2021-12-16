describe('Test inputs functionality', () => {
    it('First input', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked');
    })
})