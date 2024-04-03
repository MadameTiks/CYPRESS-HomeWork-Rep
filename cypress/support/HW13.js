
Cypress.Commands.add('login', (email, passward) => {

    cy.get('.nav__userMenu > .ipc-btn--single-padding > .ipc-btn__text').click()

    cy.get('#signin-options').contains('Sign in with IMDb').click()

    cy.get('#ap_email').type('tikabulbulashvili@gmail.com')
    cy.get('#ap_password').type('Funny-G@mes123')

    cy.get('#signInSubmit').click()

})


