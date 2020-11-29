import App from '../lib/page-objects/App'
import LoginPage from '../lib/page-objects/pages/LoginPage'
import Navbar from '../lib/page-objects/components/Navbar'

describe('E2E Tests - Login/Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        App.openHomepage()
        Navbar.clickSignIn()
        LoginPage.formIsVisible()
        LoginPage.fillForm('invalid', 'invalid password')
        LoginPage.submitForm()
        
        const message = LoginPage.error
        expect(message).toHaveText('Login and/or password are wrong.')
    })
    
    it('Should login with valid credentials', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Should logout from app', () => {
        App.logout()
        Navbar.signInButtonIsVisible()
    })
})