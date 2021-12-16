describe('Browser', () => {
    it('Open external browser tab in the current tab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.go('back');
    })
})