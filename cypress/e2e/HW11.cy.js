// Test Case 12: Add Products in Cart

describe('automationexercies test cases', () => {
    beforeEach(() => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com')
    })

    it('Add Products in Cart', () => {
        // 3. Verify that home page is visible successfully
        cy.get('body').should('be.visible');

        // 4. Click 'Products' button
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();

        // 5. Hover over first product and click 'Add to cart'
        cy.get('.features_items > :nth-child(3)').trigger('mouseover').contains('Add to cart').click()

        // 6. Click 'Continue Shopping' button
        cy.get('.modal-footer > .btn').click()

        // 7. Hover over second product and click 'Add to cart'
        cy.get(':nth-child(4) > .product-image-wrapper').trigger('mouseover').contains('Add to cart').click()

        // 8. Click 'View Cart' button
        cy.get('.modal-footer > .btn').click()

        // 9. Verify both products are added to Cart
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()

        // 10. Verify their prices, quantity and total price (ეს ან ჯერ არ ვიცი, ან არ მახსოვს როგორ გავუკეთო ვერიფიკაცია(Verify))

    })

    
    // Test Case 17: Remove Products From Cart
    it('Remove Products From Cart', () => {

        //     3. Verify that home page is visible successfully
        cy.get('body').should('be.visible');

        //     4. Hover over third product and click 'Add to cart' (Add products to cart)
        cy.get('.features_items > :nth-child(5)').trigger('mouseover').contains('Add to cart').click()

        //     5. Click 'Cart' button
        cy.get('.modal-footer > .btn').click()

        //     6. Verify that cart page is displayed
        cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible').click()

        //     7. Click 'X' button corresponding to particular product
        cy.get('.cart_quantity_delete').click()

        //     8. Verify that product is removed from the cart
        cy.get('#empty_cart > .text-center').should('be.visible')


    })

})
