beforeEach(function() {
    cy.fixture('example').then((d) => this.data = d);
})