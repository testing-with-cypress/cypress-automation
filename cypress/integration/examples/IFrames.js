import 'cypress-iframe';

describe('iFrames', () => {
    it('test iframe', () => {
        cy.visit('/AutomationPractice/');
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('a[href*="mentorship"]').eq(0).click();
        cy.iframe().find('.pricing-container').should('have.length', 2);
    })
})