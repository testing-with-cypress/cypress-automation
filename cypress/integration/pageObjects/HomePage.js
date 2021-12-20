class HomePage {
    getNameInput() {
        return cy.get(':nth-child(1) > .form-control');
    }
    getTwoWayDataBinding() {
        return cy.get('h4 input[name="name"]');
    }
    getGender() {
        return cy.get('#exampleFormControlSelect1');
    }
    getEntrepreneur() {
        return cy.get('#inlineRadio3');
    }
    getShopTab() {
        return cy.get(':nth-child(2) > .nav-link');
    }
}

export default HomePage;