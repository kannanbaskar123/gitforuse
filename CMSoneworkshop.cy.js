import 'cypress-xpath'

describe('CMS one on one workshop', () => {
    it('should submit the application form successfully', () => {
        cy.visit('https://chitti.app/workshops')
        cy.contains('h1', 'CMS Electronics').click()
        // cy.xpath("//div[@class='text-sm font-bold leading-5 text-center text-white lg:text-base lg:leading-6']").click()
        cy.contains('div',' Book Now for ₹299 ').click()

        cy.get("input[placeholder='Enter the Name']").type("Jacob Samro")
        cy.get('.iti__selected-flag').click()
        cy.wait(2000)
        cy.get('#mobile-1').type("9884226399")
        cy.get("input[placeholder='Enter the Email']").type("dev@lmes.in")
        cy.get('select').select('5', { force: true })
        cy.get("input[placeholder='Enter your Address']").type("Raja Annamalaipuram")
        cy.get("input[placeholder='Enter your City']").type("chennai")
        cy.get("input[placeholder='Enter your Pincode']").type("600028")
        cy.wait(2000)
        cy.contains('p', 'Register ').click()
    });

});