import App from '../lib/page-objects/App'
import LoginPage from '../lib/page-objects/pages/LoginPage'
import Navbar from '../lib/page-objects/components/Navbar'
import InsideNavBar from '../lib/page-objects/components/InsideNavbar'
import FiltersPage from '../lib/page-objects/pages/FiltersPage'

describe('E2E Tests - Transaction Filter', () => {
    it('logs in to application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('should filter transactions', () => {
        InsideNavBar.clickAccountActivityTab()
        InsideNavBar.clickFiltersLink()
        FiltersPage.fillDescription('test')
        FiltersPage.submitFilter()
        FiltersPage.resultsTableIsVisible()
        const message = FiltersPage.message

        expect(message).toHaveText('No results.')
    })
})