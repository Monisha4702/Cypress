import login from "../fixtures/loginCreds.json"

describe('Login Functionality', () => {

  it('Verifiy login with valid creds', () => {
    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]').type(Cypress.env("username"))

    cy.get('input[name="password"]').type(Cypress.env("password"))

    cy.get('button[type="submit"]').click()

    cy.contains('Time at Work').should('be.visible')

    cy.contains('Dashboard').should('be.visible')

    //cy.url().should('eq','/web/index.php/dashboard/index')


  })

  it('Verifiy login with valid username and invalid password', () => {


    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type(Cypress.env("username"))
    cy.get('input[name="password"]').type("login.password")
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
    
    
  })

  it('Verifiy login with invalid username and valid password', () => {

    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type("adminigugdgff")
    cy.get('input[name="password"]').type("admin123")
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
    
    
  })

  it('Verifiy login with invalid username and invalid password', () => {

    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type("adytdymin")
    cy.get('input[name="password"]').type("adjhgdfmin123134")
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
    
    
  })
}) 
