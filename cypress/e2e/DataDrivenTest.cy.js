
const availablemp = [
    {
        "name": "EmployeeModule/Employee1.json",
        "context": "Monisha"
    },

    {
        "name": "EmployeeModule/Employee2.json",
        "context": "kumar"
    },

    {
        "name": "EmployeeModule/Employee3.json",
        "context": "Anusha"
    },

    {
        "name": "EmployeeModule/Employee4.json",
        "context": "shobha"
    }
]
describe("Verifiy addemployee functionality",() => {
    availablemp.forEach((afixture) => {
        describe(afixture.context, () => {
          let emp;
          before(function () {
            cy.fixture(afixture.name).then(function (data) {
              emp = data;
        })
        })

        it('verify Adding employee with valid details', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            
            cy.get('input[name="username"]').type("Admin")
        
            cy.get('input[name="password"]').type("admin123")
        
            cy.get('button[type="submit"]').click()
        
            cy.contains('Time at Work').should('be.visible')
        
            cy.contains('Dashboard').should('be.visible')
        
            cy.contains('PIM').click()
        
            cy.contains('Add Employee').click()
        
            cy.get('input[name="firstName"]').type(emp.Firstname)
        
            cy.get('input[name="lastName"]').type(emp.Lastname)
        
            //cy.get('input[class="oxd-input oxd-input--active"]').should('be.visible')
          
           // cy.get('button[type="submit"]').click()
           cy.contains(' Save ').click()
        
            cy.contains('Successfully Saved').should('be.visible')
          
        })
        })
    })
})

