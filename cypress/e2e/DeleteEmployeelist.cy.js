import creds from "../fixtures/addemployee.json"
 
 
describe('Deleting Employee list ', () => {


 it('verify delete employee with valid details', () => {
   cy.visit('/web/index.php/auth/login')
   
   cy.get('input[name="username"]').type(Cypress.env("username"))

   cy.get('input[name="password"]').type(Cypress.env("password"))

   cy.get('button[type="submit"]').click()

   cy.contains('Time at Work').should('be.visible')

   cy.contains('Dashboard').should('be.visible')

   cy.contains('PIM').click()

   cy.contains('Employee List').click()

   for(let i=1; i<=10;i++){
   cy.get('button[class="oxd-icon-button oxd-table-cell-action-space"]').first().click()

   cy.contains(' Yes, Delete ').click()
   }

})
})