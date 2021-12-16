describe('Hover effect', () => {
    it('Opens list on hover and click on (Top btn)', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');
    })
})