import 'cypress-xpath'

describe('Aeromodeling 1', () => {
    it('should register successfully', () => {
        cy.visit('https://chitti.app/workshops')
        cy.scrollTo(0, 900)
    
        cy.xpath("(//h1[contains(text(), 'Aeromodelling Program')])[3]").click()

        cy.scrollTo(0, 600)
        cy.xpath("(//button[text()=' Register now '])[2]").click()

        cy.xpath("//input[@placeholder=' Enter Name']").type("Jacob Samro")
        cy.get("input[placeholder='Enter Email']").type("dev@lmes.in")
        cy.get('.iti__selected-flag').click()
        cy.wait(2000)
        cy.get('#mobile').type("9884226399")

        cy.get('select').first().select('5')
        cy.get('select').eq(1).select('Eastern Standard Time (EST)')

        cy.contains('span', '10:30 AM').click()
        cy.contains('p', 'Register').click()
    })  
    
    it('should register successfully', () => {
        cy.visit('https://chitti.app/workshops')
        cy.scrollTo(0, 900)
    
        cy.xpath("(//h1[contains(text(), 'Aeromodelling Program')])[4]").click()

        cy.scrollTo(0, 600)
        cy.xpath("(//button[text()=' Register now '])[2]").click()

        cy.xpath("//input[@placeholder=' Enter Name']").type("Jacob Samro")
        cy.get("input[placeholder='Enter Email']").type("dev@lmes.in")
        cy.get('.iti__selected-flag').click()
        cy.wait(2000)
        cy.get('#mobile').type("9884226399")

        cy.get('select').first().select('5')
        cy.get('select').eq(1).select('Eastern Standard Time (EST)')

        cy.contains('span', '10:30 AM').click()
        cy.contains('p', 'Register').click()
    })
});