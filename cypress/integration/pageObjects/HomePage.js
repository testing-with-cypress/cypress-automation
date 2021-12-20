class HomePage {
    static getNameInput() {
        return cy.get(':nth-child(1) > .form-control');
    }
    static getTwoWayDataBinding() {
        return cy.get('h4 input[name="name"]');
    }
    static getGender() {
        return cy.get('#exampleFormControlSelect1');
    }
    static getEntrepreneur() {
        return cy.get('#inlineRadio3');
    }
    static getShopTab() {
        return cy.get(':nth-child(2) > .nav-link');
    }
}

export default HomePage;