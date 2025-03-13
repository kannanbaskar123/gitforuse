import xpath from 'cypress-xpath'

describe('Application Form', () => {
    
    it('should submit the form successfully', () => {
    cy.visit("https://tally.so/r/nP9X2b")
    cy.get('#e80d5b07-7872-4947-8423-466a80258e8f').type("jacob samro")
    cy.get('input[id="664ea2ea-1423-42c8-b38b-e03b2a358099"]').type("9884226399")
    cy.get('input[id="0320a4ab-d1cd-4305-935a-41424b49ee19"]').type("dev@lmes.in")
    // cy.xpath("//input[@id='3b7d4d08-824d-497f-83f1-15ff54adfe5d']").click().type("Class 5{enter}")
    cy.xpath("//input[@id='3b7d4d08-824d-497f-83f1-15ff54adfe5d']").select("Class 5", { force: true })     
    cy.xpath("//input[@value='Class 5']").click()
    cy.xpath("//*[@id='3b7d4d08-824d-497f-83f1-15ff54adfe5d']").click()
    cy.xpath("input[@id='285690bb-b094-49be-8f85-d70ec41decee']").select(3)
    cy.get('#c2447ec2-64ac-4fc4-8cd2-53bebc8da58c').select(2)
    cy.get('span[class="sc-ca1236ad-0 fmcCRB"] span').click()
   
    });
});

{force: true}