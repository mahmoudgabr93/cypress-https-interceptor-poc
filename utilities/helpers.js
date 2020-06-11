module.exports = {
    interceptRequest: alias => {
        cy.get(alias).its('request').then(req => {
            cy.writeFile('cypress/fixtures/signUpRequest.json', req)
        });
    },
    interceptResponse: alias => {
        cy.get(alias).its('response').then(response => {
            cy.writeFile('cypress/fixtures/signUpResponse.json', response)
        });
    }
}
