describe('Negative and Positive Test Cases for Registration', () => {
    beforeEach(() => {

        // 1.	Launch browser
        // 2.	Navigate to url 'https://automationteststore.com'
        cy.visit('https://automationteststore.com')
    })


    // it('Negative Test Case', () => {

    //     // 3.	Verify that home page is visible successfully.
    //     cy.get("body").should('be.visible')

    //     // 4.	Click on ‘Login or register’ button.
    //     cy.get('#customer_menu_top > li > a').click()

    //     // 5.	Verify ‘I AM A NEW CUSTOMER.’ is visible.
    //     cy.get('.newcustomer > .heading2').contains('I am a new customer.')

    //     // 6.	Click ‘continue’ button.
    //     cy.get('#accountFrm > fieldset > .btn').click()

    //     // 7.	Enter First Name and Last Name.
    //     cy.get('#AccountFrm_firstname').type('Jane')
    //     cy.get('#AccountFrm_lastname').type('Smith')

    //     // 8.	Select checkbox ‘I have read and agree to the Privacy Policy’.
    //     cy.get('#AccountFrm_agree').check()

    //     // 9.	Click ‘continue’ button.
    //     cy.get('.col-md-2 > .btn').click()

    //     // 10.	Verify that on the register page, under ‘CREATE ACCOUNT’ is visible error massage.
    //     cy.get('.heading1').should('be.visible')
    //     cy.get('.alert').should('be.visible')

    // })



    it('Positive Test Case', () => {

        // 3.	Verify that home page is visible successfully.
        cy.get("body").should('be.visible')

        // 4.	Click on ‘Login or register’ button.
        cy.get('#customer_menu_top > li > a').click()

        // 5.	Verify ‘I AM A NEW CUSTOMER.’ is visible.
        cy.get('.newcustomer > .heading2').contains('I am a new customer.')

        // 6.	Click ‘continue’ button.
        cy.get('#accountFrm > fieldset > .btn').click()

        /* 7.	Verify that the input fields 'Your Personal Details', 'Your Address', 'Login Details'; 
 checkboxes for 'Newsletter' and 'Privacy policy', and the 'continue' button are visible. */

        cy.get('#AccountFrm > :nth-child(4)').should('be.visible')
        cy.get('#AccountFrm > :nth-child(6)').should('be.visible')
        cy.get('#AccountFrm > :nth-child(8)').should('be.visible')
        cy.get('#AccountFrm > :nth-child(10)').should('be.visible')
        //cy.get('#AccountFrm > :nth-child(10)')
        //cy.get('.col-md-6 > a > b')      (checkboxes for 'Newsletter' and 'Privacy policy' ეს ორი ვერ მოვიფიქრე როგორ დავწერო)

        cy.get('.col-md-2 > .btn').should('be.visible')


        /* 8.	a) Enter values for 'First Name', 'Last Name', 
    and 'Email' in the 'Your Personal Details' input fields.     */


    //  cy.get('#AccountFrm_firstname.form-control').type('Rue')   -ესეც ვცადე სახელი id და class_ით და ამითაც ჩაწერა
        cy.get('#AccountFrm_firstname').type('Jane')
        cy.get('#AccountFrm_lastname').type('Smith')


        // email = "onetwo3@gmail.com"
        let random = Math.random()
        let email = "onetwo3" + random + "@gmail.com"

        cy.get('#AccountFrm_email').type(email)


        /*  	b) Enter values for 'Address 1', 'City', 'Region / State', 'ZIP Code', 
    and 'Country' in the 'Your Address' input fields.    */
        cy.get('#AccountFrm_address_1').type('123 Smith St')
        cy.get('#AccountFrm_city').type('Smiths Town')



        cy.get('#AccountFrm_zone_id.form-control').select('Angus')


        cy.get('#AccountFrm_postcode').type(12345)
        cy.get('#AccountFrm_country_id').select('United Kingdom')
        //cy.get('fieldset > :nth-child(7)').find('United Stated').click()

        /* 	   c) Enter values for 'Login name', 'Password', 
    and 'Password Confirm' in the 'Login Details' input fields.    */



        // Login name  = "JaneSMTH"
        let name = "Jane" + random + "SMTH"
        let password = "JaneSmith12#"
        cy.get('#AccountFrm_loginname').type(name)
        cy.get('#AccountFrm_password').type(password)
        cy.get('#AccountFrm_confirm').type(password)


        // 9.	Select the checkbox 'I have read and agree to the Privacy Policy'.
        cy.get('#AccountFrm_agree').check()

        // 10.	Click ‘continue’ button
        cy.get('.col-md-2 > .btn').click()

        /* 11.	After registering successfully, verify that the text 'MY ACCOUNT' is visible,
    and where 'Login or register' used to be, the text 'Welcome back (and my name)' is visible.       */

        cy.get('h2.heading2').contains('My Account').should('be.visible')

        cy.get('div.menu_text').contains('Welcome back Jane').should('be.visible')
        cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').contains('Welcome back Jane').should('be.visible')





    })


})