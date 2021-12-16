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
    it('Static dropdowns', () => {
        cy.get('#dropdown-class-example').select('option1').should('have.value', 'option1');
    })
    it('Dynamic dropdowns', () => {
        cy.get('#autocomplete').as('dynamicDropbox');
        cy.get('@dynamicDropbox').type('ind');
        cy.get('#ui-id-1').find('.ui-menu-item').each((el) => {
            if(el.text() === 'India') {
                // cy.wrap(el).click();
                cy.wrap(el).click()
            }
        });
        cy.get('@dynamicDropbox').should('have.value', 'India');
    })
})