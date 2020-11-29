import App from '../lib/page-objects/App'
import LoginPage from '../lib/page-objects/pages/LoginPage'
import Navbar from '../lib/page-objects/components/Navbar'
import HelpPage from '../lib/page-objects/pages/HelpPage'

describe('E2E Tests - Login', () => {
    it('logs in to application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('should load help content', () => {
        Navbar.clickSettings()
        Navbar.clickHelp()
        expect(HelpPage.title).toHaveText('How do I log into my account?')

        HelpPage.clickTransferFunds()
        expect(HelpPage.title).toHaveText('How do I transfer funds?')

        HelpPage.clickPayBills()
        expect(HelpPage.title).toHaveText('How do I pay bills?')
    })
})