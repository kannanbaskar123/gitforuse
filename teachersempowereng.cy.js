import 'cypress-xpath'

describe('Teachers Empowerment English Application', () => {
    it('should register successfully', () => {
        cy.visit('https://chitti.app/workshops')
        cy.scrollTo(0, 900)
        //h1[text()='Teacher Empowerment Workshop']
        cy.xpath("(//h1[text()='Teacher Empowerment Workshop'])[2]").click()
        cy.contains('span',' Book Now ').click()

        cy.xpath("//input[@placeholder='Enter Name']").type("Jacob Samro")
        cy.xpath("//input[@placeholder=' Enter Email']").type("dev@lmes.in")
        cy.get('.iti__selected-flag').click()
        cy.wait(2000)
        cy.get('#mobile').type("9884226399")

        cy.get('select').select('21')
        cy.contains('span', '10:00 AM').click()
        cy.contains('p', 'Register ').click()
        




    });
   
});