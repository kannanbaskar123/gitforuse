import 'cypress-xpath'

describe('Aeromodeling 1', () => {
    it('should register successfully', () => {
        cy.visit('https://chitti.app/workshops')
        cy.scrollTo(0, 900)
       
        // cy.contains('div',' Grade 5 to 8 ').should('exist').then(()=>{
        // cy.contains('h1','Aeromodelling Program').click()
        // })

        // Ensure both conditions within a single container
        // cy.get('commonContainerSelector') // Replace with the actual selector of the container
        // .should('contain', 'Grade 5 to 8')
        // .and('contain', 'Aeromodelling Program');
        cy.xpath("(//h1[contains(text(), 'Aeromodelling Program')])[2]").click()

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