
import 'cypress-xpath'
import 'cypress-clipboard'

describe('template spec', () => {
  it('passes', () => {
       
    cy.visit("https://recruitcrm.io/apply/16388714222850015109lNY")
    cy.get('button[class="text-white text-sm font-sans font-bold py-1.5 px-3 md:my-6 rounded mb-3"]').click()
    cy.get('#sTest-candidateFirstName').type("jacob")
    cy.get('#sTest-candidateLastName').type("samro")
    cy.get('#sTest-candidateEmail').type("dev@lmes.in")
    cy.get('#sTest-candidateMobile').type("9884226399")
    cy.get('#sTest-candidateCity').type("Nilgiri")
    cy.get('#sTest-candidateState').type("Tamil nadu")
    cy.get('#sTest-candidateCountry').type("India")

    cy.get('#sTest-candidateOrganisation').type("zoho")
    cy.get('#sTest-candidateEmploymentStatus').type("employed")

    cy.get('#sTest-candidateTotalExp').click()
    
    cy.xpath('//input[@role="combobox"]').type("2 Years{enter}")
  
    cy.get('#sTest-uploadFile-sTest-candidateResume').selectFile("C:\\Users\\LMES-LP-290\\Desktop\\dummy.pdf",{force: true})
    cy.get('#candidateTermsBlock').click()
    
      })
    })