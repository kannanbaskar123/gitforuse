import 'cypress-xpath'

describe('Neet jee workshop', () => {
    it('application resgister', () => {
        cy.visit('https://chitti.app/workshops')
        cy.contains('h1', 'NEET JEE Workshop').click()
        cy.xpath("//button/div/span[text()=' Register Now for Free ']").click()    
        

        cy.xpath("//input[@placeholder='Enter Name']").type("Jacob Samro")
        cy.xpath("//input[@placeholder=' Enter Email']").type("dev@lmes.in")
        cy.get('.iti__selected-flag').click()
        cy.wait(2000)
        cy.xpath("//input[@id='mobile']").type("9884226399")
        
        
        cy.get('select').select('21')
        cy.contains('span', '10:00 AM').click()
        cy.contains('span', '10:00 AM').click()
        cy.contains('p', 'Register ').click()
       
    });
});