describe('Browser', () => {
    it('Open the correct link on click', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'rahulshettyacademy');
        cy.go('back');
    })
})
