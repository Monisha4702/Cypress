
 import creds from "../fixtures/addemployee.json"
 
 
 describe('Add Employee functionality', () => {


  it('verify Adding employee with valid details', () => {
    cy.visit('/web/index.php/auth/login')
    
    cy.get('input[name="username"]').type(Cypress.env("username"))

    cy.get('input[name="password"]').type(Cypress.env("password"))

    cy.get('button[type="submit"]').click()

    cy.contains('Time at Work').should('be.visible')

    cy.contains('Dashboard').should('be.visible')

    cy.contains('PIM').click()

    cy.contains('Add Employee').click()

    cy.get('input[name="firstName"]').type(creds.firstname)

    cy.get('input[name="lastName"]').type(creds.lastname)

    cy.get('input[class="oxd-input oxd-input--active"]').should('be.visible')
  
    cy.get('button[type="submit"]').click()

    cy.contains('Successfully Saved').should('be.visible')
  
  })

 it('verify mandatory fields in the Add employee page', () => {
    cy.visit('/web/index.php/auth/login')
    
    cy.get('input[name="username"]').type(Cypress.env("username"))

    cy.get('input[name="password"]').type(Cypress.env("password"))

    cy.get('button[type="submit"]').click()

    cy.contains('Time at Work').should('be.visible')

    cy.contains('Dashboard').should('be.visible')

    cy.contains('PIM').click()

    cy.contains('Add Employee').click()  

    cy.get('button[type="submit"]').click()
    
    cy.log("clicked on submit button")

    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').first().should('be.visible')

    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').last().should('be.visible')
  })

  it('verify Add employee with toggle button', () => {
    cy.visit('/web/index.php/auth/login')
    
    cy.get('input[name="username"]').type(Cypress.env("username"))

    cy.get('input[name="password"]').type(Cypress.env("password"))

    cy.get('button[type="submit"]').click()

    cy.contains('Time at Work').should('be.visible')

    cy.contains('Dashboard').should('be.visible')

    cy.contains('PIM').click()

    cy.contains('Add Employee').click()

    cy.get('input[name="firstName"]').type(creds.firstname)

    cy.get('input[name="lastName"]').type(creds.lastname)

    cy.get('input[class="oxd-input oxd-input--active"]').should('be.visible')
  
    cy.get('span[class="oxd-switch-input oxd-switch-input--active --label-right"]').click()
    
    cy.get('button[type="submit"]').click()

  
  })


 /* it('verify Adding employee with valid username and valid password in toggle button', () => {
    cy.visit('/web/index.php/auth/login')
    
    cy.get('input[name="username"]').type(logindata.username)

    cy.get('input[name="password"]').type(logindata.password)

    cy.get('button[type="submit"]').click()

    cy.contains('Time at Work').should('be.visible')

    cy.contains('Dashboard').should('be.visible')

    cy.contains('PIM').click()

    cy.contains('Add Employee').click()

    cy.get('input[name="firstName"]').type(creds.firstname)

    cy.get('input[name="lastName"]').type(creds.lastname)

    cy.get('input[class="oxd-input oxd-input--active"]').should('be.visible')
  
    cy.get('span[class="oxd-switch-input oxd-switch-input--active --label-right"]').click()
    
    cy.get('button[type="submit"]').click()

    cy.get('input[class="oxd-input oxd-input--active "]').type("admin")

    cy.get('input[type="password"]').type('admin123')

    cy.get('input[class="oxd-input oxd-input--active"]').type('admin123')

  
  })*/
})