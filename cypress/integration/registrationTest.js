/// <reference types="Cypress" />

import RegistrationPage from '../Pages/registrationPage';
const helpers = require('../../utilities/helpers');
const faker = require('faker');


describe('Sign up Test suite', () => {
    let testData;
    const email = faker.internet.exampleEmail(faker.name.firstName(), faker.name.lastName());

    const registrationPage = new RegistrationPage();

    before(() => {
        cy.fixture('testData').then(data => {
            testData = data;
            return testData;
        })
    });

    it('check that user can register successfully using a unique email and valid password', () => {
        registrationPage.visit();
        registrationPage.addFirstName(testData.firstname);
        registrationPage.addLastName(testData.lastname);


        registrationPage.addMobileNumber(testData.mobile);
        registrationPage.addUniqueEmail(email);
        registrationPage.addPassword(testData.password);
        registrationPage.addConfirmPassword(testData.confirmPassword);

        cy.server();
        cy.route('POST', '/account/signup').as('signUp');

        registrationPage.clickSignUp();

        //function to intercept the sign up request and save both request and the response in two JSON files
        cy.wait('@signUp').then(() => {
            helpers.interceptRequest('@signUp');
            helpers.interceptResponse('@signUp');
        });
    });
})