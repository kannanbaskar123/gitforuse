import 'cypress-xpath'

describe('CMS english 1', () => {
    it('should register successfully', () => {
        cy.visit('https://chitti.app/workshops')
        cy.scrollTo(0, 900)
    
        cy.xpath("(//h1[text()='CMS Electronics 1 on 1 - Malayalam'])[1]").click()

        cy.scrollTo(0, 600)
        cy.xpath("(//button/div[text()=' Book Now for ₹299 '])[1]").click()

        cy.get("input[placeholder='Enter the Name']").type("Jacob Samro")
        cy.get("input[placeholder='Enter the Email']").type("dev@lmes.in")
        cy.get('.iti__selected-flag').click()
        cy.wait(2000)
        cy.get('#mobile-1').type("9884226399")
        cy.get("input[placeholder='Enter your Address']").type("Raja Annamalaipuram")
        cy.get("input[placeholder='Enter your City']").type("chennai")
        cy.get("input[placeholder='Enter your Pincode']").type("600003")

        cy.get('select').first().select('5')
        cy.contains('p', 'Register ').click()
    })  

    it('should register successfully', () => {
        cy.visit('https://chitti.app/workshops')
        cy.scrollTo(0, 900)
    
        cy.xpath("(//h1[text()='CMS Electronics 1 on 1 - Malayalam'])[2]").click()

        cy.scrollTo(0, 600)
        cy.xpath("(//button/div[text()=' Book Now for ₹299 '])[1]").click()

        cy.get("input[placeholder='Enter the Name']").type("Jacob Samro")
        cy.get("input[placeholder='Enter the Email']").type("dev@lmes.in")
        cy.get('.iti__selected-flag').click()
        cy.wait(2000)
        cy.get('#mobile-1').type("9884226399")
        cy.get("input[placeholder='Enter your Address']").type("Raja Annamalaipuram")
        cy.get("input[placeholder='Enter your City']").type("chennai")
        cy.get("input[placeholder='Enter your Pincode']").type("600003")

        cy.get('select').first().select('5')
        cy.contains('p', 'Register ').click()
    })  

    })
