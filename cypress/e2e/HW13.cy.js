




describe('Registration, LogIn and Create New List test cases at IMDb', () => {
    beforeEach(() => {

        // 1.	Launch browser
        // 2.	Navigate to url 'https://automationteststore.com'
        cy.visit('https://www.imdb.com/')
    })





    it('LogIn at IMDb', () => {

        cy.login()
        // 10.	Verify that instead of 'Sign In', your name is visible.
        cy.get('.ipc-btn__text > .imdb-header__account-toggle--logged-in').contains('Tika')


    })

    
})