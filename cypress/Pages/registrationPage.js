/// <reference types="Cypress" />

const { registrationPage } = require("../fixtures/elementsLocators");

class RegistrationPage {
    visit() {
        cy.visit(registrationPage.url);
    }

    addFirstName(firstName) {
        const field = cy.get(registrationPage.firstNameTextFieldSelector)
        field.clear({force: true});
        field.type(firstName, { force: true });
        return this;
    }

    addLastName(lastName) {
        const field = cy.get(registrationPage.lastNameTextFieldSelector)
        field.clear({force: true});
        field.type(lastName, { force: true });
        return this;
    }

    addMobileNumber(mobileNo) {
        const field = cy.get(registrationPage.mobileNumberTextFieldSelector);
        field.clear({force: true});
        field.type(mobileNo, { force: true });
        return this;
    }

    addUniqueEmail(email) {
        const field = cy.get(registrationPage.emailTextFieldSelector);
        field.clear({force: true});
        field.type(email, { force: true });
        return this;
    }

    addPassword(password) {
        const field = cy.get(registrationPage.passwordTextFieldSelector)
        field.clear({force: true});
        field.type(password, { force: true });
        return this;
    }

    addConfirmPassword(password) {
        const field = cy.get(registrationPage.confirmPasswordTextFieldSelector)
        field.clear({force: true});
        field.type(password, { force: true });
        return this;
    }

    clickSignUp() {
        const field = cy.get(registrationPage.signUpButtonSelector)
        field.click();
        return this;
    }
}

export default RegistrationPage;
