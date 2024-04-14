class login{
    
    OrangeHRMLogo(){

        return ('img[alt="company-branding"]')
    }

    loginUsername(){

        return ('input[name="username"]')
    }

    loginPassword() {
        return('input[name="password"]')
    }

    loginButton(){

        return ('button[type="submit"]')
    }

    loginErrorMessage='Invalid credentials'
    
    loginwithCreds(username,password){

        cy.get(this.username()).type(username)
        cy.get(this.password()).type(password)
        cy.get(this.loginButton()).click()
    }
}
const loginpage = new login()



    


