describe('Test inputs functionality', () => {
    it('Checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').as('checkbox');
        cy.get('@checkbox').check().should('be.checked').and('have.value', 'option1');
        cy.get('@checkbox').uncheck().should('not.be.checked');
    })
    it('List of checkboxes', () => {
        cy.get('input[type="checkbox"]').check(['option1', 'option3']);
    })
})