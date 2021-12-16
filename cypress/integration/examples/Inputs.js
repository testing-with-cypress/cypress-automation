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
    it('Radio buttons', () => {
        cy.get('input[name="radioButton"]').check('radio2').should('be.checked');
    })
    it('Static dropdowns', () => {
        cy.get('#dropdown-class-example').select('option1').should('have.value', 'option1');
    })
    it('Dynamic dropdowns', () => {
        cy.get('#autocomplete').as('dynamicDropbox');
        cy.get('@dynamicDropbox').type('ind');
        cy.get('#ui-id-1').find('.ui-menu-item').each((el) => {
            if(el.text() === 'India') {
                cy.wrap(el).click()
            }
        });
        cy.get('@dynamicDropbox').should('have.value', 'India');
    })
    it('Visible and invisible elements', () => {
        cy.get('#displayed-text').as('visibleDiv');
        cy.get('@visibleDiv').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('@visibleDiv').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('@visibleDiv').should('be.visible');
    })
    it('Alert popup', () => {
        cy.get('#name').type('Adam');
        cy.get('#alertbtn').click();
    })
    it('Confirm popup', () => {
        cy.get('#name').type('Adam');
        cy.get('#confirmbtn').click();
    })
})